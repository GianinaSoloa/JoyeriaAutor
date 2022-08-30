import React, { useState } from "react";
import "./contact.css";

function UserForm() {
const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
    consulta:"",
  });
  
  function handleSubmit(evt) {
    evt.preventDefault();

    setUserData({
      name: "",
      email: "",
      telefono: "",
      consulta:"",
    });
  }
  function inputChangeHandler(evt) {
    const input = evt.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  /* function handleReset(evt) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  } */

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="NOMBRE COMPLETO"
            required
          />
        </div>

        <div className="form-item">
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="TELÉFONO"
            required
          />
        </div>

        <div className="form-item">
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="EMAIL"
            required
          />
        </div>

        <div className="form-item">
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="consulta"
            type="text"
            placeholder="CONSULTA"
          />
        </div>

        <div className="forms__buttons">
          <button className="button__form" type="submit">ENVIAR</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;