import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice'

export default function Category() {
  const dispatch =useDispatch()
  const {categories}=useSelector(state => state.categories)


  console.log(categories,"categories")
  useEffect(() => {
      dispatch(getCategories())
  }, [dispatch])
  
  return (
    <div className='w-1/6 bg-gray-100 p-4'>
      <div className='border-b pb-1 text-xl px-2 font-bold'>
        KATEGORİ
      </div>
      {categories.map((category,i)=>(
        <div key={i} className='text-lg mt-1 cursor-pointer hover:bg-gray-200 p-2'>{category}</div>
      ))}
    </div>
  )
}
