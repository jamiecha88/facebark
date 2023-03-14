import React from 'react'
import logo from '../assets/logo.png'
import { BiWorld, BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">

        { /*Left */ }
        <div className="flex w-40">
          <img alt="" src={logo} className="flex my-5" />
        </div>

        {/*Middle*/ }
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-300 border rounded-full">
          <input
              type="search"
              placeholder=""
              className= "py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="flex justify-between absolute w-full pr-16 pl-6 color-[#f222] text-[14px]">
              <button className="w-full font-semibold">Place</button>
              <button className="border-l border-x px-6 font-semibold">Time</button>
              <button className="w-full text-gray-600/60 pl-2">Add guests</button>
          </div>

          <div className="bg-[#ff5a5f] p-2 rounded-full mr-2 ">
              <FiSearch className="text-white w-full "/>
          </div>
        </div>

        {/* Right*/ }
        <div className="flex items-center pr-3 font-semibold text-gray-650">

          <p className="text-[15px]">Rent a place</p>

          <div className="flex items-center mx-8 gap-1">
            <BiWorld className=""/>
            <div className="">EN</div>
          </div>

          <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a5f] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#ff7e83] duration-100 ease-out">
              <p>Sign In</p>
              <BiUser className="text-[20px]"/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
