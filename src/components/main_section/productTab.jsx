import React from "react";
import { use } from "react";
import ProductCard from "./product_card/productCard";
import Cart from "./cart/cart";

const ProductTab = ({
  productPromise,
  cart,
  setCart,
  activeTab,
  setActiveTab,
}) => {
  const productList = use(productPromise);
  return (
    <div
      id="main-section"
      className="flex flex-col gap-8 bg-base-200 px-5 md:px-10 lg:px-52 py-15"
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Premium Digital Tools
        </h1>
        <p className="text-center text-base-content/70 max-w-xl mb-2">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setActiveTab("all")}
            className="rounded-l-full text-lg font-semibold px-6 py-2 cursor-pointer"
            style={{
              background:
                activeTab === "all" ? "var(--primary-gradient)" : "white",
              color: activeTab === "all" ? "white" : "black",
            }}
          >
            All Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className="rounded-r-full text-lg font-semibold px-6 py-2 flex gap-1 items-center cursor-pointer"
            style={{
              background:
                activeTab === "cart" ? "var(--primary-gradient)" : "white",
              color: activeTab === "cart" ? "white" : "black",
            }}
          >
            Cart
            <span
              className={`${activeTab === "cart" ? "badge badge-ghost" : "badge badge-primary"} rounded-full w-1 p-3 font-semibold text-xs`}
            >
              {cart.length}
            </span>
          </button>
        </div>
      </div>
      {activeTab === "all" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default ProductTab;
