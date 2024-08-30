import ProductCard from "../components/ProductCard/ProductCard";
import Carousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <div className='pl-8 pt-4 pr-8'>
        <ul className='grid grid-cols-4 gap-4'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </ul>
      </div>
    </main>
  );
}
