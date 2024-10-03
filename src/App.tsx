import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { log } from 'console';

// khai bao type lay ra api name
type NamePokemons = {
  name: string;
  url: string;
};

type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
};

// định nghĩa type cho hàm thành: React Functional Component React.FC
const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // call Api
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

      // lấy toàn bộ tên của các Pokemon
      res.data.results.forEach(async (pokemon: NamePokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

        setPokemons((p) => [...p, poke.data])
      });
    }

    getPokemons();
  }, []);

  return (
    (<div className="App">
      <div className="container">
        <div className="pokemon-header">
          <h1>Pokemon ReactJs + TypeScript</h1>
        </div>
      </div>
    </div>)
  );
}

export default App;
