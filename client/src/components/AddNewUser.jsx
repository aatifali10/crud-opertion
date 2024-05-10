import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddNewUser = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/create", formData)
        .then((res) => setFormData("Response:", res.data.NewUser));
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
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="Enter your last name"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="mb-4 py-2 px-4 rounded-md bg-gray-200 focus:outline-none focus:bg-white"
    />
    <input
      name="phone"
      value={formData.phone}
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

export default AddNewUser;
