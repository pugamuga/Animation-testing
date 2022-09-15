import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

const Movie = ({ item }) => {
  const [rating, setRating] = useState(false);

  const result = item.popularity / 1000;
  return (
    <motion.div
      layout
      initial={{ opacity: 0 , scale:.85}}
      animate={{ opacity: 1 , scale:1}}
      exit={{ opacity: 0 , scale:.85}}
      className=" bg-white/30 w-full rounded-md p-1 relative"
    >
      <h1 className="px-2 text-sm font-bold h-12 lg:h-7 text-center">
        {item.title}
      </h1>
      <div
        onMouseEnter={() => {
          setRating(true);
        }}
        onMouseLeave={() => {
          setRating(false);
        }}
      >
        <AnimatePresence>
          {rating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-yellow-300 px-2 py-1 rounded-md text-sm font-bold absolute lg:top-[20%] top-[58%] right-[7%] lg:right-[30%] z-20"
            >
              TMDb Raiting: {result.toFixed(2)}
            </motion.div>
          )}
        </AnimatePresence>
        <img
          className={`object-cover tr rounded-md z-10 ${
            rating && "brightness-50"
          }`}
          src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
        />
      </div>
    </motion.div>
  );
};

export default Movie;
