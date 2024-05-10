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
      className="flex flex-col w-[500px] bg-gray-600 mx-auto mt-[rem]"
    >
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter you'r name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="enter you'r name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter you'r email"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="enter you'r phone"
      />
      <button type="submit" className="text-white text-[30px]">
        Create
      </button>
    </form>
  );
};

export default AddNewUser;
