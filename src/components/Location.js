import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';
const Location = () => {
    const { country, setCountry, countries } = useContext(HouseContext);
  return (
    <Menu as='div' className='dropdown relative my-2'>
      <Menu.Button
        className='dropdown-btn w-full text-left'
      >

        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
      
          <FontAwesomeIcon icon ={faArrowAltCircleDown} className='dropdown-icon-secondary' />
       
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setCountry(country)}
              key={index}
              className='cursor-pointer hover:text-violet-700 transition'
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  )
}

export default Location
