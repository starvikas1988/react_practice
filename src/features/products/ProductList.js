// src/features/products/ProductList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);
  const status = useSelector(state => state.products.status);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts(1)); // Fetch the first page of products
    }
  }, [status, dispatch]);

  console.log(products)

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = <>
                <ul>
                    {products.map(product => (
                        <>
                       Name: <li key={product.id}>{product.name}</li>
                        <br></br>
                        Year: <li>{product.year}</li>
                        <br></br>
                        Color:<li>{product.color}</li>
                        <br></br>
                        Pantone value:<li>{product.pantone_value}</li>
                        <br></br>
                        </>
                    
                    ))}
                </ul>
                
              </>
      
    
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Products</h2>
      {content}
    </section>
  );
};

export default ProductList;
