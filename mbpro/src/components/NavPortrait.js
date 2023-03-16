import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const NavPortrait = () => {
  return (
    <nav className="fixed left-2 h-[100vh] z-50 overflow-hidden">
      <div className="h-full container my-[10vh]">
        {}
        <div className="h-full  rounded-lg w-[10vh] max-h-[80vh] my-auto py-5 flex flex-col justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" cursor-pointer text-white hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh]"
          >
            Acceuil
            <BiHomeAlt size="3vh" />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" cursor-pointer text-white hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh] "
          >
            Infos
            <BiInfoCircle size="3vh" />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" cursor-pointer text-white hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh] "
          >
            Contacts
            <BiPhone size="3vh" />
          </Link>
          <Link
            to="rdv"
            spy={true}
            smooth={true}
            className=" cursor-pointer text-white hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh] text-center"
          >
            Rendez-Vous
            <BiCalendar size="3vh" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavPortrait;
