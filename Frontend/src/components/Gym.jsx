import React from "react";
import Cardio from "./gymcomponent/Machines";
import Machine from "./gymcomponent/Cardio";
import Weight from "./gymcomponent/Weight";

const Gym = () => {
  return (
    <div className="flex gap-6 p-4">
      <div className="flex basis-1/5 bg-neutral-950 h-[85vh] rounded-lg justify-evenly">
        <div className="flex flex-col justify-between p-6">
          <div className="flex flex-col gap-10">
          <h1 className="text-3xl font-semibold">Navigation</h1>
          <ul className=" flex flex-col gap-4 menu bg-base-200 w-56 rounded-box">
            <li>
              <a className="text-xl font-semibold">Cardio</a>
            </li>
            <li>
              <a className="text-xl font-semibold">Machines</a>
            </li>
            <li>
              <a className="text-xl font-semibold">Free Weights</a>
            </li>
          </ul>
          </div>
          <img src="logo.png"></img>
        </div>
      </div>
      <div className="basis-4/5 bg-neutral-950 h-[85vh] rounded-lg p-6 overflow-scroll ">
        <Cardio/>
        <Machine/>
        <Weight/>
      </div>
    </div>
  );
};

export default Gym;
