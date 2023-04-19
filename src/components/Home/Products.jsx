import React from 'react';
export default function ProductCard({ product }) {
  return (
    <div className='border rounded-lg flex flex-col items-center overflow-hidden flex-1'>
      <img className='h-[300px] object-contain' src={product.image} alt={product.title} />
      <div className='p-4 flex-1 flex flex-col justify-between'>
        <div>
          <h3 className='text-lg font-medium text-gray-900'>{product.title}</h3>
          <p className='text-sm text-gray-600 mt-2'>{product.category}</p>
        </div>
        <div className='flex justify-between items-center mt-4'>
          <span className='text-xl font-semibold text-gray-900'>{product.price} TL</span>
          <button className='bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-blue-200 text-white transition ease-in-out duration-150 rounded-lg px-4 py-2 shadow-md'>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
