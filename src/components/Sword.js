import React from "react";
import sword from "../assets/sword.png";
import { motion } from "framer-motion";

const Sword = () => {
  return (
    <div className=" absolute flex justify-between w-full top-[100px]   ">
        <motion.img
        whileTap={{rotate:0}}
          initial={{ rotate: -52, scale: .8, y:-70, x:156}}
          src={sword}
          alt=""
          className=" origin-bottom z-10 cursor-pointer"
        />
          <div className="w-full absolute   bg-gradient-to-t from-black h-[300px] bottom-[-170px] z-20"></div>
          <div className="w-full absolute   bg-gradient-to-t from-black/70 h-screen bottom-[-170px] z-0"></div>
        <motion.img
          whileTap={{rotate:-70}}
          initial={{ rotate: -12, scale: .8 }}
          src={sword}
          alt=""
          className=" origin-bottom z-10 cursor-pointer"
        />
    </div>
  );
};

export default Sword;
