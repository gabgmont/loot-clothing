"use client";

import React, { useState } from "react";

const stock = 4

const AddProduct = () => {
  const [quantity, setQuantity] = useState(1);

const handleQuantity = (number: number) => {
    const newQty = quantity + number
    
    if (newQty > 1) {
        setQuantity(Math.min(newQty, stock))
        
    } else {
        setQuantity(Math.max(newQty, 1))
    }
}

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Quantidade</h4>
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-neutral py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity(-1)}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={() => handleQuantity(+1)}>+</button>
          </div>
          <div className="text-xs">
            <span className="text-accent">4 itens</span> restantes.
            <br /> Não perca!
          </div>
        </div>
        <button className="w-48 text-sm rounded-md ring-1 ring-accent text-white py-2 px-4 hover:bg-accent disabled:cursor-not-allowed disabled:ring-neutral">
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
