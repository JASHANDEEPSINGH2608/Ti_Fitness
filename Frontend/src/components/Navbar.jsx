import React from "react";
import { FaPowerOff } from "react-icons/fa6";
import { useNavigate } from "react-router";
const Navbar = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Item 4</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Ti Fitness</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold" onClick={ () => navigate("/home")}>GYM</a>
            </li>
            <li>
              <a className="font-bold" onClick={ () => navigate("/guide")}>GUIDE</a>
            </li>
            <li>
              <a className="font-bold" onClick={ () => navigate("/alpha")}>ALPHA</a>
            </li>
            <li>
              <a className="font-bold" onClick={ () => navigate("/attendance")}>ATTENDANCE</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end px-5 hover:cursor-pointer">
          <a onClick={()=>navigate("/")}>
            <FaPowerOff />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
