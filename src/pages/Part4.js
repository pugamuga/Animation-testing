import { useAnimation } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import { ticTacToe, topography, skulls } from "hero-patterns";

const Part4 = ({ setPageNum }) => {
  const [jumpSize, setJumpSize] = useState(0);
  const [jumpSizeTop, setJumpSizeTop] = useState(20);
  const [initialWeight, setInitialWeight] = useState(0);
  const [afraid, setAfraid] = useState(false);
  console.log(initialWeight);

  useEffect(() => {
    setPageNum(4);
  }, []);

  const control = useAnimation();
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv bg-cover relative "
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 4
      </h1>
      <input
        min={20}
        max={200}
        step={5}
        onChange={(e) => {
          setJumpSizeTop(e.target.value);
        }}
        value={jumpSizeTop}
        type="range"
        className=" absolute top-[150px] right-[170px] rotate-[-90deg] mr-[10px] w-[150px] appearance-none bg-white/20 rounded-full"
      />
      <input
        min={0}
        max={50}
        step={5}
        onChange={(e) => {
          setJumpSize(e.target.value);
        }}
        value={jumpSize}
        type="range"
        className=" absolute top-[230px] right-[100px] bg-white/20 w-[150px] appearance-none rounded-full
        "
      />
      <div className="mt-[20vh] flex flex-col justify-center items-center">
        <motion.h1
          initial={{ x: 0, w: initialWeight }}
          transition={{
            type: "keyframes",
            duration: jumpSizeTop > 100 ? 0.7 : 0.4,
          }}
          animate={control}
          className=" text-[60px] -mb-3 text-center drop-shadow-[2px_0_1px_black] overflow-hidden"
        >
          🐒
        </motion.h1>
        <div
          style={{ backgroundImage: topography("white", 1) }}
          className=" h-[30px] w-[300px] border-2 border-black bg-yellow-800/50 rounded-md font-extrabold superflex"
        >
          {afraid && (
            <h1 className=" text-rose-500 drop-shadow-[2px_1px_0_black]">
              Manki is afraid to fall
            </h1>
          )}
        </div>
        <div className=" grid grid-cols-3 gap-y-3 gap-x-3 scale-90 mt-4">
          <button
            onClick={() => {
              if (initialWeight > -99) {
                setAfraid(false);
                setInitialWeight((prev) => prev - jumpSize);
                control.start({
                  y: [0, Number(-jumpSizeTop), 0],
                  x: Number(initialWeight - jumpSize),
                });
              } else {
                setInitialWeight(0);
                setAfraid(true);
              }
            }}
            className="btn"
          >
            Jump left
          </button>
          <button
            onClick={() => {
              setAfraid(false);
              control.start({
                y: [0, Number(-jumpSizeTop), 0],
              });
            }}
            className="btn"
          >
            Jump
          </button>
          <button
            onClick={() => {
              if (initialWeight < 99) {
                setAfraid(false);
                setInitialWeight(Number(initialWeight) + Number(jumpSize));
                control.start({
                  y: [0, Number(-jumpSizeTop), 0],
                  x: Number(Number(initialWeight) + Number(jumpSize)),
                });
              } else {
                setInitialWeight(0);
                setAfraid(true);
              }
            }}
            className="btn"
          >
            Jump right
          </button>

          <button
          onClick={() => {
            setAfraid(false);
            control.start({
              y: Number(-jumpSizeTop)*1.5,
            });
          }}
          className="btn">Fly</button>
          <button
            onClick={() => {
              setAfraid(false);
              control.start({
                y: [0, Number(-jumpSizeTop)*1.5, 0],
                rotate:[0, jumpSizeTop>100?720:360,]
              });
            }}
            className="btn"
          >
            Manki Flip!
          </button>
          <button 
          onClick={() => {
            setAfraid(false);
            control.start({
              y: 0,
            });
          }}
          className="btn">Drop</button>
        </div>
      </div>
    </div>
  );
};

export default Part4;
