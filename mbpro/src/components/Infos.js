import React from "react";
import { BiAlarm, BiCar } from "react-icons/bi";

const Infos = () => {
  const portrait = window.matchMedia("(orientation : portrait)").matches;
  return (
    <div id="infos" className="h-[100vh] flex items-center justify-center">
      {portrait ? <BiCar size="30px" /> : <BiAlarm size="30px" />}
    </div>
  );
};

export default Infos;
