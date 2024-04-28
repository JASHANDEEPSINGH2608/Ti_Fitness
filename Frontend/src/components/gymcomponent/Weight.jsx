import React from 'react'
import RaiseTicket from "../RaiseTicket";

const Weight = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl">WEIGHTS</h1>
      <div className="Card flex flex-shrink-0 p-5 gap-6">
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.powermaxfitness.net/uploads/thumb/800_600_1676631568_product_17022023162928.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dumbell 5Kg</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Dumbell 5Kg"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.powermaxfitness.net/uploads/thumb/800_600_1676631568_product_17022023162928.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dumbell 10Kg</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Dumbell 10Kg"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.powermaxfitness.net/uploads/thumb/800_600_1676631568_product_17022023162928.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dumbell 15Kg</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Dumbell 15Kg"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.powermaxfitness.net/uploads/thumb/800_600_1676631568_product_17022023162928.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dumbell 20Kg</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Dumbell 20Kg"/>
            </div>
          </div>
        </div>
        <div className="card-compact w-56 glass">
          <figure>
            <img
              src="https://www.powermaxfitness.net/uploads/thumb/800_600_1676631568_product_17022023162928.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dumbell 25Kg</h2>
            <div className="card-actions justify-end">
              <RaiseTicket value="Dumbell 25Kg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weight
