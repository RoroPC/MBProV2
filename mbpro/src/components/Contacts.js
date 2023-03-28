import React from "react";
import { Link } from "react-scroll";
import useScreenOrientation from "../hooks/useScreenOrientation";

const Contacts = () => {
  const orientation = useScreenOrientation();
  if (
    (orientation === "portrait-primary") |
    (orientation === "portrait-secondary")
  ) {
    return (
      <div
        id="contacts"
        className="relative h-[100vh] flex flex-col justify-start items-center my-auto border-b border-white"
      >
        <h1 className="mt-[5vh] text-white text-[10vw]">Contacts</h1>
        <div className="flex justify-center items-center mt-[10vh] border-2 rounded-lg h-[50vh] w-[60vw]  bg-[#830049]/80">
          <div className="relative flex flex-col justify-start items-center bg-white rounded-md w-[90%] h-[93%] ">
            <div className=" flex items-center h-[50%] w-[90%]">
              <small className="text-black leading-[3vh] text-[3.7vw] text-justify ">
                Nous sommes joignable du lundi au vendredi par mail, par
                téléphone et tous les jours depuis notre site à l'onglet "
                <Link
                  to="rdv"
                  spy={true}
                  smooth={true}
                  className=" cursor-pointer underline"
                >
                  rendez-vous
                </Link>
                "
              </small>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[90%] h-[50%] border mb-[2vh]">
              <h1 className="flex flex-col items-center text-[4.3vw]">
                EMAIL
                <Link to="#" className=" cursor-pointer underline text-[3.5vw]">
                  mbprogestion@outlook.fr
                </Link>
              </h1>

              <h1 className="flex flex-col items-center text-[4.3vw]">
                TELEPHONE
                <Link to="#" className=" cursor-pointer underline text-[3.5vw]">
                  06 95 73 46 93
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="contacts"
        className="relative h-[100vh] flex flex-col justify-center items-center my-auto border-b border-white"
      >
        <div className="flex  mb-[20vh] mt-[5vw] ml-[20vw] justify-center items-center h-[50vw] w-[50vw] border-2 rounded-lg  bg-[#830049]/80 z-51">
          <div className="flex flex-col items-end  bg-[#830049] rounded-lg w-[90%] h-[90%]">
            <h1 className="text-white text-[2.5vw] mx-auto pt-[2vw]">
              Contacts
            </h1>
            <div className=" flex items-center h-full my-[5vh] w-[20vw]">
              <small className="text-white leading-[1.3] text-[1.4vw] pr-[3vw] text-justify ">
                Nous sommes joignable du lundi au vendredi par mail, par
                téléphone et tous les jours depuis notre site à l'onglet "
                <Link
                  to="rdv"
                  smooth={true}
                  className=" cursor-pointer underline"
                >
                  rendez-vous
                </Link>
                "
              </small>
            </div>
          </div>
        </div>
        <div className="flex absolute mt-[40vw] mb-[30vw] mr-[20vw] justify-center items-center h-[30vw] w-[40vw] border-2 border-[#830049] rounded-lg  bg-white/80 ">
          <div className="relative flex flex-col items-center bg-white rounded-lg w-[90%] h-[90%] justify-evenly">
            <div className="flex flex-col items-center justify-evenly w-[30vw] h-[20vw] border">
              <h1 className="flex flex-col items-center text-[1.4vw]">
                EMAIL
                <Link to="#" className=" cursor-pointer underline text-[1.1vw]">
                  mbprogestion@outlook.fr
                </Link>
              </h1>

              <h1 className="flex flex-col items-center text-[1.4vw]">
                TELEPHONE
                <Link to="#" className=" cursor-pointer underline text-[1.1vw]">
                  06 95 73 46 93
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contacts;
