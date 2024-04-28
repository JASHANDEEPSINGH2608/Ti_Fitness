import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Attendance = () => {
  const [rollNumber, setRollNumber] = useState("");
  const feed = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/attendance/rollnos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rollNo: rollNumber,
          }),
        }
      );
      console.log(response);
      const data = (await response.ok) ? response.json() : response.text();

      if (response.ok) {
        // Login successful
        console.log("Attendance successful!");
      } else {
        console.error("Failed:", data.error || response.statusText);
        toast.error("Attendance input failed");
      }
    } catch (error) {
      console.error("Error in:", error);
      toast.error("Error in:", error.message);
    }
  };
  return (
    <div>
      <div>
        <Toaster />
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-center items-center bg-gray-900 h-[85vh] rounded-lg gap-12">
          <h2 className="text-4xl font-bold">Gym Attendance</h2>
          <div className="flex flex-col gap-4 items-center">
            <label className="input input-bordered flex items-center gap-2">
              Roll Number
              <input
                type="text"
                className="grow"
                placeholder=""
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
              />
            </label>
            <button className="btn btn-primary btn-wide" onClick={feed}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
