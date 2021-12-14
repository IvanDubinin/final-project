import React from "react";

const PokemonPersonalCard = ({ poke }) => {
  const style = `${poke.types[0].type.name} personal-container`;
  return (
    <div className="app-contaner">
      <div className="poke-container">
        <div className="all-container"></div>
        <div className={style}>
          <div className="number">
            <h3>#0{poke.id}</h3>
          </div>
          <img
            src={poke.sprites.other["official-artwork"].front_default}
            alt={poke.name}
          />
          <div className="wrapper">
            <h3>{poke.name}</h3>
            <h4>Status: {poke.iscatch ? "Caught" : "Free"}</h4>
            {poke.iscatch ? <h4>Date: {poke.time}</h4> : <h4>Date: - - -</h4>}
            <h4>Weight: {poke.weight}</h4>
            <h4>
              Types:
              {poke.types.map((type) => (
                <div key={type.slot}>
                  <div>{type.type.name}</div>
                </div>
              ))}
            </h4>
            <h4>
              Abilities:
              {poke.abilities.map((ability) => (
                <div key={ability.slot}>
                  <div>{ability.ability.name}</div>
                </div>
              ))}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPersonalCard;
