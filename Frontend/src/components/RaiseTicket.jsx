import React from "react";
import { submitQuery } from "../../../Backend/controllers/quer.controller";

const RaiseTicket = ({ value }) => {
  const Query = async () => {
    var query = prompt("Your Complaint for " + value);
    try {
      const response = await fetch("http://localhost:3000/api/queries/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          instrument:value,
          query,
        }),
      });
      console.log(response);
      const data = await response.json();

      if (response.ok) {
        // Login successful
        console.log("Query successful!");
      } else {
        console.error("Failed:", data.error || response.statusText);
        toast.error("query failed");
      }
    } catch (error) {
      console.error("Error in:", error);
      toast.error("Error in:", error.message);
    }
  };

  return (
    <div>
      <button className="btn btn-primary btn-xs" onClick={() => Query()}>
        Raise Ticket
      </button>
    </div>
  );
};

export default RaiseTicket;
