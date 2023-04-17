import React from 'react'
import NavbarLeft from "./navbarItem/NavbarLeft"
import NavbarRight from "./navbarItem/NavbarRight"
export default function navbar() {
  return (
    <div className='flex justify-between items-center my-30 pt-5 '>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}
