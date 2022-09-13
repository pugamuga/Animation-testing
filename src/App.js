import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import BackBtn from "./components/BackBtn";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";
import Part3 from "./pages/Part3";
import Part4 from "./pages/Part4";
import Part5 from "./pages/Part5";
import Part6 from "./pages/Part6";
import Part7 from "./pages/Part7";
import Part8 from "./pages/Part8";
import Part9 from "./pages/Part9";

const App = () => {
  const [backBtn, setBackBtn] = useState(true);
  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home setBackBtn={setBackBtn} />} />
          <Route path="/1" element={<Part1 />} />
          <Route path="/2" element={<Part2 />} />
          <Route path="/3" element={<Part3 />} />
          <Route path="/4" element={<Part4 />} />
          <Route path="/5" element={<Part5 />} />
          <Route path="/6" element={<Part6 />} />
          <Route path="/7" element={<Part7 />} />
          <Route path="/8" element={<Part8 />} />
          <Route path="/9" element={<Part9 />} />
        </Routes>
      </AnimatePresence>
      {backBtn && <BackBtn />}
    </div>
  );
};

export default App;
