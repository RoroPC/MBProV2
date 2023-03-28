import React from "react";
import Formulaire from "./Formulaire";
import useScreenOrientation from "../hooks/useScreenOrientation";

const Rdv = () => {
  const orientation = useScreenOrientation();
  if (
    (orientation === "portrait-primary") |
    (orientation === "portrait-secondary")
  ) {
    return (
      <div
        id="rdv"
        className="relative h-[100vh] flex flex-col justify-start items-center my-auto border-b border-white"
      >
        <h1 className="mt-[5vh] text-white text-[10vw]">Rendez-Vous</h1>
        <div className="flex justify-center items-center mt-[10vh] border-2 rounded-lg h-[50vh] w-[60vw]  bg-[#830049]/80">
          <div className="relative flex flex-col justify-start items-center bg-white rounded-md w-[90%] h-[93%] ">
            <div className=" flex items-center h-[30%] w-[90%]">
              <small className="text-black leading-[2vh] text-[2.6vw] text-justify ">
                Nous vous encourageons à nous contacter en remplissant le
                formulaire si vous souhaitez prendre rendez-vous.
              </small>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[90%] h-[70%] border mb-[2vh]">
              <Formulaire />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="rdv"
        className="relative h-[100vh] flex flex-col justify-center items-center my-auto"
      >
        <div className="flex mb-[20vh] mt-[5vw] mr-[20vw] justify-center items-center h-[50vw] w-[50vw] border-2 rounded-lg  bg-[#830049]/80 z-51">
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
        <div className="flex absolute mt-[40vw] mb-[30vw] ml-[30vw] justify-center items-center h-[30vw] w-[50vw] border-2 border-[#830049] rounded-lg  bg-white/80 ">
          <Formulaire />
        </div>
      </div>
    );
  }
};

export default Rdv;
