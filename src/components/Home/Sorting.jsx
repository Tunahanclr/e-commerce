import React from 'react'

export default function Sorting() {
  return (
    <div className='flex bg-gray-100 my-5 p-5 items-center justify-end'>
      <select className='bg-white py-3 px-5' name="" id="">
      <option value="inc" disabled>Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  )
}
