import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-4 w-full z-50 overflow-hidden">
      <div className="container mx-auto">
        {}
        <div className="w-full rounded-lg h-[7vh] max-w-[80vh] mx-auto px-5 flex flex-row justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] "
          >
            Acceuil
            <BiHomeAlt size={30} />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] "
          >
            Infos
            <BiInfoCircle size={30} />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] "
          >
            Contacts
            <BiPhone size={30} />
          </Link>
          <Link
            to="rdv"
            spy={true}
            smooth={true}
            className=" cursor-pointer hover:scale-125 hover:transition flex flex-col items-center transition hover:text-[#830049] "
          >
            Rendez-Vous
            <BiCalendar size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
