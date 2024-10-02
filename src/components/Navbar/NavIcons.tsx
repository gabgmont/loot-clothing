'use client'

import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import BagModal from './BagModal';

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isBagOpen, setIsBagOpen] = useState(false);

    const router = useRouter()

    const isLoggedIn = true

    const handleProfileOpen = () => {
        if (!isLoggedIn) {
            router.push('/login')
            return
        }

        setIsProfileOpen(!isProfileOpen);
    }

    const handleBagOpen = () => {
        setIsBagOpen(!isBagOpen);
    }

    return (
        <div className='flex items-center gap-4 relative'>
            <div className='relative cursor-pointer'>
                <Image
                    src='./icons/bag.svg'
                    alt='Bag'
                    width={24}
                    height={24}
                    onClick={handleBagOpen} />
                <div className='absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full text-white text-xs flex items-center justify-center'>1</div>
            </div>{
                isBagOpen && (
                    <BagModal/>
                )
            }
            <Image
                src='./icons/profile.svg'
                alt='Profile' width={24} height={24}
                className='cursor-pointer'
                onClick={handleProfileOpen} /> {
                isProfileOpen && (
                    <div className='absolute p-4 rounded-md top-8 right-0 l-0 text-sm z-[2] bg-black'>
                        <Link href='/'>Profile</Link>
                        <div className='mt-2 cursor-pointer'>Logout</div>
                    </div>
                )
            }
        </div>
    )
}

export default NavIcons