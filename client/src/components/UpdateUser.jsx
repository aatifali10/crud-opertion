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
    <form
    onSubmit={handleSubmit}
    className="flex flex-col w-[500px] bg-gray-600 mx-auto mt-[1rem] p-6 rounded-lg shadow-md"
  >
    <input
      type="text"
      name="name"
      value={values.name}
      onChange={handleChange}
      placeholder="Enter your name"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      type="text"
      name="lastName"
      value={values.lastName}
      onChange={handleChange}
      placeholder="Enter your last name"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      name="email"
      value={values.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      name="phone"
      value={values.phone}
      onChange={handleChange}
      placeholder="Enter your phone"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <button
      type="submit"
      className="py-2 px-4 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-300"
    >
      Create
    </button>
  </form>
  
  );
};

export default UpdateUser;
