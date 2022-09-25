import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!
export default class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <Link exact to="/">
          Home
        </Link>
        <Link to="/movies/create">Create Movie</Link>
      </header>
    );
  }
}
