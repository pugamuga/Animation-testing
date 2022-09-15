import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import { fruits } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import Part6Mobile from "../components/Part6Mobile";

const Part6 = ({ setPageNum }) => {
  const [mainClick, setMainClick] = useState(false);
  const [fruitNumber, setFruitNumber] = useState(0);

  useEffect(() => {
    setPageNum(6);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv bg-cover relative overflow-hidden"
    >
      {mainClick && <Part6Mobile fruitNumber={fruitNumber}/>}
      <h1 className=" absolute  top-5 text-white/20 text-3xl font-extrabold">
        Part 6
      </h1>
      <div className=" flex flex-col items-center lg:flex-row gap-y-3 lg:gap-x-5 font-semibold ">
        <h1 className=" bg-black px-2 pb-1 rounded-md lg:mr-10 text-yellow-300  font-extrabold text-3xl">
          Select a fruit
        </h1>
        {fruits.map((item,i) => {
          return (
            <div
              key={item.id}
              className=" bg-white/30 w-[40vw] lg:w-[10vw] h-[150px] flex items-center justify-between flex-col p-2 rounded-lg"
            >
              <h1>Fruit</h1>
              <h1
                onClick={() => {
                  setMainClick(true);
                  setFruitNumber(i)
                }}
                className=" text-5xl drop-shadow-[2px_2px_0_black] hover:scale-125 tr active:opacity-50"
              >
                {item.image}
              </h1>
              <div className=" flex w-full justify-between border-t-[2px] border-white/30">
                <h1>{item.name}</h1>
                <h1>{item.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Part6;
