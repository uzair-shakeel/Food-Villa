import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card min-w-40  bg-base-100 shadow-xl">
      <figure>
        <img src={item.image} alt="Shoes" className="h-[220px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.description}</p>
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">Rs. {item.price}</h2>
          <button
            className="btn bg-red hover:bg-redhover text-white
          "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
