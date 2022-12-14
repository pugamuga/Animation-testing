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
          ? "lg:grid-cols-1"
          : emAr.length > 2
          ? "lg:grid-cols-3"
          : "lg:grid-cols-2"
      } lg:mt-36 mt-24 lg:gap-x-32 lg:gap-y-12 gap-y-24 grid-cols-2 gap-x-16 relative z-40 scale-75 lg:scale-100`}
    >
      {emAr.map((item, i) => {
        return (
            <Link key={i} to={`/${item}`} >
          <motion.button
          whileHover={{ scale:.83}}
          whileTap={{scale:1}}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            
            className="  
            text-center rounded-sm bg-yellow-200 ring-4 active:ring-0 active:bg-black active:text-white hover:ring-black hover:bg-slate-700 transition-all duration-500 ease-out drop-shadow-md hover:ring-[20px] ring-yellow-400 h-12 w-36 font-extrabold"
          >
            {item} part
          </motion.button>
          </Link>
        );
      })}
    </div>
  );
};

export default ButtonsMap;
