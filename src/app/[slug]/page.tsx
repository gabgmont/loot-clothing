import AddProduct from '@/src/components/ProductPage/AddProduct'
import CustomizeProducts from '@/src/components/ProductPage/CustomizeProducts'
import ProductImages from '@/src/components/ProductPage/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='pt-20 px-8 relative flex flex-col lg:flex-row gap-16'>
      {/* Image */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>
      {/* Texts */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className=''>
          Lorem ipsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p> 
        <div className='h-[1px] bg-accent'/>
        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-neutral line-through'>R$59,90</h3>
          <h2 className='font-medium text-2xl'>R$49,90</h2>
        </div>
        <div className='h-[1px] bg-accent'/>
        <CustomizeProducts/>
        <AddProduct/>
        <div className='h-[1px] bg-accent'/>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
        <div className='text-sm'>
          <h4 className='font-medium mb-4'>Title</h4>
          <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePage