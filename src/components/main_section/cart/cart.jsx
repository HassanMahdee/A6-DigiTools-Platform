import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, setActiveTab }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const checkOut = () => {
    toast.success("Order placed successfully!");
    setCart([]);
    setActiveTab("all");
  };
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
      {cart.length > 0 && (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between gap-3 items-center p-4 "
            >
              <img src={item.icon} alt="" />
              <div className="flex flex-col w-full">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="font-light">
                  <strong>$</strong>
                  {item.price}
                </p>
              </div>
              <button
                onClick={() => {
                  setCart(cart.filter((product) => product.id !== item.id));
                  toast.error("Product removed from cart!");
                }}
                className="btn btn-error btn-sm text-lg"
              >
                <MdOutlineDeleteForever />
              </button>
            </div>
          ))}
          <div className="flex flex-col gap-4 px-6">
            <div className="flex justify-between items-center">
              <p className="text-sm font-light">Total</p>
              <p className="text-lg font-semibold">${total}</p>
            </div>
            <button
              className="btn w-full rounded-full text-white py-6 text-lg font-semibold"
              style={{ background: "var(--primary-gradient)" }}
              onClick={checkOut}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <p className="text-2xl text-gray-500 text-center">
          Your cart is empty!
        </p>
      )}
    </div>
  );
};

export default Cart;
