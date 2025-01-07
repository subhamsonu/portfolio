import React from 'react'

function Navbar() {
  return (
    
    <nav className='flex justify-between px-8 py-4 bg-gray-900 text-white'>
        <a href='#'className='text-xl font-bold'>
            LOGO
        </a>
        <ul className='flex space-x-4 font-mono'>

            <li>
                <span className="text-green-200 font-semibold">01.</span>
                <a href='#' className='hover:text-blue-500 mr-0.5'> About</a>       
            </li>

            <li>
                <span className="text-green-200 font-semibold">02.</span>
                <a href='#' className='hover:text-blue-500 mr-0.5'> Experience</a>       
            </li>

            <li>
                <span className="text-green-200 font-semibold">03.</span>
                <a href='#' className='hover:text-blue-500 mr-0.5'> Work</a>       
            </li>

            <li>
                <span className="text-green-200 font-semibold">04.</span>
                <a href='#' className='hover:text-blue-500 mr-0.5'> Contact</a>       
            </li>
            <li>
                
            </li>

        </ul>
    </nav>

  )
}

export default Navbar;