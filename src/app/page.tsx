import ProductCard from "../components/ProductCard/ProductCard";
import Carousel from "../components/Carousel/Carousel";
import ProductList from "../components/ProductList/ProductList";
import { CategoryList } from "../components/CategoryList/CategoryList";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <div className='mt-16 px-8'>
        <h1 className='text-2xl font-bold'>Featured Products</h1>
        <ProductList/>
      </div>
      <div className='mt-16'>
        <h1 className='text-2xl px-8 mb-8 font-bold'>Categories</h1>
        <CategoryList/>
      </div>
      <div className='mt-16 px-8'>
        <h1 className='text-2xl font-bold'>New Products</h1>
        <ProductList/>
      </div>
    </main>
  );
}
