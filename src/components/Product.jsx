import React from 'react';

const Product = ({product}) => {
  const {name,image,price,category,description} = product
  return (
    <div className="card lg:w-[400px] lg:h-[600px] h-[600px] bg-base-100 border shadow-sm hover:scale-110 transition duration-500  overflow-hidden hover:z-10">
  <figure>
    <img
    className='h-[570px]'
      src={image} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <p>Price : ${price}</p>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Product;
