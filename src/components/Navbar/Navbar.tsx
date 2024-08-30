import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
    return (
        <div className='h-20 px-4 fixed w-full bg-base bg-opacity-40 z-[999]'>
            {/* MOBILE */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href='/'>
                    <div className='text-2xl tracking-wide font-bold'>Loot</div>
                </Link>
                <Menu/>
            </div>
            {/* BIGGER */}
            <div className='hidden md:flex items-center justify-between gap-8 h-full'>
                {/* LEFT */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href='/' className='flex items-center gap-4'>
                        <Image src='./images/logo.svg' alt='Loot Logo' width={16} height={16} className='cursor-pointer'></Image>
                        <div className='text-2xl tracking-wide font-bold'>Loot</div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link href='/'>Shop</Link>
                        <Link href='/'>Deals</Link>
                        <Link href='/'>About</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}

export default Navbar