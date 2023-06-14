import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ProductDetailsPage.module.css'
import { useNavigate } from 'react-router-dom';

function ProductDetailsPage() {
    const location = useLocation();
    const product = location.state.product;
    const navigate = useNavigate();
    const goBack=()=>{
        navigate('/products');
    };
  return (
    <div className='main product-page'>
        <h1>{product.title}</h1>
        <div>
            <img src={product.images[0]} alt={product.title}/>
        </div>
        <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: EUR {product.price}</p>
      <button
        className={styles.backBtn}
        onClick={goBack}
      >
        Back
      </button>
      <button
        className="actionBtn"
        onClick={()=>alert(`${product.title} successfully added to the cart`)}>
        Buy now
      </button>
    </div>
  )
}

export default ProductDetailsPage