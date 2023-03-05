import React from "react";

import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";

const App = () => {
  return (
    <div className="h-[200vh] bg-gradient-to-b from-white via-[#4c435e] to-[#4c435e] ">
      <Nav />
      <Header />
      <Infos />
      <Contacts />
      <Rdv />
    </div>
  );
};

export default App;
