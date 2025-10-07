import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductsDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();

  const product = products.find((p) => p.id === parseInt(id));

  if (loading) return <p>Loading...</p>;
  const {
    name,
    image,
    price,
    category,
    description,
    material,
    dimensions,
    stock,
  } = product;

  const handleAddToWishlist = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === product.id);
      if (isDuplicate) {
        alert("already exists");
        return;
      }
      updatedList = [...existingList, product];
    } else {
      updatedList.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    console.log(updatedList);
  };
  return (
    <div className="card md:p-0 px-2 h-[600px] bg-base-100 mt-19 shadow-2xl hover:bg-gray-300">
      <figure className="mx-auto">
        <img className="h-[570px]" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="font-medium text-md">{description}</p>
        <p className="font-medium text-[15px]">
          Material used to make it :
          <span className="font-bold"> {material}</span>
        </p>
        <p className="font-medium text-[15px]">
          Dimensions :<span className="font-bold"> {dimensions}</span>
        </p>

        {stock ? (
          <p className="font-bold text-md">In Stock</p>
        ) : (
          <p className="font-bold text-md">Out Of Stock</p>
        )}

        <p className="font-bold text-[18px]">Price : ${price}</p>
        <p className="font-medium text-md">{category}</p>
        <div className="card-actions justify-end">
          <button onClick={handleAddToWishlist} className="btn btn-outline">
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
