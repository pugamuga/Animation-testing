import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import warImage from "../assets/war.jpg";


const Part7 = ({setPageNum}) => {
  useEffect(() => {
    setPageNum(7)
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv relative"
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 7
      </h1>
    </div>
  )
}

export default Part7