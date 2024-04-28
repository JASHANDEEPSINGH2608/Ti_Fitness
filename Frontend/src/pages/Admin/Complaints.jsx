import React from "react";
import Complaint from "../../components/Complaint";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Complaints = () => {
  const [queries, setQueries] = useState([]);
  useEffect(() => {
    const getQuery = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/queries/admin",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Response:", data.queries);
        setQueries(data.queries);
      } catch (error) {
        console.error("Error fetching queries:", error);
        toast.error("Error fetching queries:", error.message);
      }
    };
    getQuery();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);

  const handleComplaintClick = (issue, date) => {
    setSelectedComplaint({ issue, date });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedComplaint(null);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4 bg-gray-900 h-[85vh] rounded-lg p-4 overflow-auto">
          {queries.map((query) => (
            <Complaint
              key={query._id}
              issue={query.instrument}
              date={new Date(query.timestamp).toLocaleDateString()}
              queri={query.query}
              handleComplaintClick={handleComplaintClick}
            />
          ))}
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full">
          <div className="bg-gray-900/50 w-full h-full flex justify-center items-center">
            <div className="flex flex-col justify-between bg-white p-4 rounded h-60">
              <h1 className="font-bold text-xl text-black">
                Complaint Details:
              </h1>
              <div className="text-black">
                <p>Issue: {selectedComplaint?.issue}</p>
                <p>Date: {selectedComplaint?.date}</p>
                <p>Details: {selectedComplaint?.queri}</p>
              </div>
              <button
                className="btn btn-primary btn-wide"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Complaints;
