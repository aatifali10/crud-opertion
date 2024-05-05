import { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    axios
      .get("http://localhost:5000/api/get")
      .then((res) => setUser(res.data.user));
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <h1>Get user data from database</h1>
      {user.map((item) => (
        <div key={item}>
          <h1>{item.name}</h1>
          <h1>{item.lastName}</h1>
          <h4>{item.email}</h4>
          <h4>{item.phone}</h4>
        </div>
      ))}
    </div>
  );
};

export default User;
