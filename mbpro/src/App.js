import React from "react";

import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";

const App = () => {
  return (
    <div className="bg-[#9b97a3] ">
      <Nav />
      <Header />
      <Infos />
      <Contacts />
      <Rdv />
    </div>
  );
};

export default App;
