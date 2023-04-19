import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getCategoryProducts, getProducts } from '../../redux/productSlice'
import ReactPaginate from 'react-paginate';
import Loading from '../Loading'
import Products from './Products'
import { useState } from 'react';

export default function Product({category,sort}) {
  
  const dispatch=useDispatch()
  const {products, productsStatus}=useSelector(state =>state.products)
  console.log(sort)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  useEffect(() => {
    if(category){
      dispatch(getCategoryProducts(category))
    }
  }, [dispatch,category])

  const itemsPerPage=6
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };  return (
    <div className='flex flex-wrap justify-center'>
      {productsStatus === 'loading' ? (
        <Loading />
      ) : (
        <>
          {currentItems?.sort((a,b)=>sort=="inc"? a.price-b.price : sort =="dec"? b.price-a.price :null).map((product, i) => (
            <div key={i} className='w-full md:w-1/2 lg:w-1/3 p-4'>
              <Products product={product} />
            </div>
          ))}
        </>
      )}
      <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}