import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import {Link} from "react-scroll"

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font-title">
      {/* left */}
      <div>
        <img src={logo} alt="" />
      </div>
      {/* right */}
      <div>
        <ul className=" flex items-center gap-10">
          {navLinksdata.map((navLinksdata) => (
            <li
             
              className="text-base font-normal text-myWhite tracking-wide 
              cursor-pointer hover:text-myOrange duration-300"
              key={navLinksdata._id}>
              <Link className="active"
              to={navLinksdata.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>{navLinksdata.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
