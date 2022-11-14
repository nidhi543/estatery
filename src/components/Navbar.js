import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex justify-between align-middle shadow-sm shadow-indigo-300/50'>

    {/* logo */}
    <div className='flex align-middle my-5'> 
    <FontAwesomeIcon icon={faHouse} className = 'text-indigo-500 px-2 py-2 text-xl'/>
   <Link to = '/'> <h1 className='pr-1 text-2xl'> Estatery </h1>
</Link>
    {/* navigations */}
    
    <ul className='flex mx-5 '>
     <li className='mx-3 px-4 py-2'><NavLink to = '/rent'>Rent</NavLink></li>
     <li className='mx-3 px-4 py-2'><NavLink to = '/buy'>Buy</NavLink></li>
     <li className='mx-3 px-4 py-2'><NavLink to = '/sell'>Sell</NavLink></li>

    <li className='mx-3 px-4 py-2'>
    <select name="Manage Property" id="manage" className='border-none bg-slate-50'>
     <option value="">Manage Property</option>
      <option value="abc">abc</option>
      <option value="xyz">xyz</option>
    </select>
    </li>

    <li className='mx-3 px-4 py-2'>
    <select name="Resources" id="resources" className='border-none bg-slate-50'>
     <option value="">Resources</option>
      <option value="abc">abc</option>
      <option value="xyz">xyz</option>
    </select>
    </li>
    </ul>
    </div>

   {/* Login */}
   <div className='my-5'>
    <button className='mx-4 px-4 py-2 border-2 border-indigo-500/100 rounded-md text-indigo-500' >Login</button>
    <button className='ml-2 px-4 py-2 mr-8 bg-indigo-500 text-white rounded-md'>Signup</button>
   </div>
    
    </nav>
  )
}

export default Navbar