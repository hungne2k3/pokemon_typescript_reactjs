import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { log } from 'console';
import PokemonCollection from './Components/PokemonCollection';
import { Pokemon, Detail, NamePokemons, PokemonDetail } from './type';

// định nghĩa type cho hàm thành: React Functional Component React.FC
const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [viewDetail, setViewDetail] = useState<Detail>({
    id: 0,
    isOpened: false,
  });

  // call Api
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');

      setNextUrl(res.data.next);

      // lấy toàn bộ tên của các Pokemon
      res.data.results.forEach(async (pokemon: NamePokemons) => {
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
      });
    }

    getPokemons();
  }, []);

  // hàm xử lý load more api
  const handleClick: () => void = async () => {
    setLoading(true);
    // lấy ra api tiếp khi click
    const res = await axios.get(nextUrl);

    // tiếp tục lặp các dữ liệu
    res.data.results.forEach(async (pokemon: NamePokemons) => {
      const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);

      setPokemons((p) => [...p, poke.data]);
      setLoading(false);

    });
  }

  return (
    (<div className="App">
      <div className="container">
        <div className="pokemon-header">
          <h1>Pokemon ReactJs + TypeScript</h1>

          <PokemonCollection pokemons={pokemons} viewDetail={viewDetail} setViewDetail={setViewDetail} />
        </div>

        {!viewDetail.isOpened && (

          <div className='btn'>
            <button onClick={handleClick}>{loading ? "Loading..." : "Load More"} {" "}</button>
          </div>
        )}

      </div>
    </div>)
  );
}

export default App;
