import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 w-full z-50 overflow-hidden">
      <div className="container mx-auto">
        {}
        <div className="w-full rounded-lg bg-black/20 h-[5vh] max-w-[80vh] mx-auto px-5 flex flex-row justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" cursor-pointer"
          >
            <BiHomeAlt size={30} />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" cursor-pointer transition-[smooth] "
          >
            <BiInfoCircle size={30} />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" cursor-pointer "
          >
            <BiPhone size={30} />
          </Link>
          <Link to="rdv" spy={true} smooth={true} className=" cursor-pointer ">
            <BiCalendar size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
