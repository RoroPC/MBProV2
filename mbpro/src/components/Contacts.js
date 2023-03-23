import React from "react";
import { Link } from "react-scroll";

const Contacts = () => {
  return (
    <div
      id="contacts"
      className="relative h-[100vh] flex flex-col justify-center items-center my-auto border-b border-white"
    >
      <div className="flex  mb-[20vh] mt-[5vw] ml-[20vw] justify-center items-center h-[50vw] w-[50vw] border-2 rounded-lg  bg-[#830049]/80 z-51">
        <div className="flex flex-col items-end  bg-[#830049] rounded-lg w-[90%] h-[90%]">
          <h1 className="text-white text-[2.5vw] mx-auto pt-[5vh]">Contacts</h1>
          <div className=" flex items-center h-full my-[5vh] w-[17vw]">
            <small className="text-white leading-[1.3] text-[1.4vw] ">
              Nous sommes joignable du lundi au vendredi par mail, par téléphone
              et tous les jours depuis notre site à l'onglet "
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
      <div className="flex absolute mt-[40vw] mb-[30vw] mr-[20vw] justify-center items-center h-[35vw] w-[50vw] border-2 border-[#830049] rounded-lg  bg-white/80 ">
        <div className="relative flex flex-col items-center bg-white rounded-lg w-[90%] h-[90%] justify-evenly">
          <div className="flex flex-col items-center justify-evenly w-[75%] h-[75%] border">
            <h1 className="flex flex-col items-center text-[1.4vw]">
              EMAIL
              <Link className=" cursor-pointer underline text-[1.1vw]">
                mbprogestion@outlook.fr
              </Link>
            </h1>

            <h1 className="flex flex-col items-center text-[1.4vw]">
              TELEPHONE
              <Link className=" cursor-pointer underline text-[1.1vw]">
                06 95 73 46 93
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
