import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, Toaster } from "react-hot-toast";
import validator from "validator";

const Signup = () => {
  const navigate = useNavigate();

  // State for input fields
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      if (!validator.isEmail(email)) {
        toast.error("Please enter a valid email address");
        return;
      }

      if (!email.endsWith("@thapar.edu")) {
        toast.error(
          "Signup allowed only from Thapar Institute email addresses"
        );
        return;
      }
      if (password.length < 6) { 
        toast.error("Password must be at least 6 characters long"); 
        return; 
      }
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: username,
          password: password,
        }),
      });
      console.log(response);
      if (!response.bodyUsed && response.status === 201) {
        // Signup successful
        console.log("Signup successful!");
        toast.success("Signup successful!");
        navigate("/"); // Redirect to dashboard upon successful signup
        return;
      }
      const data = await response.json();

      if (response.ok) {
        // Signup successful
        console.log("Signup successful!");
        navigate("/"); // Redirect to dashboard upon successful signup
      } else {
        // Signup failed
        console.error("Signup failed:", data.error || response.statusText);
        toast.error("Signup failed:", data.error || response.statusText);
        // You might want to display an error message to the user
      }
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Error signing up:", error.message);
      // Handle any other errors that might occur during signup
      // You might want to display an error message to the user
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="p-8 h-screen flex items-center justify-center bg-black">
        <div className="flex justify-center flex-col items-center lg:flex-row lg:items-center ">
          <div className="w-3/5 h-3/5">
            <img src="hero.png" alt="hero" />
          </div>
          <div className="flex flex-col gap-2 w-1/4 justify-center">
            <h2 className="text-6xl font-bold">Signup</h2>
            <h6 className="text-lg pb-2">Welcome to Family</h6>
            <div className=" bg-slate-800/45 rounded-xl flex flex-col gap-2 items-center justify-center h-3/4 py-8">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-48"
                  placeholder="Thapar mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="text"
                  className="grow w-48"
                  placeholder="User Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow w-48"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button className="btn btn-wide" onClick={handleSignup}>
                SIGNUP
              </button>
              <img src="or.png" className="w-3/4 py-8" />
              <div className="flex gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/forget");
                  }}
                >
                  Forgot Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
