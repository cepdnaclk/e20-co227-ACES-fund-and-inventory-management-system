import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopConext'
import { assets } from '../assets/frontend_assets/assets'


const SearchBar = () => {

  const {search,setSearch} = useContext(ShopContext);

  return (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search'/>
            <img className='w-4'src = {assets.search_icon} alt=""/>
        </div>
    </div>
  )
}

export default SearchBar