import React from "react";
import useProducts from "../Hooks/useProducts";
import Product from "../components/Product";

const Products = () => {

  const {products} = useProducts()


  return (

   <div>
    <div className="flex justify-end mt-4">
        <button className="btn btn-ghost text-right">search</button>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-4 md:px-8 lg:px-12">
       {products.map((product) => (
        <Product key={product.id} product={product}></Product>
        ))}
    </div>
   </div>
  );
};

export default Products;
