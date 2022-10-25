import Image from 'next/image'
import React from 'react'

function SmallCard({item}) {
  return (
    <div 
    className='flex space-x-4 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out items-center m-2 mt-5'
    >
        {/* left */}
        <div className='relative h-16 w-16'>
          <Image layout='fill'className='rounded-lg' src={item.img}/>
        </div>
        {/* right */}
        <div>
            <h2>{item.location}</h2>
            <h2 className='text-gray-500'>{item.distance}</h2>
        </div>
    </div>
  )
}

export default SmallCard