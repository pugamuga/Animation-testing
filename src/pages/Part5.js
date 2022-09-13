import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import warImage from "../assets/war.jpg";


const Part5 = ({setPageNum}) => {
  useEffect(() => {
    setPageNum(5)
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative"
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 5
      </h1>
    </div>
  )
}

export default Part5