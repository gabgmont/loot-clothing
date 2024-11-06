import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryListItem = ({
  key,
  name,
  slug,
  image
}: {
  key: string,
  name: string,
  slug: string,
  image: string
}) => {
  return (
    <Link 
      key={key} 
      href={`/list?category=${slug}`}
      className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
        <div className='relative bg-neutral w-full h-96'>
            <Image 
                src={image} 
                alt=''
                fill
                sizes='20wv'
                className='object-cover'/>
        </div>
        <h1 className='mt-4 font-light text-cl '>{name}</h1>
    </Link>
  )
}

export default CategoryListItem