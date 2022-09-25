import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions";
import "./movieCard.css";
// Importar las actions como Object Modules, sino los test no funcionarán!

//PARA QUE LOS TEST CORRAN, DEBEN HACER ESTE COMPONENTE COMO UN FUNCIONAL COMPONENT.

const MovieCard = (props) => {
  return (
    <div className="card">
      <button onClick={() => actions.deleteMovie(props.id)}>x</button>
      <Link to={`/movie/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt={props.name} />
      <p>ReleaseYear: {props.releaseYear}</p>
      <p>Director: {props.director}</p>
    </div>
  );
};

export default MovieCard;
