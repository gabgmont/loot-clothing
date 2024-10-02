import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Cor</h4>
        <ul className='flex items-center gap-3'>
            <li className='w-10 h-10 rounded-full ring-2 ring-accent'>
                <div className='w-8 h-8 mt-1 ml-1 rounded-full ring-1 ring-neutral cursor-pointer relative bg-black'/>
            </li>
            <li className='w-10 h-10 rounded-full'>
                <div className='w-8 h-8 mt-1 ml-1 rounded-full ring-1 ring-neutral cursor-pointer relative bg-white'/>
            </li>
        </ul>
        <h4 className='font-medium'>Tamanho</h4>
        <ul className='flex items-center gap-3'>
            <li className='ring-1 ring-neutral rounded-md py-1 px-4 text-sm cursor-not-allowed'>P</li>
            <li className='ring-1 ring-accent rounded-md py-1 px-4 text-sm cursor-pointer'>M</li>
            <li className='ring-1 ring-accent rounded-md py-1 px-4 text-sm cursor-pointer'>G</li>
            <li className='ring-1 ring-accent bg-accent rounded-md py-1 px-4 text-sm cursor-pointer'>GG</li>
        </ul>
    </div>
  )
}

export default CustomizeProducts