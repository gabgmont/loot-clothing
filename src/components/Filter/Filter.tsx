import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between'>
        <div className='flex flex-wrap gap-6'>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-neutral'>
                <option>Type</option>
                <option value='shirt'>Camiseta</option>
                <option value='hoddie'>Moletom</option>
            </select>
            <input type='text' name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-accent'/>
            <input type='text' name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-accent'/>
            <select name="size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-neutral'>
                <option>Tamanho</option>
                <option value='p'>P</option>
                <option value='m'>M</option>
                <option value='g'>G</option>
                <option value='gg'>GG</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-neutral'>
                <option>Cor</option>
                <option value='black'>Preto</option>
                <option value='white'>Branco</option>
            </select>
        </div>
        <div>
        <select name="sort" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-neutral'>
                <option>Sort by</option>
                <option value='p'>P</option>
                <option value='m'>M</option>
                <option value='g'>G</option>
                <option value='gg'>GG</option>
            </select>
        </div>
    </div>
  )
}

export default Filter