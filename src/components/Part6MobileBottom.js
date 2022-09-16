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

const Part6MobileBottom = ({
  fruitNumber,
  setMainClick,
  setBgCover,
  screenSize,
  setIsCartVisible,
  setDelayCart,
  buy,
  setBuy,
}) => {
  const [counter, setCounter] = useState(1);
  const [isAlert, setIsAlert] = useState(false);
  const resultPrice = fruits[fruitNumber].price * counter;
  console.log(buy);
  useEffect(() => {
    if(buy[0]>99||buy[1]>99||buy[2]>99){
        if (fruitNumber == 0) {
            setIsAlert(true)
            setBuy((prev) => {
              return { ...prev, 0: 99 };
            });
          }
          if (fruitNumber == 1) {
            setIsAlert(true)
            setBuy((prev) => {
              return { ...prev, 1: 99 };
            });
          }
          if (fruitNumber == 2) {
            setIsAlert(true)
            setBuy((prev) => {
              return { ...prev, 2: 99 };
            });
          }}
  }, [buy]);

  const isWindowBig = screenSize > 1000;
  const variantsAnimation = {
    smallInitial: {
      y: 700,
    },
    smallAnimate: {
      y: 0,
    },
    bigInitial: {
      y: 0,
      x: -900,
    },
    bigAnimate: {
      y: 0,
      x: 0,
    },
    textInitialSmall: {
      opacity: 0,
      y: 30,
    },
    textAnimateSmall: {
      opacity: 1,
      y: 0,
    },
    textInitialBig: {
      opacity: 0,
      x: -30,
    },
    textAnimateBig: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.div
      variants={variantsAnimation}
      initial={isWindowBig ? "bigInitial" : "smallInitial"}
      animate={isWindowBig ? "bigAnimate" : "smallAnimate"}
      exit={isWindowBig ? "bigInitial" : "smallInitial"}
      transition={{ duration: 0.7, easy: "easyOut" }}
      id="static-bottom"
      className=" fixed bg-slate-900/80 bottom-0  h-1/2 w-full z-20 lg:left-0 lg:w-1/2 lg:h-full flex flex-col items-center justify-between py-4"
    >
      <motion.div
        variants={variantsAnimation}
        initial={isWindowBig ? "textInitialBig" : "textInitialSmall"}
        animate={isWindowBig ? "textAnimateBig" : "textAnimateSmall"}
        transition={{ delay: 0.6, stiffness: 150, damping: 50 }}
        className=" text-white/50 w-full px-8 flex justify-between items-center"
      >
        <h1>Fruit</h1>
        <button
          onClick={() => {
            setMainClick(false);
            setBgCover(false);
          }}
          className="btn text-black scale-75"
        >
          Back
        </button>
      </motion.div>
      <motion.div
        variants={variantsAnimation}
        initial={isWindowBig ? "textInitialBig" : "textInitialSmall"}
        animate={isWindowBig ? "textAnimateBig" : "textAnimateSmall"}
        transition={{ delay: 0.7, stiffness: 150, damping: 50 }}
        className=" text-white w-full mb-20 px-12 flex flex-col items-center "
      >
        <h1 className="text-4xl font-extrabold">
          {fruits[fruitNumber].name}
          {fruits[fruitNumber].image}
        </h1>
        <h1 className="text-sm mt-2">{fruits[fruitNumber].details}</h1>
        <div className=" flex justify-between mt-8 lg:mt-20 w-full lg:mr-8 lg:w-2/3">
          <div className=" flex flex-row gap-x-3 items-center ">
            <div
              onClick={() => {
                if (counter > 1) {
                  setCounter(counter - 1);
                }
              }}
              className={`w-8 h-8 rounded-full text-center ${
                counter < 2 && "opacity-25"
              } hover:scale-110 bg-white text-black ring-2 ring-black superflex active:scale-90`}
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
              className={`w-8 h-8 rounded-full text-center ${
                counter > 8 && "opacity-25"
              } hover:scale-110 bg-white text-black ring-2 ring-black superflex active:scale-90`}
            >
              <h1 className=" font-bold mb-[3px]">+</h1>
            </div>
          </div>
          <h1 className=" font-extrabold ">
            ${" "}
            <span className=" border-b-2 border-white pb-1">
              {resultPrice.toFixed(1)}
            </span>
          </h1>
        </div>
      </motion.div>
      <motion.div
        variants={variantsAnimation}
        initial={isWindowBig ? "textInitialBig" : "textInitialSmall"}
        animate={isWindowBig ? "textAnimateBig" : "textAnimateSmall"}
        transition={{ delay: 0.8, stiffness: 150, damping: 50 }}
        className=""
      >
        <AnimatePresence>
          {isAlert&& <LimitAmount />}
        </AnimatePresence>
        <button
          onClick={() => {
            if (fruitNumber == 0) {
              setBuy((prev) => {
                return { ...prev, 0: buy[0] + counter };
              });
            }
            if (fruitNumber == 1) {
              setBuy((prev) => {
                return { ...prev, 1: buy[1] + counter };
              });
            }
            if (fruitNumber == 2) {
              setBuy((prev) => {
                return { ...prev, 2: buy[2] + counter };
              });
            }
            
          }}
          className="btn text-black text-sm scale-75 lg:scale-125 lg:mx-6"
        >
          Add to card
        </button>
        <button
          onClick={() => {
            setMainClick(false);
            setIsCartVisible(true);
            setDelayCart(true);
          }}
          className="btn text-black text-sm scale-75 lg:scale-125 lg:mx-6"
        >
          Go to cart
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Part6MobileBottom;

const LimitAmount = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300 }}
      animate={{ opacity: .5, y: 0 }}
      exit={{ opacity: 0, y: 300 }}
      className=" absolute h-[50px]  w-1/2 flex items-center justify-between px-2 bottom-[70px] right-0 left-0 mr-auto ml-auto bg-rose-400 rounded-md"
    >
      <h1 className="text-4xl font-extrabold text-red-900">!</h1>
      <div className="flex flex-col w-full items-center">
        <h1 className=" text-sm font-extrabold text-red-900 ">
          Limit is 99 fruits
        </h1>
        <h1 className=" text-sm font-extrabold text-red-900 ">
          Check your cart
        </h1>
      </div>
      <h1 className="text-4xl font-extrabold text-red-900">!</h1>
    </motion.div>
  );
};
