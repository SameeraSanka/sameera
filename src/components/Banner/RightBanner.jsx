import React from "react";
import { bannerImg }  from "../../assets/index";
const RightBanner = () => {
  return (
    <div className="w-1/2 pt-20 flex justify-center items-center">
      <img src={bannerImg} alt="" className="w-[400px] h-[400px] z-10 mx-10 " />
    </div>
  );
};

export default RightBanner;
