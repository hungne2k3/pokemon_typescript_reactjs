import React, { useEffect, useState } from 'react'
import './pokemon.css';
import { Detail } from '../type';

type Props = {
  id: number;
  name: string;
  image: string;
  abilities: {
    ability: {
      name: string;
    };
  }[] | undefined;
  viewDetail: Detail;
  setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
};

const PokemonList: React.FC<Props> = ({ name, id, image, abilities, viewDetail, setViewDetail }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(id === viewDetail?.id);
  }, [viewDetail]);

  const handleClose: () => void = () => {
    setIsSelected(false);
    setViewDetail({
      id: 0,
      isOpened: false,
    });
  }

  return (
    <div className=''>
      {isSelected ? (
        <div className='pokemon-list-detailed'>
          <div className="detail-container">
            <p className="detail-close" onClick={handleClose}>
              X
            </p>

            <div className="detail-info">
              <img src={image} alt="pokemon" className='detail-img' />

              <p className="detail-name">
                {name}
              </p>
            </div>

            <div className="detail-skill">
              <div className="detail-abitlity">
                Ability:
              </div>

              {
                abilities?.map((ab: any, index) => (
                  <div key={index} className=''>{ab.ability.name}</div>
                ))
              }
            </div>
          </div>
        </div>
      ) : (<section className='pokemon-list-container'>
        <p className="pokemon-name">
          {name}
        </p>

        <img src={image} alt="pokemon" />
      </section>)}
    </div>
  )
}

export default PokemonList