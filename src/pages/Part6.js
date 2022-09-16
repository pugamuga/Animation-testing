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
import Part6MobileTop from "../components/Part6MobileTop";
import BdCover from "../components/BdCover";
import Part6MobileBottom from "../components/Part6MobileBottom";
import Part6Corzina from "../components/Part6Corzina";
import CartInside from "../components/CartInside";

const Part6 = ({ setPageNum }) => {
  const [mainClick, setMainClick] = useState(false);
  const [fruitNumber, setFruitNumber] = useState(0);
  const [bgCover, setBgCover] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [delayCart, setDelayCart] = useState(false);
  const [buy, setBuy] = useState({
    0: 0,
    1: 0,
    2: 0,
  });


  const handleResize = () => {
    return setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    setPageNum(6);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv bg-cover relative overflow-hidden"
    >
      <AnimatePresence>
        {isCartVisible && (
          <CartInside
            buy={buy}
            setBuy={setBuy}
            delayCart={delayCart}
            setDelayCart={setDelayCart}
            setIsCartVisible={setIsCartVisible}
            setBgCover={setBgCover}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>{bgCover && <BdCover />}</AnimatePresence>
      <AnimatePresence>
        {mainClick && (
          <Part6MobileTop
            setMainClick={setMainClick}
            fruitNumber={fruitNumber}
            screenSize={screenSize}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {mainClick && (
          <Part6MobileBottom
            buy={buy}
            setBuy={setBuy}
            setDelayCart={setDelayCart}
            setIsCartVisible={setIsCartVisible}
            setMainClick={setMainClick}
            fruitNumber={fruitNumber}
            setBgCover={setBgCover}
            screenSize={screenSize}
          />
        )}
      </AnimatePresence>
      <h1 className=" absolute  top-5 text-white/20 text-3xl font-extrabold">
        Part 6
      </h1>
      <Part6Corzina
        setIsCartVisible={setIsCartVisible}
        setMainClick={setMainClick}
        setBgCover={setBgCover}
      />
      <div className=" flex flex-col items-center lg:flex-row gap-y-3 lg:gap-x-5 font-semibold ">
        <h1 className=" bg-black px-2 pb-1 rounded-md lg:mr-10 text-yellow-300  font-extrabold text-3xl">
          Select a fruit
        </h1>
        {fruits.map((item, i) => {
          return (
            <div
              key={item.id}
              className=" bg-white/30 w-[40vw] lg:w-[10vw] h-[150px] flex items-center justify-between flex-col p-2 rounded-lg"
            >
              <h1 className=" font-thin text-black/50">Fruit</h1>
              <motion.h1
                onClick={() => {
                  setMainClick(true);
                  setFruitNumber(i);
                  setBgCover(true);
                }}
                className=" text-5xl drop-shadow-[2px_2px_0_black] hover:scale-125 tr active:opacity-50"
              >
                {item.image}
              </motion.h1>
              <div className=" flex w-full justify-between border-t-[2px] border-white/30">
                <h1>{item.name}</h1>
                <h1>${item.price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Part6;
