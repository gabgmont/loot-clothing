import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductListItem from './ProductListItem'

const ProductList = () => {
  return (
    <div className='mt-8 flex gap-x-4 gap-y-16 justify-between flex-wrap'>
        <ProductListItem/>
        <ProductListItem/>
        <ProductListItem/>
        <ProductListItem/>
    </div>
  )
}

export default ProductList