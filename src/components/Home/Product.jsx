import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/productSlice'

export default function Product() {
  const dispatch=useDispatch()
  const {products,productsStatuts}=useSelector(state =>state.products)
  useEffect(() => {
      dispatch(getProducts())
  }, [dispatch])
  console.log(products)
  return (
    <div>Product</div>
  )
}
