import React from "react";
import { useState } from "react";
import Axios from "axios";

const Formulaire_Rdv = () => {
  const url = "http://localhost:8000/formulaire_mbprov2.php";
  const [data, setData] = useState({
    prénom: "",
    nom: "",
    téléphone: "",
    adresse: "",
    email: "",
    message: "",
  });

  function resetForm() {
    setData({
      prénom: "",
      nom: "",
      téléphone: "",
      adresse: "",
      email: "",
      message: "",
    });
  }

  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post(url, {
      prénom: data.prénom,
      nom: data.nom,
      téléphone: data.nom,
      adresse: data.adresse,
      email: data.email,
      message: data.message,
    }).then(function (response) {
      console.log(response);
      resetForm();
      alert(
        "Votre message à bien été envoyé, nous vous recontacterons au plus vite"
      );
    });
  }

  return (
    <form
      action="#"
      id="my-form"
      className="relative flex flex-col items-center bg-[white] rounded-sm w-[90%] h-[90%] justify-evenly"
    >
      <div className="flex flex-col items-center relative h-[8%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[50%] text-[white] text-[0.8vw] flex justify-center items-center"
          htmlFor="prénom"
        >
          {" "}
          Prénom
        </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={data.prénom}
          placeholder="Pierre"
          id="prénom"
          name="prénom"
          className="rounded-b-sm w-full text-[0.8vw] h-[50%]"
        />
      </div>

      <div className="flex flex-col items-center relative h-[8%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[50%] text-[white] text-[0.8vw] flex justify-center items-center "
          htmlFor="nom"
        >
          Nom
        </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={data.nom}
          placeholder="Dupont"
          id="nom"
          name="nom"
          className=" rounded-b-sm w-full text-[0.8vw] h-[50%]"
        />
      </div>

      <div className="flex flex-col items-center relative h-[8%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[50%] text-[white] text-[0.8vw] flex justify-center items-center"
          htmlFor="téléphone"
        >
          Téléphone
        </label>
        <input
          type="tel"
          onChange={(e) => handleChange(e)}
          value={data.téléphone}
          placeholder="06 05 04 03 02"
          id="téléphone"
          name="téléphone"
          pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
          className="rounded-b-sm w-full text-[0.8vw] h-[50%]"
        />
      </div>
      <div className="flex flex-col items-center relative h-[8%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[50%] text-[white] text-[0.8vw] flex justify-center items-center"
          htmlFor="adresse"
        >
          Adresse
        </label>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          value={data.adresse}
          placeholder="1 rue de l'exemple, 91340 LISSES"
          id="adresse"
          name="adresse"
          className="rounded-b-sm w-full text-[0.8vw] h-[50%]"
        />
      </div>

      <div className="flex flex-col items-center relative h-[8%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[50%] text-[white] text-[0.8vw] flex justify-center items-center"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          onChange={(e) => handleChange(e)}
          value={data.email}
          placeholder="pierre.dupont@email.com"
          id="email"
          name="email"
          className="rounded-b-sm w-full text-[0.8vw] h-[50%] "
        />
      </div>

      <div className="flex flex-col items-center relative h-[12%] w-[18vw] bg-[#830049]/80 border border-black rounded-sm ">
        <label
          className=" w-full h-[30%] text-[white] text-[0.8vw] flex justify-center items-center"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          onChange={(e) => handleChange(e)}
          value={data.message}
          placeholder="Votre Message"
          id="message"
          cols="30"
          rows="2"
          className="rounded-b-sm w-full text-[0.8vw] h-[70%] resize-none"
        ></textarea>
      </div>
      <small className="h-[8%] text-[0.8vw]">
        Quand souhaitez vous être contacté (jour, matinée, après midi ...) et
        quel est votre projet
      </small>
      <button
        type="submit"
        onClick={(e) => handleSubmit(e)}
        className="w-[18vw] h-[5%] border border-black text-center text-[0.8vw] rounded-sm bg-slate-100 hover:bg-[#830049]/80 hover:text-white transition"
      >
        Envoyer
      </button>
    </form>
  );
};

export default Formulaire_Rdv;
