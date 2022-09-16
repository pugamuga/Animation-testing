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


const BdCover = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: .5 }}
    style={{ backgroundImage: `url(${warImage})` }}
    className=" fixed bg-cover h-screen w-screen  z-10"
  ></motion.div>
  )
}

export default BdCover