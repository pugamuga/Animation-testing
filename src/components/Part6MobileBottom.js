import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import { fruits } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { ticTacToe, skulls, hideout } from "hero-patterns";

const Part6MobileBottom = ({ fruitNumber, setMainClick }) => {
  const [counter, setCounter] = useState(1);
    const resultPrice =fruits[fruitNumber].price*counter

  return (
    <motion.div
      initial={{ y: 700 }}
      animate={{ y: 0 }}
      exit={{ y: 700 }}
      transition={{ duration: 0.7, easy: "easyOut" }}
      id="static-bottom"
      className=" fixed bg-slate-900/80 bottom-0 h-1/2 w-full z-20 lg:left-0 lg:w-1/2 lg:h-full flex flex-col items-center justify-between py-4"
    >
      <div className=" text-white/50 w-full px-8 flex justify-between items-center">
        <h1>Fruit</h1>
        <button
          onClick={() => {
            setMainClick(false);
          }}
          className="btn text-black scale-75"
        >
          Back
        </button>
      </div>
      <div className=" text-white w-full mb-20 px-12 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold">
          {fruits[fruitNumber].name}
          {fruits[fruitNumber].image}
        </h1>
        <h1 className="text-sm mt-2">{fruits[fruitNumber].details}</h1>
        <div className=" flex justify-between mt-8 w-full">
          <div className=" flex flex-row gap-x-3 items-center ">
            <div
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
              className={`w-8 h-8 rounded-full text-center ${counter < 2&&"opacity-25"} hover:scale-110 bg-white text-black ring-2 ring-black superflex`}
            >
              <h1 className=" font-bold mb-[3px]">-</h1>
            </div>
            <h1>{counter}</h1>
            <div 
            onClick={() => {
                if (counter < 9) {
                    setCounter(counter + 1);
                  }
            }}
            className={`w-8 h-8 rounded-full text-center ${counter > 8&&"opacity-25"} hover:scale-110 bg-white text-black ring-2 ring-black superflex`}>
              <h1 className=" font-bold mb-[3px]">+</h1>
            </div>
          </div>
          <h1 className=" font-extrabold">${resultPrice.toFixed(1)}</h1>
        </div>
      </div>
      <div className="">
        <button className="btn text-black scale-75">Add to card</button>
        <button className="btn text-black scale-75">Buy now</button>
      </div>
    </motion.div>
  );
};

export default Part6MobileBottom;
