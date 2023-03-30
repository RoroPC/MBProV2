import React from "react";
import useScreenOrientation from "../hooks/useScreenOrientation";
import Logo from "../assets/LOGO-BAKHTA.png";
import Image1 from "../assets/finance.jpg";
import Image2 from "../assets/calculator-385506_640.jpg";

const Header = () => {
  const orientation = useScreenOrientation();
  if (
    (orientation === "portrait-primary") |
    (orientation === "portrait-secondary")
  ) {
    return (
      <header
        id="header"
        className="h-[100vh]   flex flex-col justify-start items-center border-b border-white "
      >
        <div className=" h-[25vh] w-full flex flex-col justify-start items-center pt-5 bg-white border-2 border-white">
          <img src={Logo} alt="" className="object-scale-down h-[50%] ml-3" />
          <h1 className=" h-[3vh] text-[2vh]  ">
            Entreprenez avec MB PRO Gestion
          </h1>
          <h2 className=" h-[3vh] text-[2vh]  ">
            ©MB<font color="830049">Pro</font>Gestion
          </h2>
          <h2 className=" h-[3vh] text-[2vh]  ">Meliani B.</h2>
        </div>
        <div className="my-auto text-[325%] font-[Ramabhadra] text-center text-white leading-none flex flex-col">
          MB <font className="text-[#830049]"> PRO </font>
          GESTION
        </div>
      </header>
    );
  } else {
    return (
      <header
        id="header"
        className=" h-[100vh]  flex flex-col justify-start items-center border-b border-white "
      >
        <div className=" h-[25vh] w-full flex flex-col justify-start items-center pt-5 bg-white border-2 border-white">
          <img src={Logo} alt="" className="object-scale-down h-[50%]" />
          <h1 className=" h-[3vh] text-[2vh]  ">
            Entreprenez avec MB PRO Gestion
          </h1>
          <h2 className=" h-[3vh] text-[2vh]  ">
            ©MB<font color="830049">Pro</font>Gestion
          </h2>
          <h2 className=" h-[3vh] text-[2vh]  ">Meliani B.</h2>
        </div>
        <div className="border my-auto w-[80vw] ml-[10vw] text-[7vh] font-[Ramabhadra] text-center flex items-center justify-between flex-row">
          <img
            src={Image1}
            alt=""
            className=" h-[30vh] border-[1vh] border-[#830049]"
          />
          MB <font className="text-[#830049]"> PRO </font>
          GESTION
          <img
            src={Image2}
            alt=""
            className=" h-[30vh]  border-[1vh] border-[#830049]"
          />
        </div>
      </header>
    );
  }
};

export default Header;
