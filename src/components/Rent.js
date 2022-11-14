import React from 'react'
import Filter from './Filter'
import HouseLists from './HouseLists'

const Rent = () => {
  return (
    <div className='flex flex-col my-12 max-w-6xl mx-auto '>
      {/* hero */}
      <div className='flex justify-between align-middle'>
        <h1 className='text-4xl font-semibold'>Search properties to rent</h1>
        <input type="search" name="searchbar" placeholder='search with searchbar' className='px-4'/>
      </div>

      {/* filters */}
      <Filter/>

      {/* cards */}
      <HouseLists/>
    </div>
  )
}

export default Rent