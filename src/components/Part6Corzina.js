import React from "react";
import Cart6 from "./Cart6";

const Part6Corzina = ({ setMainClick, setIsCartVisible,setBgCover }) => {
  return (
    <div
      onClick={() => {
        setMainClick(false);
        setIsCartVisible(true);
        setBgCover(true)
      }}
      className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-black h-8 w-28 rounded-full flex items-center justify-between px-3 opacity-60 hover:opacity-100 tr hover:scale-110"
    >
      <Cart6 />
      <h1 className="pb-1 text-yellow-300 text-sm">Empty </h1>
      {/* <h1 className='pb-1 text-yellow-300 text-md font-extrabold' > ${Empty} </h1> */}
    </div>
  );
};

export default Part6Corzina;
