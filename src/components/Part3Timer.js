import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

const Part3Timer = ({setShowResult}) => {
  const [seconds, setSeconds] = useState(19);
  const [miliSeconds, setmiliSeconds] = useState(99);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setmiliSeconds(miliSeconds - 1);

      if (miliSeconds == 0) {
        setSeconds(seconds - 1);
        setmiliSeconds(99);
      }
    }, 10);

    if (seconds == 0 && miliSeconds == 0) {
      clearInterval(timer);
      setShowResult(true)
    }

    return () => {
      return clearInterval(timer);
    };
  });

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}
      className=" absolute bottom-10 bg-black/80 flex items-center justify-between px-3 text-yellow-300 w-[200px] h-[60px] rounded-md"
    >
      <h1 className=" text-xs ">
        Faster, faster, faster, <br /> pick bananas!
      </h1>
      <h1 className=" text-lg font-extrabold">
        {seconds < 10 ? "0" + seconds : seconds}:
        {miliSeconds < 10 ? "0" + miliSeconds : miliSeconds}
      </h1>
    </motion.div>
  );
};

export default Part3Timer;
