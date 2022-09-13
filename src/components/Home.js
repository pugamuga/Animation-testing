import React, {useEffect} from "react";
import LogoMain from "./LogoMain";
import ButtonsMap from "./ButtonsMap";
import warImage from "../assets/war.jpg";
import Sword from "./Sword";
import SwordMobile from "./SwordMobile";

const Home = ({setBackBtn}) => {
  useEffect(() => {
    setBackBtn(false)

    return () => {
      setBackBtn(true)
    }
  }, );

  return (
    <div
      style={{ backgroundImage: `url(${warImage})` }}
      className=" flex justify-center lg:h-screen h-[120vh]  bg-none  bg-no-repeat"
    >
      <Sword/>
      <SwordMobile/>
      <div
        className="lg:w-2/3 w-[90%] h-full bg-gradient-to-b from-black/70 to-transparent 
       flex justify-start flex-col items-center pt-12 shadow-md"
      >
        <LogoMain />
        <ButtonsMap buttonsAmount={9} />
      </div>
      
    </div>
  )
}

export default Home