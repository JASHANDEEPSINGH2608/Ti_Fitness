import React from "react";
import RaiseTicket from "../RaiseTicket";

const Machines = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">Machines</h1>
      <div className="Card flex p-5 gap-6">
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.maxprofitness.in/cdn/shop/files/MP1859_2048x2048.jpg?v=1704698009"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lat Pull Down</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Lat Pull Down"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.maxprofitness.in/cdn/shop/files/MP1838_2048x2048.jpg?v=1704698326"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Pec Fly</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Pec Fly"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.maxprofitness.in/cdn/shop/files/MP1838_2048x2048.jpg?v=1704698326"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Leg extension</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Leg extension"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.maxprofitness.in/cdn/shop/products/MPB005-2_2048x2048.jpg?v=1681899096"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Leg Press</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Leg Press"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.maxprofitness.in/cdn/shop/products/MB-2629-OLYMPIC-FLAT-BENCH_2048x2048.jpg?v=1681896494"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bench Press</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machines;
