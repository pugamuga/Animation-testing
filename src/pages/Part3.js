import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import warImage from "../assets/war.jpg";


const Part3 = ({setPageNum}) => {
  useEffect(() => {
    setPageNum(3)
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative"
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 3
      </h1>
      <div className=' box bg-white rounded-md'></div>
    </div>
  )
}

export default Part3