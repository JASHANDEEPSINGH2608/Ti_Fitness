import "./App.css";
import Forgot from "./pages/forgot/Forgot.jsx";
import { Routes,Route } from "react-router";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forgot/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  );
};
export default App;
