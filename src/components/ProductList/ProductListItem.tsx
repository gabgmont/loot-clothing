import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductListItem = () => {
  return (
    <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
            <Image 
                src='https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_back_black.png' 
                alt='' 
                fill
                className='absolute object-cover rounded-md z-[10] hover:opacity-0 transition-opacity easy duration-500'/>
            <Image 
                src='https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_front_black.png' 
                alt='' 
                fill
                className='absolute object-cover rounded-md z-[1]'/>
        </div>
        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>R$ 49,99</span>
        </div>
        <div className='text-sm text-neutral'>Description</div>
        <button className='rounded-2xl ring-1 ring-accent text-lama w-max py-2 px-4 text-xs hover:bg-accent hover:text-black'>Add to cart</button>
    </Link>
  )
}

export default ProductListItem