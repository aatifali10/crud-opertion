import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch user data using userId
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/api/update/${id}`
          );
          setValues(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [values]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/api/update/${id}`,
        values
      );
      console.log("Response:", response.data.NewUser);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName || ""}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
      <input
        name="email"
        value={values.email || ""}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <input
        name="phone"
        value={values.phone || ""}
        onChange={handleChange}
        placeholder="Enter your phone"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
