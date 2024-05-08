// UpdateUser.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${userId}`)
      .then((res) => setFormData(res.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/update/${userId}`, formData);
      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Enter your phone"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateUser;
