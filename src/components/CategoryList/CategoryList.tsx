import React from 'react'
import CategoryListItem from './CategoryListItem'
import { wixClientServer } from '@/src/lib/wixClientServer'

export const CategoryList = async () => {

  const wixClient = await wixClientServer()
  const categories = await wixClient.collections.queryCollections().find()

  return (
        <div className='flex px-8 overflow-x-scroll scrollbar-hide gap-4 md:gap-8'>
          {
             categories.items.filter((item) => item.visible || false).map((item) => 
              <CategoryListItem
                key={item._id || ''} 
                name={item.name || ''}
                slug={item.slug || ''}
                image={item.media?.mainMedia?.image?.url || ''}/>
             )
          }
        </div>
  )
}
