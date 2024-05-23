import Link from 'next/link'
import React from 'react'

export default function Menuitem({title,address,Icon}) {
  return (
        <Link href={address} className='hover:text-amber-500' >
            <div>
                <Icon className="sm:hidden icon" /> 
            <p className='hidden sm:inline'>{title}</p>
            </div>
           
        </Link>
      

  )
}
