import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-[2vh] w-full ">
      <div className="container mx-auto">
        {}
        <div className="w-full rounded-lg h-[7vh] max-w-[80vh] mx-auto px-5 flex flex-row justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh]"
          >
            Acceuil
            <BiHomeAlt size="3vh" />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh] "
          >
            Infos
            <BiInfoCircle size="3vh" />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh] "
          >
            Contacts
            <BiPhone size="3vh" />
          </Link>
          <Link
            to="rdv"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] text-[2vh]"
          >
            Rendez-Vous
            <BiCalendar size="3vh" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
