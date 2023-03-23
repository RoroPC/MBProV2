import React from "react";

import Contacts from "./components/Contacts";
import NavP from "./components/NavP";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Infos from "./components/Infos";
import Rdv from "./components/Rdv";
import ContactsP from "./components/ContactsP";

const App = () => {
  return (
    <div className=" bg-[#383e42] font-[Lora] ">
      <NavP />
      <Header />
      <Infos />
      <ContactsP />
      <Rdv />
    </div>
  );
};

export default App;
