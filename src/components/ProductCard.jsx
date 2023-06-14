import React from 'react'
import styles from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom'

export const ProductCard=({product})=> {
  const navigate = useNavigate();
  const openProductPage =()=> {
    navigate(`/products/${product.id}`, {state:{product}})
  }
  return (
    <>
    <div className={styles.cardWrapper}>
        <div className={styles.imageWrapper}
             style={{backgroundImage: `url(${product.images[0]})`}}>
        </div>
        <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category:{product.category}</p>
            <p>Brand:{product.brand}</p>
            <p>Price:{product.price}</p>
        </div>

            <button className={`${styles.detailBtn} actionBtn`} onClick={openProductPage}>Details..</button>
    </div>
    </>
  )
}

export default ProductCard