'use client'

import Image from 'next/image'
import React from 'react'
import BagModalItem from './BagModalItem'

const BagModal = () => {

    const cartItems = true

    return (
        <div className='absolute p-4 rounded-md top-8 right-0 l-0 text-sm z-[4] bg-black'>
            {!cartItems ? (
                <div>Cart is empty</div>
            ) : (
                <>
                    <h2 className='text-xl pb-4'>Shopping Cart</h2>
                    <div className='flex flex-col gap-4'>
                        <BagModalItem></BagModalItem>
                        <BagModalItem></BagModalItem>
                    </div>
                    <div className='justify-between flex font-semibold pt-8'>
                        <span>Total: </span>
                        <span>$98</span>
                    </div>
                    <div className='text-secondary'>Shipping and taxes are calculated at checkout</div>
                    <div className='flex justify-between text-sm gap-4 pt-4'>
                        <button className='rounded-md py-3 px-4 ring-1 ring-white text-white w-full'>View Cart</button>
                        <button className='rounded-md py-3 px-4 bg-primary w-full'>Checkout</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default BagModal