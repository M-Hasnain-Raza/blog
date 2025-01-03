"use strict";


import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { PiBellThin } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav
      className="navbar  w-full
      sm:w-[90%]
      md:w-[80%]
      lg:w-[70%]
      xl:w-[100%]
      2xl:w-[50%]
      min-w-[400px]
      max-w-[1440px]
      mx-auto
      px-2 sm:px-6 lg:px-8
      py-3
      flex
      justify-between
      border-b-[1px]
        border-gray-200
       "
    >
      <div className="  flex  gap-4"   >
        <h1 className=" text-[24px] font-extrabold text-black ">Thought</h1>

        <div>
          <input
            type="search"
            name=""
            className=" absolute rounded-full p-2 pl-12 bg-gray-100 focus:outline-none "
            placeholder="Search"
          />
          <button>
          <CiSearch className=" relative top-2 left-3 text-2xl text-gray-600 " />

          </button>
        </div>
      </div>
        <div className="flex items-center gap-7">
            
            <button className="  text-gray-600 inline-flex items-center gap-3">
           <CiEdit className=" text-[25px] " />
            Write
            </button> 
            <button className="  text-gray-600 ">
           <PiBellThin className=" text-[25px] " />
            </button> 
            <button className=" size-[35px] rounded-full border-[1px]
        border-gray-500 "></button>


            </div>
    </nav>
  );
}
