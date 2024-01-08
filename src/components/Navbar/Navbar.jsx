import React from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-myBlue mx-auto flex justify-between items-center font-titleFont px-10">
      {/* left */}
      <div>
        <img src={logo} alt="" />
      </div>
      {/* right */}
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map((navLink) => (
            <li
              className="text-base font-normal text-myWhite tracking-wide cursor-pointer duration-300"
              key={navLink._id}
            >
              <Link
                className="active"
                to={navLink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
