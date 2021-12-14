import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonCage = ({ allPokemons, getPokemonInfo, releasePokemon }) => {
  return (
    <div className="app-contaner">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons
            .filter((elem) => elem.iscatch === true)
            .map((pokemon, index) => (
              <PokemonCard
                getPokemonInfo={getPokemonInfo}
                key={index}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                iscatch={pokemon.iscatch}
                releasePokemon={releasePokemon}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCage;
