import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonTable from "./components/PokemonTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPersonalCard from "./components/PokemonPersonalCard";
import Header from "./components/Header";
import PokemonCage from "./components/PokemonCage";
import moment from "moment";

function App() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [poke, setPoke] = useState([]);

  const getAllPokemons = async () => {
    fetch(loadMore)
      .then((res) => res.json())
      .then((data) => {
        setLoadMore(data.next);
        data.results.forEach(async (pokemon) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => res.json())
            .then((data) => {
              data["iscatch"] = false;
              data["time"] = " ";
              setAllPokemons((currentList) => [...currentList, data]);
            })
        );
      });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  function getPokemonInfo(id) {
    const pokemon = allPokemons.find((elem) => elem.id === id);
    setPoke(pokemon);
  }

  function catchPokemon(id) {
    setAllPokemons(
      allPokemons.map((elem) => {
        if (elem.id === id) {
          elem["iscatch"] = true;
          elem["time"] = moment().format("LL");
        }
        return elem;
      })
    );
  }

  function releasePokemon(id) {
    setAllPokemons(
      allPokemons.map((elem) => {
        if (elem.id === id) {
          elem["iscatch"] = false;
        }
        return elem;
      })
    );
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PokemonTable
              allPokemons={allPokemons}
              getPokemonInfo={getPokemonInfo}
              catchPokemon={catchPokemon}
              getAllPokemons={getAllPokemons}
              releasePokemon={releasePokemon}
            />
          }
        />
        <Route
          path="/cage"
          element={
            <PokemonCage
              allPokemons={allPokemons}
              getPokemonInfo={getPokemonInfo}
              releasePokemon={releasePokemon}
            />
          }
        />
        <Route
          path="/pokemon/:id"
          element={<PokemonPersonalCard poke={poke} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
