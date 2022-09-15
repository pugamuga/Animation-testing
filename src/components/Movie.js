import React from "react";

const Movie = ({ item }) => {
  return (
    <div className=" bg-white w-full rounded-md p-1">
      <h1 className="px-2 text-sm font-bold h-12 text-center">{item.title}</h1>
      <img className="  object-cover rounded-md" src={"https://image.tmdb.org/t/p/w500"+item.backdrop_path
} />
    </div>
  );
};

export default Movie;
