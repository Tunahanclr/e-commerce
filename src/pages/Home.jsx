import React, { useState } from 'react'
import SliderComp from '../components/Home/SliderComp'
import Category from "../components/Home/Category"
import Products from "../components/Home/Product"
import Sorting from "../components/Home/Sorting"
export default function Home() {
  const [sort,setSort]=useState('')
  const [category,setCategory]=useState()
  return (
    <div>
      <SliderComp/>
      <Sorting/>
      <div className='flex'>
        <Category/>
      <Products/>
      </div>
    </div>
  )
}
