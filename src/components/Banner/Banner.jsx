import React from "react";
import { wave } from "../../assets/index";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";


const Banner = () => {

  return (
    <>
      <section id="home" className="w-full pb-10  pt-5 flex  bg-myBlue px-10 ">
        <LeftBanner/>
        <RightBanner/>
      </section>

      <div>
        <img src={wave} alt="" />
      </div>
    </>
  );
};

export default Banner;
