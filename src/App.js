import React from "react";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Routes>
             <Route to="/" element={<Home />}/>
      </Routes>
    </div>
  );
};

export default App;
