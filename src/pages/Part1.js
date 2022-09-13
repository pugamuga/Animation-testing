import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Part1 = () => {
  const [animate, setAnimate] = useState(false);
  const [topOrBottom, seTopOrBottom] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count == 2) {
      seTopOrBottom((prev) => {
        return !prev;
      });
      setCount(0);
    }
  });

  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative"
    >
      <motion.div
        initial={{ x: "-30vw", y: 0 }}
        animate={{
          borderWidth:animate ? 22 : 0,
          scale:animate ? .2 : 1,
          backgroundColor:animate ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
          borderRadius:animate ? 50 : 10,
          x: animate ? "30vw" : "-30vw",
          rotate: animate ? 360 : 0,
          y: animate ? (topOrBottom ? -200 : 200) : topOrBottom ? -200 : 200,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="box z-10  origin-center"
      ></motion.div>

      <button
        onClick={() => {
          setAnimate((prev) => {
            return !prev;
          });
          seTopOrBottom((prev) => {
            return !prev;
          });
          setCount((prev) => prev + 1);
        }}
        className=" absolute z-0 btn"
      >
        Animate!
      </button>
      {console.log(topOrBottom, count)}
    </div>
  );
};

export default Part1;
