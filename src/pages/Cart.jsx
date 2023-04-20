import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AiFillDelete} from "react-icons/ai"
import { clearCart, getCartTotal, removeFromCart } from '../redux/cartSlice';

export default function Cart() {
  const dispatch = useDispatch();
  const { carts, itemCount, totalAmount } = useSelector(state => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  
  const checkout=()=>{
dispatch(clearCart())
  }
const removeProduct=()=>{
    dispatch(removeFromCart)
}

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {carts.length > 0 ? (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {carts.map(cart => (
                      <tr key={cart.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className=" w-10 rounded-full"
                                src={cart.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {cart.title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {cart.quantity}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {cart.price}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {cart.price * cart.quantity}
                          </div>
                        </td>
                        <div className='flex items-center mt-4 '>
                            <AiFillDelete onClick={()=>dispatch(removeFromCart(cart?.id))}
                            className='text-4xl cursor-pointer flex text-red-500'/>
                          </div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-900">
                  Your cart is empty.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8">
    <div className="md:w-1/3">
      <h3 className="text-lg font-medium">Cart Summary</h3>
    </div>
    <div className="md:w-2/3">
      <div className="flex justify-end items-center">
        <div className="w-1/2 md:w-1/4">
          <span className="text-gray-600">Total Items:</span>
        </div>
        <div className="w-1/2 md:w-3/4">
          <span className="text-gray-800">{itemCount}</span>
        </div>
      </div>
      <div className="flex justify-end items-center mt-2">
        <div className="w-1/2 md:w-1/4">
          <span className="text-gray-600">Total Price:</span>
        </div>
        <div className="w-1/2 md:w-3/4">
          <span className="text-gray-800">${totalAmount}</span>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={checkout} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  </div>
</div>
);
}