import React from 'react'
import CategoryListItem from './CategoryListItem'

export const CategoryList = () => {
  return (
        <div className='flex px-8 overflow-x-scroll scrollbar-hide gap-4 md:gap-8'>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
            <CategoryListItem/>
        </div>
  )
}
