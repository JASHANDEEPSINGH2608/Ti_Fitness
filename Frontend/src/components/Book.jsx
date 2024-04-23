import React from "react";
import Pdf from "./Pdf";

const Book = () => {
  return (
    <div className="flex flex-col bg-slate-900 mx-4 p-6 rounded-md gap-6 h-dvh">
      <div className="flex justify-between content-center flex-wrap	">
        <h2 className="font-bold text-white text-xl">Guide</h2>
        <ul className="inline-flex gap-12 items-center justify-center">
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
          <li>five</li>
        </ul>
        <div>
          <form action="submit">
            <label className="input input-bordered flex items-center gap-2 h-10">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
        </div>
      </div>
      <div className="bg-gray-700 rounded-md h-full">
        <Pdf/>
      </div>
    </div>
  );
};

export default Book;
