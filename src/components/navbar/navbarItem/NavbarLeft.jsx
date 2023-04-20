import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavbarLeft() {
  return (
    <NavLink to={'/'} className='text-6xl cursor-pointer'>Shop</NavLink>
  )
}
