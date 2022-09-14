import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Part2 = ({ setPageNum }) => {
  const [bar, setBar] = useState(0);
  const [banana, setBanana] = useState(false);
  const drag = Number(bar) + 50;
  const area = drag * 2 + 60;

  const dragZones = [
    {
      positions: {
        right: drag,
        left: -drag,
        top: -drag,
        bottom: drag,
      },
      boxSize: {
        width: area,
        height: area,
      },
    },
  ];

  useEffect(() => {
    setPageNum(2);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative bg-cover "
    >
      <input
        className=" bar"
        type="range"
        min={0}
        max={100}
        step={5}
        value={bar}
        onChange={(e) => {
          setBar(e.target.value);
        }}
      />
      <motion.div
        drag
        dragConstraints={dragZones[0].positions}
        whileHover={{ scale: 1.1 }}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className=" box h-[60px] w-[60px] bg-white rounded-md flex justify-center items-center z-10"
      >
        <DragIcon />
      </motion.div>
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 2
      </h1>
      <div
        style={dragZones[0].boxSize}
        className=" absolute rounded-md flex justify-center items-center bg-white/10 z-0"
      >
        <div
          onClick={() => {
            setBanana((prev) => {
              return !prev;
            });
          }}
          className=" active:scale-75 cursor-pointer text-4xl drop-shadow-md"
        >
          {banana ? <Banana /> : <Manki bar={bar} />}
        </div>
      </div>
    </div>
  );
};

export default Part2;

const Manki = ({ bar }) => {
  return (
    <motion.h1
      initial={{ scale: 0.3 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {bar <= 20
        ? "🐵"
        : bar <= 40 && bar > 20
        ? "🙊"
        : bar < 70 && bar > 40
        ? "🙈"
        : bar >= 70
        ? "🙉"
        : ""}
    </motion.h1>
  );
};

const Banana = () => {
  return (
    <motion.h1
      initial={{ scale: 0.3 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      🍌
    </motion.h1>
  );
};

const DragIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-20 h-20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  );
};
