import "./App.css";
import Forgot from "./pages/forgot/Forgot.jsx";
import { Routes,Route } from "react-router";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/Home/Home.jsx";
import Guide from "./pages/guide/Guide.jsx";
import Alpha from "./pages/alpha/alpha.jsx";
import Attendance from "./pages/attendance/attendance.jsx";
import Admin from "./pages/Admin/Admin.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forgot/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/guide" element={<Guide/>}/>
        <Route path="/alpha" element={<Alpha/>}/>
        <Route path="/attendance" element={<Attendance/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
  );
};
export default App;
