import { Route, Routes } from "react-router-dom";
import GetUser from "./components/GetUser";
import AddNewUser from "./components/AddNewUser";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetUser />} />
        <Route path="/add" element={<AddNewUser />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
