import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Formulario extends Component {
  nameRef = React.createRef();
  lastNameRef = React.createRef();
  bioRef = React.createRef();
  genderMaleRef = React.createRef();
  genderFemaleRef = React.createRef();
  genderOtherRef = React.createRef();

  state = {
    user: {},
  };

  deliverForm = (e) => {
    e.preventDefault();
    var gender = "hombre";

    if (this.genderMaleRef.current.checked) {
      gender = this.genderMaleRef.current.value;
    } else if (this.genderFemaleRef.current.checked) {
      gender = this.genderFemaleRef.current.value;
    } else {
      gender = this.genderOtherRef.current.value;
    }

    var user = {
      name: this.nameRef.current.value,
      lasName: this.lastNameRef.current.value,
      bio: this.bioRef.current.value,
      gender: gender,
    };

    console.log("formulario enviado");
    console.log(user);
  };

  render() {
    return (
      <div id="formulario">
        <div className="center">
          <div id="content">
            <h1 className="subheader">Formulario</h1>
            {/* Creacion del formulario */}
            <form className="mid-form" onSubmit={this.deliverForm}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nameRef} />
              </div>

              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.lastNameRef} />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Biografia</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radibuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.genderMaleRef}
                />{" "}
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.genderFemaleRef}
                />{" "}
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.genderOtherRef}
                />{" "}
                Otro
              </div>

              <div className="clearfix"></div>

              <input type="submit" value="Enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar />
        </div>
      </div>
    );
  }
}
export default Formulario;
