import React,{useState} from "react";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom"
import BackBtn from "./components/BackBtn";

const App = () => {
  const [backBtn, setBackBtn] = useState(true);
  return (
    <div>
      <Routes>
             <Route path="/" element={<Home setBackBtn={setBackBtn}/>}/>
      </Routes>
      {backBtn&&<BackBtn/>}
    </div>
  );
};

export default App;
