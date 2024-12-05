import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>

      <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/users">
            <img className='w-5 h-5'
            src={assets.profile_icon} alt="" />
            <p className='hidden md:block'>Users</p>
        </NavLink>
        
        <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/add">
            <img className='w-5 h-5'
            src={assets.add_icon} alt="" />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/list">
            <img className='w-5 h-5'
            src={assets.order_icon} alt="" />
            <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/request">
            <img className='w-5 h-5'
            src={assets.inventory_icon} alt="" />
            <p className='hidden md:block'>Inventory Requests</p>
        </NavLink>

        <NavLink className='flex item-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to="/fundreq">
            <img className='w-5 h-5'
            src={assets.fund_icon} alt="" />
            <p className='hidden md:block'>Fund Requests</p>
        </NavLink>

      </div>
    </div>
  )
}

export default Sidebar
