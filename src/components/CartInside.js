import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fruits } from "../data";

const CartInside = ({
  setBgCover,
  setIsCartVisible,
  delayCart,
  setDelayCart,
  buy,
  setBuy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{
        duration: 0.6,
        easy: "easyOut",
        delay: delayCart ? 0 : 0,
      }}
      className="flex flex-col items-center justify-between bg-opacity-40 absolute z-20 w-4/5 h-[40%] lg:h-1/2 lg:w-1/3 lg:p-8 p-2 bg-white rounded-md"
    >
      <div className=" flex flex-col items-center w-full">
        <h1 className=" font-extrabold">Your purchases</h1>
        <div className="flex w-full justify-between px-4 mt-4 text-yellow-300 bg-black pb-1 rounded-md">
          <h1>Fruit</h1>
          <h1>Quantity</h1>
          <h1>Price</h1>
        </div>
      </div>
      <div className=" flex flex-col w-full lg:gap-y-3 gap-y-2">
        {[0, 1, 2].map((item) => {
          return (
            <StringOfFruit
            key={item}
              fruitImage={fruits[item].image}
              buy={buy}
              setBuy={setBuy}
            />
          );
        })}
      </div>
      <div className=" bg-black px-8 pb-1 rounded-md">
        <h1 className=" text-yellow-300 font-thin">
          Total: <span className=" font-extrabold">${0}</span>
        </h1>
      </div>
      <button
        onClick={() => {
          setBgCover(false);
          setIsCartVisible(false);
          setDelayCart(false);
        }}
        className="btn-sm lg:btn text-md absolute top-1 right-1 "
      >
        Back
      </button>
    </motion.div>
  );
};

export default CartInside;

const StringOfFruit = ({ fruitImage, buy, setBuy }) => {
  const [counterCart, setCounterCart] = useState(0);

  return (
    <div className="flex w-full justify-between px-4 items-center">
      <h1 className=" text-4xl -ml-1 drop-shadow-[2px_2px_0_black]">
        {fruitImage}
      </h1>
      <div className="flex flex-row gap-x-3 items-center -ml-3">
        <div
          onClick={() => {
            if (counterCart >= 1) {
              setCounterCart(counterCart - 1);
            }
          }}
          className={` superflex h-8 w-8 bg-black rounded-full ${
            counterCart < 1
              ? "opacity-20"
              : "opacity-80 hover:opacity-100 active:scale-90"
          }  transition-all duration-100`}
        >
          <h1 className=" font-extrabold text-yellow-300 pb-[3px] font-serif ">
            -
          </h1>
        </div>
        <h1 className="w-3 text-center font-extrabold">{counterCart}</h1>
        <div
          onClick={() => {
            if (counterCart < 9) {
              setCounterCart(counterCart + 1);
            }
          }}
          className={` superflex h-8 w-8 bg-black rounded-full ${
            counterCart > 8
              ? "opacity-20"
              : "opacity-80 hover:opacity-100 active:scale-90"
          }   transition-all duration-100`}
        >
          <h1 className=" font-extrabold text-yellow-300 pb-[3px] font-serif ">
            +
          </h1>
        </div>
      </div>
      <h1>Price</h1>
    </div>
  );
};
