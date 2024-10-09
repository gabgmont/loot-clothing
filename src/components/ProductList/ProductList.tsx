import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductListItem from './ProductListItem'
import { wixClientServer } from '@/src/lib/wixClientServer'
import { products } from '@wix/stores'

const PRODUCT_PER_PAGE = 20

const ProductList = async ({ 
  categoryId, 
  limit, 
} : { 
  categoryId: string, 
  limit?: number, 
}) => {

  const wixClient = await wixClientServer()
  const res = await wixClient.products
    .queryProducts()
    .eq('collectionIds', categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find()

  console.log(res)

  return (
    <div className='mt-8 flex gap-x-4 gap-y-16 justify-between flex-wrap'>
      {res.items.map((product: products.Product) => (
        <ProductListItem
          key={product._id || ''}
          name={product.name || ''}
          slug={product.slug || ''}
          price={product.priceData?.formatted?.price || ''}
          description={product.additionalInfoSections?.find((section) => section.title === 'shortDesc')?.description || ''}
          mainImage={product.media?.mainMedia?.image?.url || ''}
          secondImage={(product.media?.items && product.media?.items[1]?.image?.url || '')}
        />
      ))}
    </div>
  )
}

export default ProductList