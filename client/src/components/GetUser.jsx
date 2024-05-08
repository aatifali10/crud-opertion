import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GetUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => setUser(res.data.user));
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${userId}`);
      setUser(user.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      <Link to="/add">
        <button className="p-4 bg-blue-700 text-white m-4">Add New User</button>
      </Link>
      <div className="flex justify-around flex-wrap">
        {user.map((items) => (
          <div key={items} className="w-[20%]">
            <h1>{items._id}</h1>
            <h1>{items.name}</h1>
            <h1>{items.lastName}</h1>
            <h6>{items.email}</h6>
            <h6>{items.phone}</h6>
            <button
              onClick={() => handleDelete(items._id)}
              className="bg-blue-700 p-4 text-white m-2"
            >
              Delete
            </button>
            <Link to="/update">
              <button className="bg-blue-700 p-4 text-white m-2">Edit</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetUser;
