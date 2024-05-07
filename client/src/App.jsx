import { Route, Routes } from "react-router-dom";
import GetUser from "./components/GetUser";
import AddNewUser from "./components/AddNewUser";
import NewUser from "./components/NewUser";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GetUser />} />
        <Route path="/add" element={<AddNewUser />} />
        <Route path="/create" element={<NewUser />} />
      </Routes>
    </div>
  );
};

export default App;
