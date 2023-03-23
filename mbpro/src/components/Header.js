import React from "react";
import Logo from "../assets/LOGO-BAKHTA.png";
const Header = () => {
  return (
    <header
      id="header"
      className="h-[100vh]   flex flex-col justify-start items-center border-b border-white "
    >
      <div className=" h-[25vh] w-full flex flex-col justify-start items-center pt-5 bg-white border-2 border-white">
        <img src={Logo} alt="" className="object-scale-down h-[50%]" />
        <h1>Entreprenez avec MB PRO Gestion</h1>
        <h2>
          ©MB<font color="830049">Pro</font>Gestion
        </h2>
        <h2>Meliani B.</h2>
      </div>
    </header>
  );
};

export default Header;
