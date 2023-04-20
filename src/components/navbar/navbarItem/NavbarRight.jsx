import React, { useEffect } from 'react'
import {BiSearch} from "react-icons/bi"
import {AiOutlineHeart} from "react-icons/ai"
import {SlBasket} from "react-icons/sl"
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../../../redux/cartSlice'
import { NavLink, useNavigate } from 'react-router-dom'
export default function NavbarRight() {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const {carts}=useSelector(state=>state.carts)
  console.log(carts)
  useEffect(()=>{
      dispatch(getCartTotal())
  },[dispatch])
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input type="text" placeholder='Arama yapınız...' className='bg-gray-200 outline-none' />
        <BiSearch className='cursor-pointer' size={28} />
      </div>
      <AiOutlineHeart className='cursor-pointer' size={28}/>
      <div className='relative'>
        <div className='absolute flex justify-center items-center  -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5'>{carts.length}</div>
        <SlBasket onClick={()=>navigate("cart")}   className='cursor-pointer' size={28}/>
      </div>
    </div>
  )
}
