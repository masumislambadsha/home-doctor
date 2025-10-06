import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { name, image, price, category, description, id } = product;
  return (
    <div className="card lg:w-[400px] lg:h-[600px] h-[600px] bg-base-100  shadow-2xl hover:scale-102 transition duration-500  overflow-hidden hover:bg-gray-300 hover:z-10">
      <figure className="mx-auto">
        <img className="h-[570px]" src={image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-medium text-md">{description}</p>
        <p className="font-bold text-[18px]">Price : ${price}</p>
        <p className="font-medium text-md">{category}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${id}`}>
            <button className="btn btn-outline">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
