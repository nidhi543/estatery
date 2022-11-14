import React from 'react'
const Location = () => {
  let date = new Date().toLocaleDateString();
  return (
    <div className='dropdown relative my-2 border-[1px] border-gray-400/25 rounded-md h-[63px]'>
          <div className='text-[15px] font-medium leading-tight pt-2 mx-4 '>Select Move-In Date</div>
          <input type="date" name="Select" className='px-4 text-indigo-800'  />
    </div>
  )
}

export default Location
