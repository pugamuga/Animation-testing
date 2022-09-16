import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fruits } from "../data";
import DeleteAllItemsIcon from "./DeleteAllItemsIcon";

const CartInside = ({
  setBgCover,
  setIsCartVisible,
  delayCart,
  setDelayCart,
  buy,
  setBuy,
}) => {
  const totalAmount =
    buy[0] * fruits[0].price +
    buy[1] * fruits[1].price +
    buy[2] * fruits[2].price;
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
              item={item}
              key={item}
              fruitImage={fruits[item].image}
              buy={buy}
              setBuy={setBuy}
            />
          );
        })}
      </div>
      <div
        onClick={() => {
          setBuy({ 0: 0, 1: 0, 2: 0 });
        }}
        className=" absolute top-2 left-2"
      >
        <DeleteAllItemsIcon />
      </div>
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className=" bg-black px-8 pb-1 rounded-md"
      >
        <h1 className=" text-yellow-300 font-thin">
          Total:{" "}
          <span className=" font-extrabold">${totalAmount.toFixed(1)}</span>
        </h1>
      </motion.div>
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

const StringOfFruit = ({ fruitImage, buy, setBuy, item }) => {
  const [counterCart, setCounterCart] = useState(0);
  let priceRight = buy[item] * fruits[item].price;
  console.log(buy[item] + "dssd");
  return (
    <div className="flex w-full justify-between px-4 items-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.4 + item * 0.1 }}
        className=" text-4xl -ml-1 drop-shadow-[2px_2px_0_black]"
      >
        {fruitImage}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-row gap-x-3 items-center -ml-3"
      >
        <div
          onClick={() => {
            if (buy[item] >= 1) {
              if (item == 0) {
                setBuy((prev) => {
                  return { ...prev, 0: buy[item] - 1 };
                });
              }
              if (item == 1) {
                setBuy((prev) => {
                  return { ...prev, 1: buy[item] - 1 };
                });
              }
              if (item == 2) {
                setBuy((prev) => {
                  return { ...prev, 2: buy[item] - 1 };
                });
              }
            }
          }}
          className={` superflex h-8 w-8 bg-black rounded-full ${
            buy[item] < 1
              ? "opacity-20"
              : "opacity-80 hover:opacity-100 active:scale-90"
          }  transition-all duration-100`}
        >
          <h1 className=" font-extrabold text-yellow-300 pb-[3px] font-serif ">
            -
          </h1>
        </div>
        <h1 className="w-6 text-center font-extrabold">{buy[item]}</h1>
        <div
          onClick={() => {
            if (buy[item] < 99) {
              if (item == 0) {
                setBuy((prev) => {
                  return { ...prev, 0: buy[item] + 1 };
                });
              }
              if (item == 1) {
                setBuy((prev) => {
                  return { ...prev, 1: buy[item] + 1 };
                });
              }
              if (item == 2) {
                setBuy((prev) => {
                  return { ...prev, 2: buy[item] + 1 };
                });
              }
            }
            if (buy[item] > 99) {
              if (item == 0) {
                setBuy((prev) => {
                  return { ...prev, 0: 99 };
                });
              }
              if (item == 1) {
                setBuy((prev) => {
                  return { ...prev, 1: 99 };
                });
              }
              if (item == 2) {
                setBuy((prev) => {
                  return { ...prev, 2: 99 };
                });
              }
            }
          }}
          className={` superflex h-8 w-8 bg-black rounded-full ${
            buy[item] > 98
              ? "opacity-20"
              : "opacity-80 hover:opacity-100 active:scale-90"
          }   transition-all duration-100`}
        >
          <h1 className=" font-extrabold text-yellow-300 pb-[3px] font-serif ">
            +
          </h1>
        </div>
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-4 font-extrabold mr-4"
      >
        ${priceRight.toFixed(1)}
      </motion.h1>
    </div>
  );
};
