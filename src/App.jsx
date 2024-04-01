import "./App.css";
import Forgot from "./pages/forgot/Forgot.jsx";
import { Routes,Route } from "react-router";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";

const App = () => {
  return (
    <div className="p-8 h-screen flex items-center justify-center bg-black">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forget" element={<Forgot/>} />
      </Routes>
    </div>
  );
};
export default App;
