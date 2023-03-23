import React from "react";
import { Link } from "react-scroll";

const ContactsP = () => {
  return (
    <div
      id="contacts"
      className="relative h-[100vh] flex flex-col justify-start items-center my-auto border-b border-white"
    >
      <h1 className="mt-[5vh] text-white text-[10vw]">Contacts</h1>
      <div className="flex justify-center items-center mt-[10vh] border-2 rounded-lg h-[50vh] w-[60vw]  bg-[#830049]/80">
        <div className="relative flex flex-col justify-start items-center bg-white rounded-md w-[90%] h-[93%] ">
          <div className=" flex items-center h-[50%] w-[90%]">
            <small className="text-black leading-[1.3] text-[4vw] text-justify ">
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
          <div className="flex flex-col items-center justify-evenly w-[90%] h-[50%] border">
            <h1 className="flex flex-col items-center text-[4.3vw]">
              EMAIL
              <Link className=" cursor-pointer underline text-[3.5vw]">
                mbprogestion@outlook.fr
              </Link>
            </h1>

            <h1 className="flex flex-col items-center text-[4.3vw]">
              TELEPHONE
              <Link className=" cursor-pointer underline text-[3.5vw]">
                06 95 73 46 93
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsP;
