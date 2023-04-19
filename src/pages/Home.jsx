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
      <Sorting  setSort={setSort}/>
      <div className='flex'>
        <Category setCategory={setCategory}/>
      <Products category={category} sort={sort}/>
      </div>
    </div>
  )
}
