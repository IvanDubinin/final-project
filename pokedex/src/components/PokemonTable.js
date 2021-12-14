import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonTable = ({
  allPokemons,
  catchPokemon,
  getPokemonInfo,
  getAllPokemons,
  releasePokemon,
}) => {
  return (
    <div className="app-contaner">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((pokemon, index) => (
              <PokemonCard
                catchPokemon={catchPokemon}
                getPokemonInfo={getPokemonInfo}
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                releasePokemon={releasePokemon}
                iscatch={pokemon.iscatch}
              />
            ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default PokemonTable;
