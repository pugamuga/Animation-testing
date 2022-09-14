import React from "react";
import { Link } from "react-router-dom";
import btn from "../assets/btn.png";

const BackBtn = () => {
  return (
    <Link to={`/`}>
      <div className="fixed bottom-1 left-1 opacity-70 hover:opacity-100 active:opacity-100 z-50 active:scale-75 transition-all duration-300">
        <img src={btn} alt="" className=" w-20" />
        <div className="text-gray-400 drop-shadow-2xl absolute top-[30px] left-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 ml-[-6px] mt-[-4px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default BackBtn;
