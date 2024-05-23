import React from 'react'
import Menuitem from './Menuitem'
import {AiFillHome} from 'react-icons/ai' 
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Darkmode from './Darkmode'

export default function header() {
  return (
    <div className='head max-w-6xl mx-auto'>
    <div className='flex gap-4  '>
      <Menuitem title="HOME" address="/" Icon={AiFillHome}/>
      <Menuitem title="ABOUT" address="/about" Icon={ BsFillInfoCircleFill }/>
    </div>
    <div className='flex gap-2 items-center'>
                <div>
                    <Darkmode />
                </div>
                <a className="imdbicon" href="/">IMDb</a>
                <p className='font-semibold'>Clone</p>
            </div>
    </div>
  )
}
