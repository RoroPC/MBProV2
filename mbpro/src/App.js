import React from "react";

import Contacts from "./components/Contacts";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";

const App = () => {
  return (
    <div className="h-[400vh] bg-blue-300">
      <Nav />
      <Header />
      <Infos />
      <Contacts />
      <Rdv />
    </div>
  );
};

export default App;
