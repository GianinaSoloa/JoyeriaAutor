import React, { useState } from "react";
import "./contact.css";
import Swal from 'sweetalert2'

function UserForm() {
const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    consult:"",
  });
  
  function handleSubmit(evt) {
    evt.preventDefault();

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Tu mensaje ha sido enviado con éxito',
      showConfirmButton: false,
      timer: 1500
    })

    setUserData({
      name: "",
      email: "",
      phone: "",
      consult:"",
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
      phone: "",
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
            value={userData.phone}
            onChange={inputChangeHandler}
            name="phone"
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
            value={userData.consult}
            onChange={inputChangeHandler}
            name="consult"
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