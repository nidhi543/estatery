import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed , faAreaChart} from '@fortawesome/free-solid-svg-icons'

const House = ({ house }) => {
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.image} alt='' />
      
      <div className='mb-2 flex gap-x-4 text-sm'>
         <div className='text-lg font-semibold text-indigo-600 mb-4'>
        $ {house.price}
      </div>
          {house.popular ? <div className='bg-indigo-500 text-white px-3 py-1 h-8 rounded-md inline-block'>
          Popular
        </div> : null}
      </div>
  
     
      <div className='text-lg font-semibold max-w-[260px]'>{house.name}</div>
      <div className='text-sm font-semibold max-w-[260px] text-gray-500'>{house.address}</div>
      <div className='flex gap-x-6 my-4 border-t-[1px]'>
        <div className='flex items-center text-gray-600 gap-1 mt-4'>
          <div className='text-[20px] rounded-full'>
            <FontAwesomeIcon icon={faBed} />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 mt-4'>
          <div className='text-[20px] rounded-full'>
            <FontAwesomeIcon icon ={faBath} />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1 mt-4'>
          <div className='text-[20px] rounded-full'>
          <FontAwesomeIcon icon ={faAreaChart}/>
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      
    </div>
  );
};

export default House;