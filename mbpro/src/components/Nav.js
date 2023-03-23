import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed left-2 h-[100vh] z-50 overflow-hidden">
      <div className="h-full container my-[10vh]">
        {}
        <div className="h-full  rounded-lg w-[15vh] max-h-[80vh] my-auto pt-[20vh] py-[10vh] ml-[3vh] flex flex-col justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
          >
            Acceuil
            <BiHomeAlt size="3vh" className="" />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
          >
            Infos
            <BiInfoCircle size="3vh" className="" />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
          >
            Contacts
            <BiPhone size="3vh" className="" />
          </Link>
          <Link
            to="rdv"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049]  flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold text-center"
          >
            Rendez-Vous
            <BiCalendar size="3vh" className="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
