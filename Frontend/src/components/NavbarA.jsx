import React from "react";

const NavbarA = ({setPage}) => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Ti Fitness</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold" onClick={()=>setPage(1)}>Complaints</a>
            </li>
            <li>
              <a className="font-bold" onClick={()=>setPage(2)}>Attendance</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarA;
