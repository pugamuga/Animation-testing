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

const Part6MobileTop = ({ fruitNumber, setMainClick, screenSize }) => {
  const isWindowBig = screenSize > 1000;

  const variantsAnimation = {
    smallInitial: {
      y: -700,
    },
    smallAnimate: {
      y: 0,
    },
    bigInitial: {
      x: 900,
    },
    bigAnimate: {
      x: 0,
    },
    bananaInitialSmall: {
      y: -400,
    },
    bananaAnimateSmall: {
      y: 0,
    },
    bananaInitialBig: {
      x: 400,
    },
    bananaAnimateBig: {
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
      id="static-top"
      style={{ backgroundImage: hideout("#FFEFD5", 1) }}
      className=" fixed bg-white top-0 lg:right-0 lg:w-1/2 lg:h-full h-1/2 w-full z-20 superflex"
    >
      <div className="">
        {" "}
        <div className=" text-[160px] lg:text-[240px] drop-shadow-[10px_10px_0_rgb(255,239,213)]  relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 150,
              damping: 50,
            }}
            className=" w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] absolute bg-violet-200 z-20 top-0 left-0 rounded-full"
          ></motion.div>
          <motion.h1
            variants={variantsAnimation}
            initial={isWindowBig ? "bananaInitialBig" : "bananaInitialSmall"}
            animate={isWindowBig ? "bananaAnimateBig" : "bananaAnimateSmall"}
            transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            className="z-30 relative"
          >
            {fruits[fruitNumber].image}
          </motion.h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Part6MobileTop;
