import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllMovies } from "../../redux/actions";
import mainImage from "../../img-cp2/main-image-cp2.jpg";
import MovieCard from "../MovieCard/MovieCard";
import "./home.css";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Home extends Component {
  componentDidMount() {
    this.props.getAllMovies();
  }
  render() {
    return (
      <div>
        <h1>Henry Movies</h1>
        <img src={mainImage} alt="henry-movies-logo" />
        <h3>Movies</h3>
        <h4>Checkpoint M2</h4>
        {this.props.movies?.map((el) => (
          <MovieCard
            id={el.id}
            name={el.name}
            director={el.director}
            releaseYear={el.releaseYear}
            image={el.image}
          />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export const mapDispatchToProps = { getAllMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
