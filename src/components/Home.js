import React from "react";
import LogoMain from "./LogoMain";
import ButtonsMap from "./ButtonsMap";
import warImage from "../assets/war.jpg";
import Sword from "./Sword";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" flex justify-center h-screen bg-none bg-opacity-75 bg-no-repeat"
    >
      <Sword/>
      <div
        className="w-2/3 h-full bg-gradient-to-b from-black/70 to-transparent 
       flex justify-start flex-col items-center pt-12 shadow-md"
      >
        <LogoMain />
        <ButtonsMap buttonsAmount={9} />
      </div>
    </div>
  )
}

export default Home