import React, {useContext} from 'react'
import Date from './Date'
import Location from './Location'
import Price from './Price'
import PropertyType from './PropertyType'
import {HouseContext} from './HouseContext'

const Filter = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='flex justify-between bg-white my-8 px-4 rounded-lg'>
      <Location/>
      <Date/>
      <Price/>
      <PropertyType/>
      <button  onClick={() => {
          handleClick();
        }}
      className= 'bg-indigo-600 hover:bg-indigo-700 transition w-full lg:max-w-[150px] h-14 rounded-lg flex justify-center items-center text-white text-lg my-4 mx-2'>
        Search
      </button>
      
    </div>
  )
}

export default Filter