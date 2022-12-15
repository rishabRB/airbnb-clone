import Image from 'next/image'
import React, { useState } from 'react'
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
  UserCircleIcon,
  UsersIcon

} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from 'react-date-range'
import { useRouter } from 'next/router';

function Header({placeholder}) {

  const [searchInput, setSearchInput ] = useState("")
  const [startDate , setStartDate] = useState(new Date())
  const [endDate, setEndDate ] = useState(new Date())
  const [noOfguest , setnoOfguest] = useState(0)
  const router = useRouter()

 // new learning for me
  const search=()=>{
    router.push({
      pathname:"/search",
      query:{
        location:searchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfguest:noOfguest
      }
    })

    setSearchInput("")
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const selectionRange = {
    startDate : startDate,
    endDate : endDate,
    key:'selection'
  }

  return (
    <header className='shadow-md bg-white sticky top-0 z-50 grid grid-cols-3 p-5 md:px-10 '>
        {/* Left */}
        <div 
        onClick={() => router.push("/")}
        className='relative md:flex h-10 items-center my-auto cursor-pointer'>
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
             value= {searchInput}
             onChange={(event) => setSearchInput(event.target.value)}
             className='pl-5 flex-grow bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
             placeholder={placeholder || "Start your search"}
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

        {searchInput && 
        <div className = 'flex flex-col col-span-3 mx-auto mt-01'>
          <DateRangePicker
          ranges={[selectionRange]}
          minDate = {new Date()}
          rangeColors={["#FD5861"]}
          onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className='h-5'/>
            <input 
            value={noOfguest}
            onChange={(e)=>setnoOfguest(e.target.value)}
            type="number"
            className='w-12 pl-2 text-lg outline-none text-red-400'/>
          </div>

          <div className="flex">
            <button  onClick={()=> setSeachInput("")} className='flex-grow text-gray-400'>Cancel</button>
            <button  onClick={search} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>

        }
    </header>
  )
}

export default Header


