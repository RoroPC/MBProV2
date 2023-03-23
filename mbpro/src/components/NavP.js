import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";

const NavP = () => {
  return (
    <nav className="fixed bottom-2 w-[100vw] z-50 overflow-hidden">
      <div className="w-full container mx-[10vw]">
        {}
        <div className="w-full  rounded-lg h-[15vh] max-w-[80vw] my-auto pt-[20vh] py-[10vh] mb-[3vh] flex flex-row justify-between items-center ">
          <Link
            to="header"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold "
          >
            Acceuil
            <BiHomeAlt size="3vh" className="" />
          </Link>
          <Link
            to="infos"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold "
          >
            Infos
            <BiInfoCircle size="3vh" className="" />
          </Link>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[1.8vw] font-semibold "
          >
            Contacts
            <BiPhone size="3vh" className="" />
          </Link>
          <Link
            to="rdv"
            spy={true}
            smooth={true}
            className=" font-[arimo] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold text-center"
          >
            RDV
            <BiCalendar size="3vh" className="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavP;
