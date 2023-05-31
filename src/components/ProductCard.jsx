import React from 'react'

const ProductCard=({product})=> {
    console.log(product);
  return (
    <>
    <div>
        <div>
            <img src={product.images[0]} alt={product.title} />
        </div>
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category:{product.category}</p>
            <p>Brand:{product.brand}</p>
            <p>Price:{product.price}</p>
        </div>

            <button>Details..</button>
    </div>
    </>
  )
}

export default ProductCard