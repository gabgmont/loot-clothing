import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryListItem from './CategoryListItem'

export const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className='flex gap-4 md:gap-8'>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
        </div>
    </div>
  )
}
