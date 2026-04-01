import React from "react";
import { FaCheck } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  return (
    <div className="card shadow-lg p-4 rounded-4xl flex flex-col gap-6 hover:scale-105 transition-all duration-200 hover:shadow-lg hover:bg-base-300">
      {product.tag && (
        <div
          className={`badge badge-${product.tagType} badge-sm absolute top-2 right-2`}
        >
          {product.tag}
        </div>
      )}
      <figure className="self-start">
        <img src={product.icon} alt={product.name} className="w-10" />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <ul className="list-inside space-y-1">
          {product.features.map((feature, index) => (
            <li key={index}>
              <FaCheck className="inline mr-2 text-success" /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button className="btn btn-primary w-full rounded-full hover:scale-105 transition-all duration-200 hover:shadow-lg">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
