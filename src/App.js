import React from "react";
import LogoMain from "./components/LogoMain";
import emptyArray from "./functions/emptyArray";

const emAr = [];
emptyArray(emAr, 1);

const App = () => {
  return (
    <div className=" flex justify-center bg-slate-300 h-screen ">
      <div className="w-2/3 h-2/3 bg-white rounded-b-xl flex justify-start flex-col items-center pt-12 shadow-md">
        <LogoMain />
        <div
          className={`bg-slate-200 grid ${
            emAr.length == 1
              ? "grid-cols-1"
              : emAr.length > 2
              ? "grid-cols-3"
              : "grid-cols-2"
          }  mt-24 gap-x-32 gap-y-8`}
        >
          {emAr.map((item) => {
            return (
              <button className=" text-center bg-slate-400 h-12 w-36 rounded-md font-extrabold">
                {item } part
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
