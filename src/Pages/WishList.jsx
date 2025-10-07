import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [sortOrder, setSortOrder] = useState('none')
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  const sortedItems = (
    () =>{
    if(sortOrder ==='pricing-asc'){
      return [...wishlist.sort((a,b) => a.price - b.price)]
    }
    else if(sortOrder ==="pricing-dsc"){
      return [...wishlist.sort((a,b) => b.price - a.price)]
    }
    else{
      return wishlist
    }
  }
  )()

  const handleRemove = () => {
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
    <div className="w-full space-y-6 mt-19">
      <div
        className="flex justify-between py-5 items-center"
        style={{
          justifyContent: "space-between",
        }}
      >
        <h1 className="text-3xl font-semibold">
          Wishlist{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) product found
          </span>
        </h1>
        <label className="form-control w-49 max-w-2xl">
          <select className=" select select-bordered" value={sortOrder} onChange={(e)=>setSortOrder(e.target.value)}>
                <option value="none">Sort By Price</option>
                <option onclc value="pricing-asc">Low-&gt;High</option>
                <option value="pricing-dsc">High-&gt;low</option>
              </select>
        </label>
      </div>
      <div className="space-y-6">
        {sortedItems.map((product) => (
          <div
            key={product.id}
            className="card card-side bg-base-100 shadow border"
          >
            <figure>
              <img
                className="w-40 h-34 object-cover"
                src={product.image}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title font-bold">{product.name}</h3>
              <p className="text-base-content/70 font-semibold">{product.category} </p>
            </div>
            <div className="pr-4 flex items-center gap-4">
              <p className="font-bold">
                ${product.price}

              </p>
              <button className="btn btn-outline">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
