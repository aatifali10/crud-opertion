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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {user.map((items) => (
          <div key={items} className="border rounded-md p-4 shadow-md">
            <h1 className="text-lg font-bold">
              {items.name} {items.lastName}
            </h1>
            <h6 className="text-gray-600">{items.email}</h6>
            <h6 className="text-gray-600">{items.phone}</h6>
            <div></div>
            <button
              onClick={() => handleDelete(items._id)}
              className="bg-red-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Delete
            </button>
            <Link to={`/update/${items._id}`}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2">
                Edit
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetUser;
