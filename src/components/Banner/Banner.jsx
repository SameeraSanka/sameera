import React from "react";
import { wave } from "../../assets/index";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <section id="home" className="w-full  pb-20 flex  bg-myBlue px-10">
        {/* border-b-[1px]  h-[800px]*/}
        {/* left */}
        <div className="w-full lgl:w-1/2 flex flex-col gap-20 mt-10">
          <div className="flex flex-col gap-5 ">
            <h1 className="text-6xl font-bold text-white mt-10">
              Hi, I'm <span className="text-myOrange capitalize">Sameera</span>
            </h1>
            <h2 className="text-4xl font-bold text-white mt-154">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#ff4d20"
              />
            </h2>
            <p className="text-myWhite mt-15 font-bodyFont leading-6 tracking-wide">
          I use animation as a third dimension by which to simplify experiences
          and kuiding thro each and every interaction. I'm not adding motion
          just to spruce things up, but doing it in ways that.
        </p>
          </div>
        </div>

        {/* right */}
        <div></div>
      </section>

      <div>
        <img src={wave} alt="" />
      </div>
    </>
  );
};

export default Banner;
