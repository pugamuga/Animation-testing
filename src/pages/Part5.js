import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
import warImage from "../assets/war.jpg";
import Movie from "../components/Movie";
import { ticTacToe, bubbles, skulls, circuitBoard } from "hero-patterns";
import Filter from "../components/Filter";
import { motion, AnimatePresence } from "framer-motion";

const Part5 = ({ setPageNum }) => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const [bg, setBg] = useState(false);

  const handleScroll = (event) => {
    //console.log('scrollTop: ', event.currentTarget.scrollTop);
    // console.log('offsetHeight: ', event.currentTarget.offsetHeight);
    if (event.currentTarget.scrollTop > 99) {
      setBg(true);
    } else {
      setBg(false);
    }
  };

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=e74a6d3be393855d28d9897760e76b51&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);

    console.log(movies);
  };

  useEffect(() => {
    setPageNum(5);
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className="tr mainDiv bg-cover relative overflow-scroll scrollbar-hide"
      onScroll={handleScroll}
    >
      <AnimatePresence>
        {!bg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-[80px] z-10`}
          >
            <Filter
              popular={popular}
              setFiltered={setFiltered}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          layout
          className="  absolute top-[120px] grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 lg:px-[200px] p-4"
        >
          {filtered.map((item, i) => {
            return <Movie key={item.id} item={item} />;
          })}
        </motion.div>
      </AnimatePresence>
      <div
        style={{ backgroundImage: skulls("#ffffff", bg ? 0.2 : 0) }}
        className={`fixed ${
          bg
            ? "bg-opacity-80 border-opacity-100  "
            : "bg-opacity-0 border-opacity-0 "
        }  top-0 border-b-2 border-yellow-300 justify-center flex z-30 items-center h-[80px] w-full transition-all duration-700 bg-black`}
      >
        <h1
          className={` px-6 pb-1 transition-all duration-700 text-3xl font-extrabold ${
            bg
              ? "ring-2 bg-black rounded-md text-yellow-300 ring-yellow-300"
              : "text-white/20"
          } `}
        >
          Part 5
        </h1>
      </div>
    </div>
  );
};

export default Part5;
