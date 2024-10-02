'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
        id: 1,
        url: 'https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_back_black.png'
    },
    {
        id: 2,
        url: 'https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_front_black.png'
    },
    {
        id: 3,
        url: 'https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_back_black.png'
    },
    {
        id: 4,
        url: 'https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_front_black.png'
    },
]

const ProductImages = () => {

  const [index, setIndex] = useState(0);
    
  return (
    <div>
        <div className='h-[500px] relative'>
            <Image src={images[index].url} 
            alt='' 
            fill 
            sizes='50vw' 
            className='object-cover rounded-md'/>
        </div>
        <div className='flex justify-between gap-4'>
            {images.map((img, i) => (
                <div key={img.id} className='w-1/4 h-32 relative gap-4 mt-8' onClick={() => setIndex(i)}>
                    <Image src={img.url} 
                    alt='' 
                    fill 
                    sizes='30vw' 
                    className='object-cover rounded-md'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ProductImages