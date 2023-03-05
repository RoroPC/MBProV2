import React from "react";
import Logo from "../assets/LOGO-BAKHTA.png";
const Header = () => {
  return (
    <header
      id="header"
      className="h-[100vh] flex flex-col justify-start items-center "
    >
      <img src={Logo} alt="" />
      <h1>Entreprenez avec MB PRO Gestion</h1>
      <h2>
        ©MB<font color="7A4FA2">Pro</font>Gestion
      </h2>
      <h2>Meliani B.</h2>
    </header>
  );
};

export default Header;
