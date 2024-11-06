import AddProduct from '@/src/components/ProductPage/AddProduct'
import CustomizeProducts from '@/src/components/ProductPage/CustomizeProducts'
import ProductImages from '@/src/components/ProductPage/ProductImages'
import { wixClientServer } from '@/src/lib/wixClientServer'
import DOMPurify from 'isomorphic-dompurify'
import { notFound } from 'next/navigation'
import React from 'react'

const SinglePage = async ({ params } : { params: { slug: string } }) => {

  const wixClient = await wixClientServer()
  const products = await wixClient.products
    .queryProducts()
    .eq('slug', params.slug)
    .find()

  if (!products.items[0]) {
    return notFound()
  }

  const product = products.items[0]

  return (
    <div className='pt-20 px-8 relative flex flex-col lg:flex-row gap-16'>
      {/* Image */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages items={product.media?.items}/>
      </div>
      {/* Texts */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <div className='' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(product.description || '')}}/>
        <div className='h-[1px] bg-accent'/>
        {
          product.priceData?.price === product.priceData?.formatted?.discountedPrice ? (
            <h2 className='font-medium text-2xl'>{product.priceData?.formatted?.price}</h2>

          ) : (
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-neutral line-through'>{product.priceData?.formatted?.price}</h3>
            <h2 className='font-medium text-2xl'>{product.priceData?.formatted?.discountedPrice}</h2>
          </div>
          )
        }
        <div className='h-[1px] bg-accent'/>
        <CustomizeProducts/>
        <AddProduct/>
        <div className='h-[1px] bg-accent'/>
        {
          product.additionalInfoSections?.map((section: any) => (
          <div key={section.title} className='text-sm'>
            <h4 className='font-medium mb-4'>{section.title}</h4>
            <div className='' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(section.description || '')}}/>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default SinglePage