import React from "react";

import Contacts from "./components/Contacts";
import NavPortrait from "./components/NavPortrait";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";

const App = () => {
  return (
    <div className="bg-[#9b97a3] ">
      <NavPortrait />
      <Header />
      <Infos />
      <Contacts />
      <Rdv />
    </div>
  );
};

export default App;
