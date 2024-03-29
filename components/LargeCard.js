import Image from 'next/image'
import React from 'react'

function LargeCard({img , title , description , buttonText}) {
  return (
    <div className='relative my-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image 
            className='rounded-2xl'
             objectFit='cover'
             src={img}
             layout="fill"
            />
        </div>
        <div className='absolute top-32 left-12'>
            <h2 className='text-4xl mb-3 w-64'>{title}</h2>
            <h3 className='text-xl'>{description}</h3>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5'>{buttonText}</button>
        </div>
    </div>
  )
}

export default LargeCard