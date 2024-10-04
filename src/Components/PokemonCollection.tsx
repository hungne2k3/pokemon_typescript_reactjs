import React from 'react'
import { Pokemon, Detail, PokemonDetail } from '../type'
import PokemonList from './PokemonList';

type Props = {
    pokemons: PokemonDetail[];
    viewDetail: Detail;
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
};

const PokemonCollection: React.FC<Props> = ({ pokemons, viewDetail, setViewDetail }) => {
    const handleSelectPokemon = (id: number) => {
        if (!viewDetail.isOpened) {
            setViewDetail({
                id: id,
                isOpened: true,
            });
        }

    }

    return (
        <>
            <section className={viewDetail.isOpened ? 'collection-container-active' : 'collection-container'}>
                {viewDetail.isOpened ? (
                    <div className='overlay'></div>
                ) : (
                    <div></div>
                )}

                {pokemons.map((pokemon, index) => (
                    <div key={index} className='' onClick={() => handleSelectPokemon(pokemon.id)}>
                        <PokemonList
                            key={pokemon.id}
                            viewDetail={viewDetail}
                            setViewDetail={setViewDetail}
                            name={pokemon.name}
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                            abilities={pokemon.abilities}
                        />
                    </div>
                ))}
            </section>
        </>
    )
}

export default PokemonCollection