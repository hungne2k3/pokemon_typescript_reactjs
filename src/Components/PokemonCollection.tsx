import React from 'react'
import { Pokemon } from '../type'
import PokemonList from './PokemonList';

type Props = {
    pokemons: Pokemon[];
};

const PokemonCollection: React.FC<Props> = ({ pokemons }) => {

    return (
        <div>
            <section className='collection-container'>
                {pokemons.map((pokemon) => (
                    <div className=''>
                        <PokemonList
                            key={pokemon.id}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PokemonCollection