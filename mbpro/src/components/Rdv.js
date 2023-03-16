import React from "react";
import Formulaire from "./Formulaire";

const Rdv = () => {
  return (
    <div
      id="rdv"
      className="relative h-[100vh] flex flex-col justify-center items-center my-auto"
    >
      <div className="flex  mb-[20vh] mr-[20vh] justify-center items-center h-2/3 w-1/2 border-2 rounded-lg  bg-[#830049]/80 z-51">
        <div className="flex flex-col items-start  bg-[#830049] rounded-lg w-[90%] h-[90%] justify-center">
          <div className="ml-[5vh] mt-[15vh] h-[90vh] w-[20vh]">
            <small className="text-white text-[2vh]">
              Nous vous encourageons à nous contacter en remplissant le
              formulaire si vous souhaitez prendre rendez-vous
            </small>
          </div>
        </div>
      </div>
      <div className="flex absolute mt-[20vh] ml-[50vh] justify-center items-center h-2/3 w-1/2 border-2 border-[#830049] rounded-lg  bg-white/80 ">
        <Formulaire />
      </div>
    </div>
  );
};

export default Rdv;
