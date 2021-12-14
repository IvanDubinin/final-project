import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({
  id,
  name,
  type,
  getPokemonInfo,
  catchPokemon,
  releasePokemon,
  iscatch,
}) => {
  const style = type + " personal-container";
  return (
    <Link to={`/pokemon/${id}`}>
      <div className={style} onClick={() => getPokemonInfo(id)}>
        <div className="number">
          <h3>#0{id}</h3>
        </div>
        <div className="wrapper">
          <h3>{name}</h3>
        </div>
        {!iscatch ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              catchPokemon(id);
            }}
          >
            {" "}
            Catch{" "}
          </button>
        ) : (
          <button
            style={{ backgroundColor: "red" }}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              releasePokemon(id);
            }}
          >
            {" "}
            Release{" "}
          </button>
        )}
      </div>
    </Link>
  );
};

export default PokemonCard;
