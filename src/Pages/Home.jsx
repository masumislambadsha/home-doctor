import React from "react";
import { Link } from "react-router";
import Product from "../components/Product";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  // const products = useLoaderData();
  const {products} = useProducts()

  const featuredProducts = products.slice(9,15)




  return (
    <div>
      <div style={{justifyContent:"space-between"}} className="flex justify-between mt-4">
        <h1 className="card-title text-2xl text-center">Featured Products </h1>
        <Link to='/products'><h1 className="btn btn-ghost">See All Products</h1></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-4 md:px-8 lg:px-12">
        {featuredProducts.map((product) => (
        <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Home;
