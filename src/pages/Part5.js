import React, { useState, useEffect, useRef, useContext, useReducer } from 'react';
import warImage from "../assets/war.jpg";
import Movie from '../components/Movie';


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
      <div className=' absolute top-1 grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 lg:px-[200px] p-4'>
        {popular.map((item, i)=>{
          return <Movie key={item.id} item={item}/>
        })}
      </div>
    </div>
  )
}

export default Part5