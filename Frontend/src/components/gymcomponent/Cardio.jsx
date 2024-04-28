import React from 'react'
import RaiseTicket from "../RaiseTicket";

const Cardio = () => {
    return (
        <div>
          <h1 className="font-semibold text-2xl">Cardio</h1>
          <div className="Card flex flex-shrink-0 p-5 gap-6">
            <div className="card-compact w-56 glass">
              <figure>
                <img
                  src="https://www.maxprofitness.in/cdn/shop/files/PTM405.jpg?v=1703766260"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Treadmill</h2>
                <div className="card-actions justify-end">
                  <RaiseTicket value="Treadmill"/>
                </div>
              </div>
            </div>
            <div className="card-compact w-56 glass">
              <figure>
                <img
                  src="https://www.maxprofitness.in/cdn/shop/files/MP905_2048x2048.jpg?v=1702010669"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Spin Bike</h2>
                <div className="card-actions justify-end">
                  <RaiseTicket value="Spin Bike"/>
                </div>
              </div>
            </div>
            <div className="card-compact w-56 glass">
              <figure>
                <img
                  src="https://m.media-amazon.com/images/I/51gek3sc56L._AC_UF894,1000_QL80_.jpg"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Elliptical Trainer</h2>
                <div className="card-actions justify-end">
                  <RaiseTicket value="Elliptical Trainer"/>
                </div>
              </div>
            </div>
            <div className="card-compact w-56 glass">
              <figure>
                <img
                  src="https://www.maxprofitness.in/cdn/shop/products/61VvpDyah_L._SL1500_2048x2048.jpg?v=1681792456"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Air Bike</h2>
                <div className="card-actions justify-end">
                  <RaiseTicket value="Air Bike"/>
                </div>
              </div>
            </div>
            <div className="card-compact w-56 glass">
              <figure>
                <img
                  src="https://www.maxprofitness.in/cdn/shop/products/MP670-ROWING-MACHINE-1_2048x2048.jpg?v=1681793096"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Row Machine</h2>
                <div className="card-actions justify-end">
                  <RaiseTicket value="Row Machine"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Cardio
