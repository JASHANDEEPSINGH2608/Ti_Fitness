import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Here you can perform login logic using username and password
    // For example, you can send a request to your backend to validate the credentials
    // For now, let's just log the username and password to the console
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="p-8 h-screen flex items-center justify-center bg-black">
        <div className="flex justify-center flex-col items-center lg:flex-row lg:items-center ">
          <div className="w-3/5 h-3/5">
            <img src="hero.png" alt="hero" />
          </div>
          <div className="flex flex-col gap-2 w-1/4 justify-center">
            <h2 className="text-6xl font-bold">Login</h2>
            <h6 className="text-lg pb-2">Glad you're back</h6>
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
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
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
                  onChange={handlePasswordChange}
                />
              </label>
              <button className="btn btn-wide" onClick={handleLogin}>
                LOGIN
              </button>
              <img src="or.png" className="w-3/4 py-8" />
              <div className="flex gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  New User?
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

export default Login;
