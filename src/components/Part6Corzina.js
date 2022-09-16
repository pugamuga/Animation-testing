import React from "react";
import Cart6 from "./Cart6";
import { motion, AnimatePresence } from "framer-motion";

const Part6Corzina = ({ setMainClick, setIsCartVisible, setBgCover }) => {
  return (
    <motion.div
      initial={{ scale: 0.1 , rotate:90}}
      animate={{ scale: 1 , rotate:0}}
      transition={{ ease:"easeOut", duration:.5}}
      onClick={() => {
        setMainClick(false);
        setIsCartVisible(true);
        setBgCover(true);
      }}
      className="absolute top-2 right-2 lg:top-4 lg:right-4 bg-black h-10 w-10 rounded-full flex items-center justify-center  opacity-60 hover:opacity-100 tr hover:scale-110"
    >
      <Cart6 />
    </motion.div>
  );
};

export default Part6Corzina;
