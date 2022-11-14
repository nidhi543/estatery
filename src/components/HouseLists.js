import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const HouseLists = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <FontAwesomeIcon icon={faSpinner} className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house,index) => {
            return (
              <House house={house} key={index}/>
              
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseLists;