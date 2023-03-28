import React from "react";
import { Link } from "react-scroll";
import useScreenOrientation from "../hooks/useScreenOrientation";

const Infos = () => {
  const orientation = useScreenOrientation();
  if (
    (orientation === "portrait-primary") |
    (orientation === "portrait-secondary")
  ) {
    return (
      <div
        id="infos"
        className="relative h-[100vh] flex flex-col justify-start items-center my-auto border-b border-white"
      >
        <h1 className="mt-[5vh] text-white text-[10vw]">À Propos</h1>
        <div className="flex justify-center items-center mt-[2vh] border-2 rounded-lg h-[65vh] w-[60vw]  bg-[#830049]/80">
          <div className="relative flex flex-col justify-start items-center bg-white rounded-md w-[90%] h-[93%] ">
            <div className=" flex items-center h-[60%] w-[90%]">
              <small className="text-black leading-[2vh] text-[2.4vw] text-justify ">
                Spécialisé dans la création et la gestion d'entreprise,
                <br />
                <font color="830049"> MB Pro Gestion </font> vous accompagnera
                dans{" "}
                <font color="830049">
                  la création, la gestion et le develeppoment de votre
                  entreprise
                </font>
                . Depuis plus de 4 ans nous permettons à une trentaine de
                petites et moyennes entreprises d'aborder avec sérénité les
                échéances que sont les bilans, les fiches de paies et les
                contrôles. N'hesitez pas à{" "}
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  className=" cursor-pointer underline decoration-[#830049]"
                >
                  <font color="830049">nous contacter</font>
                </Link>{" "}
                ou à{" "}
                <Link
                  to="rdv"
                  spy={true}
                  smooth={true}
                  className=" cursor-pointer underline decoration-[#830049]"
                >
                  <font color="830049">prendre rendez-vous</font>
                </Link>{" "}
                directement sur notre site pour échanger sur votre projet et
                demander un devis.
              </small>
            </div>
            <div className="flex flex-col items-center justify-evenly w-[90%] h-[40%] border mb-[2vh]">
              <div className="ml-[3vw] flex items-center h-full w-[40vw]">
                <ul className=" text-[#830049] leading-[2] text-[3vw] list-[square] pl-[2vh]">
                  <li> Création d'entreprise </li>
                  <li> Conseil </li>
                  <li> Bilans </li>
                  <li> Fiches de Paie </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="infos"
        className="relative h-[100vh] flex flex-col justify-center items-center my-auto border-b border-white"
      >
        <div className="flex  mb-[20vh] mt-[5vw] mr-[15vw] justify-center items-center h-[50vw] w-[50vw] border-2 rounded-lg  bg-[#830049]/80 z-51">
          <div className="flex flex-col items-start  bg-[#830049] rounded-lg w-[90%] h-[90%]">
            <h1 className="text-white text-[2.5vw] mx-auto pt-[3vh]">
              À Propos
            </h1>
            <div className="ml-[3vw] flex items-center h-full my-[5vh] w-[17vw]">
              <ul className=" text-white leading-[2] text-[1.4vw] list-[square] pl-[2vh]">
                <li> Création d'entreprise </li>
                <li> Conseil </li>
                <li> Bilans </li>
                <li> Fiches de Paie </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex absolute mt-[40vw] mb-[30vw] ml-[30vw] justify-center items-center h-[30vw] w-[45vw] border-2 border-[#830049] rounded-lg  bg-white/80 ">
          <div className="relative flex flex-col items-center bg-white rounded-lg w-[90%] h-[90%] justify-evenly">
            <div className="flex flex-col items-center justify-evenly w-[40vw]">
              <p className=" text-[1.3vw] mx-[2vw]">
                Spécialisé dans la création et la gestion d'entreprise,
                <br />
                <font color="830049"> MB Pro Gestion </font> vous accompagnera
                dans{" "}
                <font color="830049">
                  la création, la gestion et le develeppoment de votre
                  entreprise
                </font>
                . Depuis plus de 4 ans nous permettons à une trentaine de
                petites et moyennes entreprises d'aborder avec sérénité les
                échéances que sont les bilans, les fiches de paies et les
                contrôles. N'hesitez pas à{" "}
                <Link
                  to="contacts"
                  smooth={true}
                  className=" cursor-pointer underline decoration-[#830049]"
                >
                  <font color="830049">nous contacter</font>
                </Link>{" "}
                ou à{" "}
                <Link
                  to="rdv"
                  smooth={true}
                  className=" cursor-pointer underline decoration-[#830049]"
                >
                  <font color="830049">prendre rendez-vous</font>
                </Link>{" "}
                directement sur notre site pour échanger sur votre projet et
                demander un devis.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Infos;
