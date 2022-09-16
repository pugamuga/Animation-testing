import React from "react";
import sword from "../assets/sword.png";
import { motion } from "framer-motion";

const SwordMobile = () => {
  return (
    <div className=" relative">
      <motion.img
      whileTap={{rotate: [179.8,190,170,179.8]}}
      initial={{ rotate: 179.8, scale: 1.8, x: -4, y:-1000}}
      animate={{y:0}}
      transition={{ type:"spring"}}
      
      src={sword} alt="" className=" origin-bottom fixed lg:hidden right-0 left-0 mr-auto ml-auto bottom-[940px] " />
    </div>
  );
};

export default SwordMobile;
