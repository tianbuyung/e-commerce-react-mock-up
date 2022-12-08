import React from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const productList = useSelector((state) => state.product.productList);
  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
