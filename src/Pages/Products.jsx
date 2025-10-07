import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import Product from "../components/Product";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase()
  const seachedProduct = term ? products.filter(product =>
    product.name.toLocaleLowerCase().includes(term) || product.category.toLocaleLowerCase().includes(term))
    : products

  return (
    <div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between mt-4 md:p-0 px-2">
        <h1 className="card-title text-2xl text-center">
          All Products{" "}
          <span className="text-sm mt-2.5">
            ({seachedProduct.length}) products found
          </span>
        </h1>
        <label className="input">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search your desired product"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5 px-4 md:px-8 lg:px-12">
        {seachedProduct.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
