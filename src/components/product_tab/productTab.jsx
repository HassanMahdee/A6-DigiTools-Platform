import React from "react";
import { use } from "react";
import ProductCard from "./product_card/productCard";

const ProductTab = ({ productPromise }) => {
  const productList = use(productPromise);
  return (
    <div className="flex flex-col gap-8 bg-base-200 px-5 md:px-10 lg:px-52 py-15">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center">Our Products</h1>
        <div className="flex justify-center">
          <button className="btn btn-primary rounded-l-full text-lg">All Products</button>
          <button className="btn btn-ghost rounded-r-full text-lg">
            Cart
            <span className="badge badge-primary rounded-full w-1 p-3 font-semibold text-xs">
              0
            </span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductTab;
