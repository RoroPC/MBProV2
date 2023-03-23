import React from "react";
import Formulaire from "./Formulaire";

const Rdv = () => {
  return (
    <div
      id="rdv"
      className="relative h-[100vh] flex flex-col justify-center items-center my-auto"
    >
      <div className="flex  mb-[20vh] mt-[5vw] mr-[20vw] justify-center items-center h-[50vw] w-[50vw] border-2 rounded-lg  bg-[#830049]/80 z-51">
        <div className="flex flex-col items-start  bg-[#830049] rounded-lg w-[90%] h-[90%]">
          <h1 className="text-white text-[2.5vw] mx-auto pt-[5vh]">
            Rendez - Vous
          </h1>
          <div className="ml-[3vw] flex items-center h-full my-[5vh] w-[17vw]">
            <small className="text-white leading-[1.3] text-[1.4vw]">
              Nous vous encourageons à nous contacter en remplissant le
              formulaire si vous souhaitez prendre rendez-vous
            </small>
          </div>
        </div>
      </div>
      <div className="flex absolute mt-[40vw] mb-[30vw] ml-[30vw] justify-center items-center h-[35vw] w-[50vw] border-2 border-[#830049] rounded-lg  bg-white/80 ">
        <Formulaire />
      </div>
    </div>
  );
};

export default Rdv;
