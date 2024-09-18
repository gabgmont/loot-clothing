import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryListItem = () => {
  return (
    <Link href='/list?category=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
        <div className='relative bg-neutral w-full h-96'>
            <Image 
                src='https://loot-assets.s3.us-east-2.amazonaws.com/Assets/Checkered_black.png' 
                alt=''
                fill
                sizes='20wv'
                className='object-cover'/>
        </div>
        <h1 className='mt-4 font-light text-cl '>Category Name</h1>
    </Link>
  )
}

export default CategoryListItem