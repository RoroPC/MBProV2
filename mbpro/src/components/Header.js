import React from "react";
import Logo from "../assets/LOGO-BAKHTA.png";
const Header = () => {
  return (
    <header
      id="header"
      className="h-[100vh] pt-5  flex flex-col justify-start items-center "
    >
      <img src={Logo} alt="" className="object-scale-down h-[10%]" />
      <h1>Entreprenez avec MB PRO Gestion</h1>
      <h2>
        ©MB<font color="7A4FA2">Pro</font>Gestion
      </h2>
      <h2>Meliani B.</h2>
    </header>
  );
};

export default Header;
