import React from "react";
import { useState, useEffect } from "react";

const Lat = () => {
  const [aRecord, setaRecord] = useState([]);
  const [uniqueRollNumbersCount, setUniqueRollNumbersCount] = useState(0);
  useEffect(() => {
    const getRecords = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/attendance/rollnos",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
        const extractedRollNumbers = data
          .filter((obj) => obj.createdAt.split("T")[0] === currentDate) // Filter objects created on the current date
          .map((obj) => obj.rollNo);
        console.log("Response:", extractedRollNumbers);
        setaRecord(extractedRollNumbers);

        const uniqueRollNumbers = extractedRollNumbers.reduce((acc, rollNo) => {
          if (extractedRollNumbers.filter(num => num === rollNo).length === 1) {
            acc++;
          }
          return acc;
        }, 0);
        setUniqueRollNumbersCount(uniqueRollNumbers);

      } catch (error) {
        console.error("Error fetching queries:", error);
      }
    };
    getRecords();
  }, []);
  return (
    <div className="flex flex-col bg-slate-800 px-12 py-10 rounded-lg gap-6">
      <h1 className="font-bold text-2xl text-center">Current Capacity</h1>
      <div className="flex items-center gap-5">
        <h1 className="font-bold text-8xl">{uniqueRollNumbersCount}</h1>
        <h1 className="font-semibold text-4xl">/ 32</h1>
      </div>
    </div>
  );
};

export default Lat;
