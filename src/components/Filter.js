import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';



const Filter = ({popular, activeButton, setActiveButton, setFiltered}) => {
useEffect(() => {
    if(activeButton==0){
        setFiltered(popular)
        return
    }
    const filtered = popular.filter((item)=>item.genre_ids.includes(activeButton))
    setFiltered(filtered)
}, [activeButton]);

    return (
    <div className=' flex flex-row gap-x-3 lg:scale-100 scale-[60%]'>
        <button
        
        onClick={() => {
            return setActiveButton(0)
        }} className={`btn ${activeButton!=0&&"bg-white/40"} tr`}>All</button>
        <button
        
        onClick={() => {
            return setActiveButton(35)
        }} className={`btn ${activeButton!=35&&"bg-white/40"} tr`}>Comedy</button>
        <button
        
        onClick={() => {
            return setActiveButton(28)
        }} className={`btn ${activeButton!=28&&"bg-white/40"} tr`}>Action</button>
        <button
        
        onClick={() => {
            return setActiveButton(16)
        }} className={`btn ${activeButton!=16&&"bg-white/40"} tr`}>Animation</button>
        <button
        
        onClick={() => {
            return setActiveButton(27)
        }} className={`btn ${activeButton!=27&&"bg-white/40"} tr`}>Horror</button>
    </div>
  )
}

export default Filter