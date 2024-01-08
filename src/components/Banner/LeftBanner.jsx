import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaLinkedinIn,FaGithub,} from "react-icons/fa";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 mt-5 px-20 ">
    <div className="flex flex-col gap-5 ">
      <h4 className=" text-lg font-normal text-white">
        WELCOME TO MY WORLD
      </h4>
      <h1 className="text-6xl font-bold text-white mt-5">
        Hi, I'm <span className="text-myOrange capitalize">Sameera</span>
      </h1>
      <h2 className="text-4xl font-bold text-white ">
        a <span>{text}</span>
        <Cursor
          cursorBlinking="false"
          cursorStyle="|"
          cursorColor="#ff4d20"
        />
      </h2>
      <p className="text-myWhite  font-bodyFont leading-6 tracking-wide mt-5">
        I use animation as a third dimension by which to simplify
        experiences and kuiding thro each and every interaction. I'm not
        adding motion just to spruce things up, but doing it in ways that.
      </p>
    </div>

    <div>
      <h2 className="text-base uppercase font-titleFont mb-4 text-myWhite">
        Find me in
      </h2>
      <div className="flex gap-4">
        <span className="bannerIcon">
          <FaGithub />
        </span>
        <span className="bannerIcon">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  </div>
  )
}

export default LeftBanner