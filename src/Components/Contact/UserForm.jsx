import React, { useState } from "react";
import "./contact.css";

function UserForm() {
const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });
  
  function handleSubmit(evt) {
    evt.preventDefault();

    setUserData({
      name: "",
      email: "",
      telefono: "",
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

  function handleReset(evt) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    });
  }

  return (
    <div className="form-container">
      <form onReset={handleReset} onSubmit={handleSubmit}>
        <div className="form-item">
          <input
            value={userData.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder="NOMBRE COMPLETO"
          />
        </div>

        <div className="form-item">
          <input
            value={userData.telefono}
            onChange={inputChangeHandler}
            name="telefono"
            type="text"
            placeholder="TELÉFONO"
          />
        </div>

        <div className="form-item">
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="EMAIL"
          />
        </div>

        <div className="form-item">
          <input
            value={userData.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder="CONSULTA"
          />
        </div>

        <div>
          <button type="submit">ENVIAR</button>
          <button type="reset">CANCELAR</button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;