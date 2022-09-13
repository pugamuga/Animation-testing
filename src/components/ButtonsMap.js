import React from "react";
import emptyArray from "../functions/emptyArray";
import { motion } from "framer-motion";
import {Route, Link} from "react-router-dom"

const ButtonsMap = ({ buttonsAmount }) => {
  const emAr = [];
  emptyArray(emAr, buttonsAmount);
  return (
    <div
      className={` grid ${
        emAr.length == 1
          ? "grid-cols-1"
          : emAr.length > 2
          ? "grid-cols-3"
          : "grid-cols-2"
      }  mt-24 gap-x-32 gap-y-8`}
    >
      {emAr.map((item, i) => {
        return (
          <motion.button
          whileHover={{ scale:.83}}
          whileTap={{scale:1}}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            key={i}
            className="  
            text-center bg-yellow-200 ring-4 active:ring-0 active:bg-black active:text-white hover:ring-black hover:bg-slate-700 transition-all duration-500 ease-out drop-shadow-md hover:ring-[20px] ring-yellow-400 h-12 w-36 font-extrabold"
          >
            <Link to={"/"} >{item} part</Link>
          </motion.button>
        );
      })}
    </div>
  );
};

export default ButtonsMap;
