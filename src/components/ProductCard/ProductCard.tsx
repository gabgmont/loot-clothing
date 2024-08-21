import React from 'react'

const ProductCard = () => {
  return (
    <div className="card card-compact">
      <figure>
        <img
          src="https://loot-assets.s3.us-east-2.amazonaws.com/mockups/blocks/mockup_back_black.png"
          alt="Camiseta Loot Blocks" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Camiseta Regular - Loot</h2>
        <p>R$ 179,00</p>
        <div className="card-actions justify-center">
          <button className="btn btn-block btn-neutral btn-md">Comprar</button>
          <button className="btn btn-block btn-outline btn-md">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard