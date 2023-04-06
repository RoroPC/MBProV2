import React from "react";

import Contacts from "./components/Contacts";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";
import useScreenOrientation from "./hooks/useScreenOrientation";

const App = () => {
  return (
    <div className="h-[400%] bg-[#383e42] font-[Lora]">
      {console.log(useScreenOrientation())}
      <Nav />
      <Header />

      <Infos />
      <Contacts />
      <Rdv />
    </div>
  );
};

export default App;
