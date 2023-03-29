import React from "react";
import { BiCalendar, BiHomeAlt, BiInfoCircle, BiPhone } from "react-icons/bi";
import { Link } from "react-scroll";
import useScreenOrientation from "../hooks/useScreenOrientation";

const Nav = () => {
  const orientation = useScreenOrientation();
  if (
    orientation === "portrait-primary" ||
    orientation === "portrait-secondary"
  ) {
    return (
      <nav className="fixed bottom-1 w-[100vw] z-50 overflow-hidden">
        <div className="w-full container mx-[10vw]">
          {}
          <div className="w-full  rounded-lg h-[15vh] max-w-[80vw] my-auto py-[10vh] mb-[3vh] flex flex-row justify-between items-center ">
            <Link
              to="header"
              spy={true}
              smooth={true}
              className=" font-[arimo] mt-[7vh] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold "
            >
              Acceuil
              <BiHomeAlt size="3vh" className="" />
            </Link>
            <Link
              to="infos"
              spy={true}
              smooth={true}
              className=" font-[arimo] mt-[7vh] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold "
            >
              Infos
              <BiInfoCircle size="3vh" className="" />
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              className=" font-[arimo] mt-[7vh] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[1.8vw] font-semibold "
            >
              Contacts
              <BiPhone size="3vh" className="" />
            </Link>
            <Link
              to="rdv"
              spy={true}
              smooth={true}
              className=" font-[arimo] mt-[7vh] cursor-pointer bg-[white] h-[10vw] w-[10vw] shadow-lg shadow-[black] rounded-lg border-[3px] border-black/80 p-[0.5vw] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vw] font-semibold text-center"
            >
              RDV
              <BiCalendar size="3vh" className="" />
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="fixed h-[100vh] bg-[#383e42] z-50 overflow-hidden">
        <div className="h-full container my-[10vh] ">
          <div className="h-full  rounded-lg w-[21vh] max-h-[80vh] my-auto pt-[20vh] py-[10vh]  flex flex-col justify-between items-center ">
            <Link
              to="header"
              spy={true}
              smooth={true}
              className=" font-[arimo]  cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
            >
              Acceuil
              <BiHomeAlt size="3vh" className="" />
            </Link>
            <Link
              to="infos"
              spy={true}
              smooth={true}
              className=" font-[arimo]  cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
            >
              Infos
              <BiInfoCircle size="3vh" className="" />
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              className=" font-[arimo]  cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049] flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold "
            >
              Contacts
              <BiPhone size="3vh" className="" />
            </Link>
            <Link
              to="rdv"
              spy={true}
              smooth={true}
              className=" font-[arimo]  cursor-pointer bg-[white] h-[10vh] w-[10vh] shadow-lg shadow-[black] rounded-xl border-[3px] border-black/80 p-[0.5vh] hover:transition hover:border-[#830049] hover:shadow-md hover:shadow-[#830049]  flex flex-col items-center justify-center transition hover:text-[#830049] text-[2vh] font-semibold text-center"
            >
              Rendez-Vous
              <BiCalendar size="3vh" className="" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
