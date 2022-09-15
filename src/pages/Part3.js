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
import Part3Timer from "../components/Part3Timer";
// import scullPattern from "../assets/scull.svg";
import { ticTacToe, skulls } from "hero-patterns";

const Part3 = ({ setPageNum }) => {
  const [showResult, setShowResult] = useState(false);

  const [bananaTimes, setBananaTimes] = useState(0);
  console.log(bananaTimes);

  const [pickApe, setPickApe] = useState(0);
  console.log(pickApe);
  const [pickBanana, setPickBanana] = useState(false);

  const apeArray = ["🐵", "🙊", "🙈", "🙉"];
  const generator = () => {
    return Math.floor(Math.random() * apeArray.length);
  };

  const [counter, setCounter] = useState(1);
  const [array, setArray] = useState([]);

  const [apeArrayGeneration, setApeArrayGeneration] = useState([]);

  const emptyArrayGeneration = (array, num = 1) => {
    for (let i = 0; i < num; i++) {
      const apeNumberGenerator = apeArray[generator()];
      array.push(apeNumberGenerator);
    }
    return array;
  };

  const test = [];
  emptyArrayGeneration(test, counter);

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
      className=" mainDiv relative bg-cover"
    >
      <AnimatePresence>
        {bananaTimes > 0 && <Part3Timer setShowResult={setShowResult} />}
      </AnimatePresence>
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 3
      </h1>
      <div className=" absolute top-6 right-6 rounded-full flex justify-center items-center h-8 w-8 bg-black">
            <h1 className=" text-yellow-300 mb-[2px] text-sm">{bananaTimes}</h1>
          </div>
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
        <div className=" h-[60px] relative w-[60px] ring-4 ring-white/10 flex justify-center items-center rounded-full bg-black">
          
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
      {showResult ? (
        <Result bananaTimes={bananaTimes} setBananaTimes={setBananaTimes} setShowResult={setShowResult} />
      ) : (
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
            {array.map((item, i) => {
              const randomColor = Math.floor(Math.random() * 16777215).toString(
                16
              );

              return (
                <motion.div
                  onClick={() => {
                    setPickApe(test[i]);
                    setPickBanana((prev) => !prev);
                    if (pickApe == test[i]) {
                      setBananaTimes((prev) => prev + 1);
                    }
                  }}
                  variants={variantSmall}
                  initial="born"
                  animate="live"
                  key={item}
                  style={{
                    backgroundColor: "#" + randomColor,
                  }}
                  className="h-[40px] w-[40px] flex justify-center items-center rounded-sm border-2"
                >
                  <h1 className="tr hover:opacity-70 cursor-pointer active:scale-75 drop-shadow-md text-2xl">
                    {pickApe == test[i] ? "🍌" : test[i]}
                  </h1>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
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

const Result = ({ bananaTimes, setBananaTimes, setShowResult }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className=" absolute"
    >
      <div
        style={{ backgroundImage: skulls("white", 0.1) }}
        className="flex flex-col shadow-xl justify-center items-center rounded-lg h-[30vh] lg:w-[30vw] w-[60vw] bg-white/40"
      >
        <div
        onClick={() => {
          setBananaTimes(0)
          setShowResult(false)
        }}
        className="superflex absolute top-[-25px] right-[-25px] h-[50px] w-[50px] bg-black rounded-full">
          <Reload />
        </div>
        <h1 className="text-xl font-extrabold">
          Your result:{" "}
          <span className=" text-4xl drop-shadow-[2px_2px_0px_black] text-yellow-300">
            {bananaTimes}
          </span>{" "}
        </h1>
        <div className="flex">
          <h1
            className={`text-5xl ${
              bananaTimes > 15 ? "grayscale-0" : " grayscale"
            } drop-shadow-lg mt-8`}
          >
            🍌
          </h1>
          <h1
            className={`text-5xl ${
              bananaTimes > 25 ? "grayscale-0" : " grayscale"
            } drop-shadow-lg mt-8`}
          >
            🍌
          </h1>
          <h1
            className={`text-5xl ${
              bananaTimes > 50 ? "grayscale-0" : " grayscale"
            } drop-shadow-lg mt-8`}
          >
            🍌
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

const Reload = () => {
  return (
    <motion.svg
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ delay: 1.5, stiffness: 300 }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-6 h-6 text-yellow-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </motion.svg>
  );
};
