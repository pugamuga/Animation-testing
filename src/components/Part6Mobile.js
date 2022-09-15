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

const Part6Mobile = ({fruitNumber}) => {
  return (
    <>
    <motion.div
  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}}
    style={{ backgroundImage: `url(${warImage})` }}
    className=" fixed bg-cover h-screen w-screen  z-10"
  ></motion.div>
  <AnimatePresence>
    <motion.div
      initial={{ y: -700 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: .7, easy: "easyOut" }}
      id="static-top"
      className=" fixed bg-gradient-to-tl from-white to-[rgb(255,239,213)] top-0 lg:right-0 lg:w-1/2 lg:h-full h-1/2 w-full z-20 superflex"
    >
      <div className="">
        {" "}
        <div className=" text-[160px] lg:text-[240px] drop-shadow-[10px_10px_0_rgb(255,239,213)]  relative">
          <div className=" w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] absolute bg-violet-500/20 z-20 top-0 left-0 rounded-full"></div>
          <h1 className="z-30 relative">{fruits[fruitNumber].image}</h1>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
  <AnimatePresence>
    <motion.div
      initial={{ y: 700 }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: .7, easy: "easyOut" }}
      id="static-bottom"
      className=" fixed bg-slate-900/80 bottom-0 h-1/2 w-full z-20 lg:left-0 lg:w-1/2 lg:h-full"
    >
      <div className=" text-white">Text</div>
    </motion.div>
  </AnimatePresence>
    </>
  )
}

export default Part6Mobile