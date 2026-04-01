import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product, cart, setCart }) => {
  const inCart = cart.find((item) => item.id === product.id);
  return (
    <div className="card shadow-lg p-4 rounded-4xl flex flex-col gap-6 hover:scale-105 transition-all duration-200 hover:shadow-lg hover:bg-base-300">
      {product.tag && (
        <div
          className={`badge badge-${product.tagType} opacity-75 badge-sm absolute top-2 right-2 rounded-full p-3`}
        >
          <p className="text-sm font-medium">{product.tag}</p>
        </div>
      )}
      <figure className="self-start">
        <img src={product.icon} alt={product.name} className="w-10" />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="flex items-end w-fit py-2">
          <p className="text-2xl font-bold">${product.price}</p>
          <span className="text-sm text-base-content/80">
            /{product.period}
          </span>
        </div>
        <ul className="list-inside space-y-1">
          {product.features.map((feature, index) => (
            <li key={index}>
              <FaCheck className="inline mr-2 text-success" /> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="btn w-full rounded-full hover:scale-105 transition-all duration-200 hover:shadow-lg"
          style={{
            background: inCart ? "lightgreen" : "var(--primary-gradient)",
            color: inCart ? "black" : "white",
          }}
          onClick={() => {
            setCart([...cart, product]);
            toast.success("Product added to cart!");
          }}
        >
          {inCart ? (
            <>
              <FaRegCheckCircle className="inline mr-2" /> Added to Cart
              Successfully!
            </>
          ) : (
            "Buy Now"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
