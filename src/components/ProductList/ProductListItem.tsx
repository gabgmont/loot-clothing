import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListItem = ({
  key,
  name,
  slug,
  price,
  description,
  mainImage,
  secondImage,
}: {
  key: string;
  name: string;
  slug: string;
  price: string;
  description: string;
  mainImage: string;
  secondImage?: string;
}) => {
  return (
    <Link
      key={key}
      href={"/" + slug}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        <Image
          src={mainImage}
          alt=""
          fill
          className="absolute object-cover rounded-md z-[10] hover:opacity-0 transition-opacity easy duration-500"
        />
        {secondImage && (
          <Image
            src={secondImage}
            alt=""
            fill
            className="absolute object-cover rounded-md z-[1]"
          />
        )}
      </div>
      <div className="flex justify-between">
        <span className="w-3/5 font-medium">{name}</span>
        <span className="w-2/5 font-semibold">{price}</span>
      </div>
      <div className="text-sm text-neutral">{description}</div>
      <button className="rounded-2xl ring-1 ring-accent text-lama w-max py-2 px-4 text-xs hover:bg-accent">
        Add to cart
      </button>
    </Link>
  );
};

export default ProductListItem;
