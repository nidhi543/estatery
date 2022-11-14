import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const Location = () => {
  const { price, setPrice } = useContext(HouseContext);
  
  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];
  return (
    <Menu as='div' className='dropdown relative my-2'>
      <Menu.Button
        className='dropdown-btn w-full text-left'
      >

        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose Price Range</div>
        </div>
        
          <FontAwesomeIcon icon ={faArrowAltCircleDown} className='dropdown-icon-secondary' />
        
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default Location
