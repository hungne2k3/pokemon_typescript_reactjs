// khai bao type lay ra api name
export type NamePokemons = {
    name: string;
    url: string;
};

// list pokemon
export type Pokemon = {
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
};

export type PokemonDetail = Pokemon & {
    abilities?: {
        ability: {
            name: string;
        };
    }[];
};

// view detail
export type Detail = {
    id: number;
    isOpened: boolean;
};