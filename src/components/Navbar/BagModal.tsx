'use client'

import Image from 'next/image'
import React from 'react'

const BagModal = () => {

    const cartItems = true

    return (
        <div className='absolute p-4 rounded-md top-8 right-0 l-0 text-sm z-[2] bg-black'>
            {!cartItems ? (
                <div>Cart is empty</div>
            ) : (
                <div className='flex flex-col gap-8'>
                    <div className='flex w-max gap-4'>
                        <Image 
                        src='https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_back_black.png' 
                        alt='' 
                        width={96} 
                        height={96} 
                        className='object-cover rounded-md'></Image>
                        <div className='flex flex-col justify-between w-full'>
                            {/* TOP */}
                            <div className=''>
                                {/* TITLE */}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className='font-semibold'>Product Name</h3>
                                    <div className=''>$49</div>
                                </div>
                                {/* DESC */}
                                <div className='text-sm pl-1 pr-1 w-max bg-accent rounded-sm text-black'>
                                    available
                                </div>
                            </div>
                            {/* BOTTOM */}
                            <div className='flex justify-between text-sm'>
                                <span className=''>Qty 1</span>
                                <span className='text-red-500'>Remove</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BagModal