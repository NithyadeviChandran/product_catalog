import React,{useState,useEffect} from 'react'
import {ProductCard} from './ProductCard';
import styles from './ProductList.module.css'

const ProductList=()=> {
    const [products, setProducts] = useState([])
    const [selectedCategory, setselectedCategory] = useState([])
    const [currentPage, setcurrentPage] = useState(1)
    const [sortDirection, setSortDirection] =useState('asc')
    const [sortedProducts, setSortedProducts] = useState(products)

const categories=[...new Set(products.map((product)=> product.category))];
const limit=30;
const handleCategorySelect=(event)=>{
    setselectedCategory(event.target.value);}

const handleSort =() => {
  const direction = sortDirection === 'asc'  ? 'desc' : 'asc';
  setSortDirection(direction);
  const sorted = products.slice().sort((a,b) =>{
    if(direction === 'asc'){
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
  setSortedProducts(sorted)
}

async function fetchmoreproducts(limit,currentPage){
    try{
        setcurrentPage(currentPage+1);
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${currentPage*limit}`);
        const data = await response.json();
        setProducts([...products,...data.products])
        setSortedProducts([...sortedProducts,...data.products]);
    }
    catch (error){
        console.log('error fetching products',error)
    }
}

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=> response.json())
        .then((data)=>{
            setProducts(data.products);
            setSortedProducts(data.products);
            console.log(data.products)
        })
        .catch((error)=>{
            console.log('error fetching products', error)
        });
    },[] )
   
  return (
    <div className={styles.listWrapper}>
        <div className={styles.controlsWrapper}>
        <label htmlFor='category'>Filter by category:</label>
        <select
          id='category'
          className={styles.inputField}
          value={selectedCategory}
          onChange={handleCategorySelect}
        >
          <option value=''>All</option>
          { categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
           ))
          }
        </select>
        <label>
          <button onClick={handleSort} className={styles.sortBtn}>
          {sortDirection==='asc'? 'Low to High' : 'High to Low'}
          </button>
        </label>
      </div>
      <div className={styles.cardsWrapper}>
        {sortedProducts
        .filter((product)=>selectedCategory==''|| product.category===selectedCategory)
        .map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      <button className={styles.actionBtn} 
      onClick={()=>fetchmoreproducts(limit,currentPage)}
      disabled={currentPage>3}
      >
      Load more...</button>
    </div>
  );
}

export default ProductList