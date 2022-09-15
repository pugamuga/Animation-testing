import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import warImage from "../assets/war.jpg";


const Part5 = ({setPageNum}) => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular()
  }, []);

  const fetchPopular = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=e74a6d3be393855d28d9897760e76b51&language=en-US&page=1')
    const movies = await data.json()
    setPopular(movies.results)
 console.log(movies)
  }

  useEffect(() => {
    setPageNum(5)
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" mainDiv bg-cover relative"
    >
      <h1 className=" absolute top-5 text-white/20 text-3xl font-extrabold">
        Part 5
      </h1>
    </div>
  )
}

export default Part5