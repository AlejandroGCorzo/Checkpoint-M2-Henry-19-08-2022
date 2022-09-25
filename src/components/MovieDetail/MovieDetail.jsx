import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const MovieDetail = (props) => {
  const selectedProduct = useSelector((state) => state);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.getMovieDetail(props.match.params.id));
  }, []);

  return (
    <div>
      <p>{selectedProduct.name}</p>
      <p>{selectedProduct.director}</p>
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.releaseYear}</p>
    </div>
  );
};

export default MovieDetail;
