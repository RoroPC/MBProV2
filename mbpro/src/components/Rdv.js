import React from "react";

const Rdv = () => {
  return (
    <div id="rdv" className="h-[100vh]">
      <h2>rendez-vous</h2>
      <div>
        <form
          action="formulaire.php"
          method="POST"
          id="my-form"
          className="flex flex-col items-center h-[100vh] justify-evenly"
        >
          <div className="flex flex-col items-center">
            <label for="prénom"> Prénom</label>
            <input type="text" id="prénom" name="prénom" />
          </div>

          <div className="flex flex-col items-center">
            <label for="nom">Nom</label>
            <input type="text" id="nom" name="nom" />
          </div>

          <div className="flex flex-col items-center">
            <label for="téléphone">Téléphone</label>
            <input
              type="tel"
              id="téléphone"
              name="téléphone"
              pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
            />
            <small>Format: 0607080910</small>
          </div>

          <div className="flex flex-col items-center">
            <label for="adresse">Adresse</label>
            <input type="text" id="adresse" name="adresse" />
          </div>

          <div className="flex flex-col items-center">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="flex flex-col items-center">
            <label for="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="3"></textarea>
            <small>
              Quand souhaitez vous être contacté (jour, matinée, après midi ...)
              et quel est votre projet
            </small>
          </div>
          <div id="status"></div>

          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Rdv;
