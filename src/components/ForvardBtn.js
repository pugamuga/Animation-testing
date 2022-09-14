import React from "react";
import { Link } from "react-router-dom";
import btn from "../assets/btn.png";

const ForvardBtn = ({ pageNum }) => {
  return (
    <Link to={`/${pageNum == 9 ? "" : pageNum + 1}`}>
      <div
        onClick={() => {
          console.log(pageNum);
        }}
        className="fixed bottom-1 right-1 opacity-70 hover:opacity-100 active:opacity-100 z-50 active:scale-75 transition-all duration-300"
      >
        <img src={btn} alt="" className=" w-20" />
        <div className="text-gray-400 drop-shadow-2xl absolute top-[30px] left-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mt-[-4px] ml-[-4px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ForvardBtn;
