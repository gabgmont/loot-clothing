import Filter from '@/src/components/Filter/Filter'
import ProductList from '@/src/components/ProductList/ProductList'
import { wixClientServer } from '@/src/lib/wixClientServer'
import Image from 'next/image'
import React from 'react'

const ListPage = async ({ searchParams } : { searchParams: any }) => {

  const wixclient = await wixClientServer()
  const cat = await wixclient.collections.getCollectionBySlug(searchParams.category || 'all-products')

  console.log(searchParams)

  return (
    <div className='pt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/*CAMPAIGN*/}
      <div className='hidden bg-neutral pl-4 sm:flex justify-between h-64'>
        <div className='pl-4 w-2/3 flex flex-col justify-center gap-2'>
          <h1 className='text-xl font-semibold leading-[48px]'>Grab up to 50% off on Selected Products</h1>
          <button className='rounded-xl ring-1 ring-accent text-white hover:bg-accent hover:text-black w-max py-1 px-5'>Buy now</button>
        </div>
        <div className='relative w-1/3'>
          <Image
            src='/images/blockchain.png'
            alt=''
            fill
            className="object-cover" />
        </div>
      </div>
      {/* Filter */}
      <Filter/>
      {/* Products */}
      <ProductList 
        categoryId={cat.collection?._id || '00000000-000000-000000-000000000001'}
        searchParams={searchParams}/>
      {/* <ProductList/> */}
    </div>
  )
}

export default ListPage