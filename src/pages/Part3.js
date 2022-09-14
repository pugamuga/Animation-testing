import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import emptyArray from "../functions/emptyArray";
import { motion, AnimatePresence } from "framer-motion";

const Part3 = ({ setPageNum }) => {
  const [counter, setCounter] = useState(1);
  const [array, setArray] = useState([]);
  const [apeArrayState, setApeArrayState] = useState([]);

  const variantSmall = {
    born: {
      scale: 0,
      rotation: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    live: {
      scale: 1,
      rotation: 90,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    dead: {
      scale: 0,
      rotation: 0,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const apeArray = ["🐵", "🙊", "🙈", "🙉"];
  const generator = () => {
    return Math.floor(Math.random() * apeArray.length);
  };

  useEffect(() => {
    const fakeArr = [];
    emptyArray(fakeArr, counter);
    setArray(fakeArr);
  }, [counter]);

  useEffect(() => {
    setPageNum(3);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative"
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 3
      </h1>
      <div className=" absolute tr top-[100px] flex flex-row gap-x-5 items-center">
        <div
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}
          className={`${counter == 1 && "opacity-10 "} tr`}
        >
          <ArrowLeft />
        </div>
        <div className=" h-[60px] w-[60px] ring-4 ring-white/10 flex justify-center items-center rounded-full bg-black/60">
          <h1 className="mb-2 text-4xl font-extrabold text-yellow-300">
            {counter}
          </h1>
        </div>
        <div
          onClick={() => {
            if (counter < 9) {
              setCounter(counter + 1);
            }
          }}
          className={`${counter == 9 && "opacity-10 "} tr`}
        >
          <ArrowRight />
        </div>
      </div>
      <div
        style={{
          width:
            counter == 2
              ? 100
              : counter == 3
              ? 100
              : counter == 4
              ? 100
              : counter >= 5 && counter < 7
              ? 150
              : counter >= 7
              ? 150
              : 50,
          height:
            counter == 2 || counter == 1
              ? 50
              : counter == 3
              ? 100
              : counter == 4
              ? 100
              : counter >= 5 && counter < 7
              ? 100
              : counter >= 7 && 150,
        }}
        className={`box bg-white/20 scale-[200%] rounded-md gap-y-2 overflow-hidden ${
          counter == 1
            ? "grid-cols-1"
            : counter > 4
            ? "grid-cols-3"
            : "grid-cols-2"
        }
        grid  justify-items-center content-center items-center tr`}
      >
        <AnimatePresence>
          {array.map((item) => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(
              16
            );

            const apeNumber = apeArray[generator()]
            return (
              <motion.div
                variants={variantSmall}
                initial="born"
                animate="live"
                key={item}
                style={{
                  backgroundColor: "#" + randomColor,
                }}
                className="h-[40px] w-[40px] flex justify-center items-center rounded-sm border-2"
              >
                <h1 className="text-2xl">{apeNumber}</h1>
                {console.log(apeNumber)}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Part3;

const ArrowRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.7}
      stroke="currentColor"
      className="w-12 h-12 stroke-white active:opacity-50 transition-all duration-100 active:scale-75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
const ArrowLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={0.7}
      stroke="currentColor"
      className="w-12 h-12 rotate-180 active:opacity-50 transition-all duration-100 stroke-white active:scale-75"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};
