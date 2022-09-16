import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
} from "react";
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
import ForvardBtn from "./components/ForvardBtn";
import BackByOne from "./components/BackByOne";

const App = () => {
  const [backBtn, setBackBtn] = useState(true);
  const [pageNum, setPageNum] = useState(0);

  return (
    <div className="h-[100vh] w-[100vw]">
      <AnimatePresence>
        <Routes>
          <Route path="/Animation-testing" element={<Home setBackBtn={setBackBtn} />} />
          <Route path="/1" element={<Part1 setPageNum={setPageNum} />} />
          <Route path="/2" element={<Part2 setPageNum={setPageNum} />} />
          <Route path="/3" element={<Part3 setPageNum={setPageNum} />} />
          <Route path="/4" element={<Part4 setPageNum={setPageNum} />} />
          <Route path="/5" element={<Part5 setPageNum={setPageNum} />} />
          <Route path="/6" element={<Part6 setPageNum={setPageNum} />} />
        </Routes>
      </AnimatePresence>
      {backBtn && <BackBtn />}
      {backBtn && <ForvardBtn pageNum={pageNum} />}
      {backBtn && <BackByOne pageNum={pageNum} />}
    </div>
  );
};

export default App;
