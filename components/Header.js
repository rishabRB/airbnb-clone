import Image from 'next/image'
import React from 'react'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UserCircleIcon

} from "@heroicons/react/solid"

function Header() {
  return (
    <header className='shadow-md bg-white sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 '>
        {/* Left */}
        <div className='relative md:flex h-10 items-center my-auto cursor-pointer'>
            <Image
            src="https://links.papareact.com/qd3" 
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            />       
        </div>
        {/* Middle */}
        <div className='flex items-center border-2 rounded-full py-2' >
          <input type="text"
             className='pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
             placeholder="Start your search" 
             />

          <SearchIcon
          className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'
          />

        </div>
        {/* Right */}
        <div className='flex items-center space-x-4 justify-end text-gray-500'>
          <p className="hidden md:flex p-3 hover:bg-gray-50 hover:rounded-full cursor-pointer" >Become a host</p>
          <GlobeAltIcon className='h-6 cursor-pointer'/>

          <div className="flex items-center sapce-x-2 p-2 border-2 rounded-full">
            <MenuIcon className="h-6"/>
            <UserCircleIcon  className="h-6"/>
          </div>
        </div>
    </header>
  )
}

export default Header

