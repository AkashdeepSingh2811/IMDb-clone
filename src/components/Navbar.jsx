'use client'
import React from 'react'
import Navbaritem from './Navbaritem'

const Navbar = () => {
    
  return (
    <div className='navbar dark:bg-gray-600 bg-amber-100'>
        <Navbaritem title="Trending" param="fetchTrending"/>
        <Navbaritem title="Top Rated" param="fetchTopRated"/>
    </div>
      
  )
}

export default Navbar
