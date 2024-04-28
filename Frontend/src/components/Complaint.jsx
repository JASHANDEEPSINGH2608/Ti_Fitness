import React from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Complaint = (props) => {
  function handleclick() {
    props.handleComplaintClick(props.issue, props.date);
  }
  function handleCancel() {
    toast("Complaint Cancelled");
  }
  return (
    <>
      <div><Toaster/></div>
      <div className="flex justify-between items-center w-full bg-slate-800 h-16 rounded-md px-4 ">
        <h1 className="text-2xl font-semibold">{props.issue}</h1>
        <div className="flex items-center gap-x-2">
          <h1 className="font-semibold">{props.date}</h1>
          <button
            className="btn btn- bg-primary btn-sm text-black"
            onClick={handleclick}
          >
            Select
          </button>
          <button className="btn btn-sm bg-gray-900 " onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Complaint;
