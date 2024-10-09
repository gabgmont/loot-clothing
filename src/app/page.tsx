//'use client'

import Carousel from "../components/Carousel/Carousel";
import ProductList from "../components/ProductList/ProductList";
import { CategoryList } from "../components/CategoryList/CategoryList";
import { Suspense, useContext, useEffect } from "react";
import { WixClientContext } from "../context/wixContext";
import { useWixClient } from "../hooks/useWixClient";
import { wixClientServer } from "../lib/wixClientServer";

const Home = async () => {

  // const wixClient = useWixClient()
  
  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res)
  //   }

  //   getProducts()
  // }, [wixClient])
  
  // const wixClient = await wixClientServer()
  // const res = await wixClient.products.queryProducts().find()
  // console.log(res)

  return (
    <main>
      <Carousel/>
      <div className='mt-16 px-8'>
        <h1 className='text-2xl font-bold'>Featured Products</h1>
        <Suspense fallback={'loading'}>
          <ProductList
            categoryId={process.env.FEATURED_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>          
      </div>
      <div className='mt-16'>
        <h1 className='text-2xl px-8 mb-8 font-bold'>Categories</h1>
        <CategoryList/>
      </div>
      <div className='mt-16 px-8'>
        <h1 className='text-2xl font-bold'>New Products</h1>
        {/* <ProductList/> */}
      </div>
    </main>
  );
}

export default Home