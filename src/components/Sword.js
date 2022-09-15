import React from "react";
import sword from "../assets/sword.png";
import { motion } from "framer-motion";

const Sword = () => {
  return (
    <div className=" absolute lg:flex justify-between w-full lg:top-[100px] top-[230px] hidden ">
      <motion.img
      animate={{y:0}}
        whileTap={{ rotate: 30 }}
        initial={{ rotate: 0, scale: 0.8, x: 100, y:1500 }}
        transition={{  type: "spring" }}
        src={sword}
        alt=""
        className=" origin-bottom z-10 cursor-pointer"
      />
      <div className="w-full absolute   bg-gradient-to-t from-black h-[300px] bottom-[-90px] z-20"></div>
      <div className="w-full absolute   bg-gradient-to-t from-black/70 h-screen bottom-[-90px] z-0"></div>
      <motion.img
      animate={{y:0}}
        whileTap={{ rotate: -30 }}
        initial={{ rotate: 0, scale: 0.8, x: -100, y:1500 }}
        transition={{  type: "spring" }}
        src={sword}
        alt=""
        className=" origin-bottom z-10 cursor-pointer"
      />
    </div>
  );
};

export default Sword;
