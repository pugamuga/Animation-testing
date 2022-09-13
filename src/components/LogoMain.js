import React from "react";
import { motion } from "framer-motion";

const LogoMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center relative drop-shadow-md"
    >
      <motion.h1
      whileTap={{rotate: 45 , scale:1.2}}
        initial={{ rotate: 45, scale:1 }}
        animate={{ rotate: 0, scale:1 }}
        transition={{ delay: 0.1 }}
        className=" absolute top-0 left-[-70px] origin-right text-5xl cursor-pointer"
      >
        💪
      </motion.h1>
      <motion.h1
      whileTap={{rotate: 45, scaleX: -1.2, y: -47, x: -12 }}
        initial={{ rotate: 45, scaleX: -1, y: -40, x: -20 }}
        animate={{ rotate: 0, scaleX: -1, y: 0, x: 0 }}
        transition={{ delay: 0.1 }}
        className=" absolute top-0 right-[-135px] text-5xl origin-left scale-x-[-100%] cursor-pointer"
      >
        💪
      </motion.h1>
      <motion.div
      whileHover={{ scale:2.5}}
      initial={{x:30, scale:3}}
      animate={{x:0, scale:3}}
      transition={{ delay: 0.3 }}
      className="absolute scale-[300%]  top-[30px] border-t-yellow-200 z-10 border-t-[40px] border-r-[25px] border-r-transparent border-l-[25px] border-l-transparent"></motion.div>
      <motion.div
          whileHover={{ scale:2.7}}
      initial={{x:-30, scale:3.3}}
      animate={{x:0, scale:3.3}}
      transition={{ delay: 0.3 }}
      className="absolute scale-[330%] top-[32px] border-t-yellow-400 z-0 border-t-[40px] border-r-[25px] border-r-transparent border-l-[25px] border-l-transparent"></motion.div>
      <motion.h1
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className=" text-2xl  font-extrabold px-2 pb-1 z-20 bg-yellow-400 "
      >
        Framer Motion{" "}
      </motion.h1>
      <motion.h1
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className=" text-md text-black/50 mt-2 px-2 pb-1 z-20 bg-yellow-400 font-sans"
      >
        training camp
      </motion.h1>
    </motion.div>
  );
};

export default LogoMain;
