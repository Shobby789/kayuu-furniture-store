import React, { useEffect } from 'react'
import ProductsSection from '../components/Products/ProductsSection'

const Products = () => {
  useEffect(() => {
    document.title = 'Products - Furniture Store';
  }, []); 
  return (
    <div>
      <ProductsSection/>
    </div>
  )
}

export default Products
