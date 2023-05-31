import React,{useState,useEffect} from 'react'

const ProductList=()=> {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=> response.json)
        .then((data)=>{
            setProducts(data.products);
            console.log(data.products)
        })
        .catch((error)=>{
            console.log('error fetching products', error)
        });
    },
   [] )
  return (
    <div>ProductList</div>
  );
}

export default ProductList