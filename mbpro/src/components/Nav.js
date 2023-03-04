import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 w-full z-50 overflow-hidden">
      <div className="container mx-auto">
        {}
        <div className="w-full rounded-lg bg-black/20 h-[5vh] max-w-[80vh] mx-auto px-5 flex flex-row justify-between items-center ">
          <Link className=" cursor-pointer ">
            <BiHomeAlt size={30} />
          </Link>
          <Link className=" cursor-pointer ">
            <BiInfoCircle size={30} />
          </Link>
          <Link className=" cursor-pointer ">
            <BiPhone size={30} />
          </Link>
          <Link className=" cursor-pointer ">
            <BiCalendar size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
