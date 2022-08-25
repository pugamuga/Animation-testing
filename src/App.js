import banana from "../src/assets/banana.png";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  const generateX = () => {
    let num = Math.floor(Math.random() * 350);
    if (num < 20) {
      generateX();
    } else {
      console.log(num);
      return num;
    }
  };

  return (
    <div>
      <div className=" absolute">
        <button
          className="bg-slate-500"
          onClick={() => {
            setClick(true);
          }}
        >
          banana drop
        </button>
        <motion.div
          animate={
            click
              ? {
                  rotate: [0, 180],
                  y: [-100, 800],
                  opacity: [1, 1, 0],
                  x: [generateX(), generateX()],
                }
              : {}
          }
          transition={{ duration: 2, ease: "linear" }}
          className={click ? null : "hidden"}
        >
          <img src={banana} alt="banana" className="w-8" />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
