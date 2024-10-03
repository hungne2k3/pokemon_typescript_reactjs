import React from 'react'
import './pokemon.css';

type Props = {
  id: number;
  name: string;
  image: string;
};

const PokemonList: React.FC<Props> = ({ name, id, image }) => {
  return (
    <div className=''>
      <section className='pokemon-list-container'>
        <p className="pokemon-name">
          {name}
        </p>

        <img src={image} alt="" />
      </section>
    </div>
  )
}

export default PokemonList