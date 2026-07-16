import React from "react";
import { CartItemsList, CartTotals, SectionTitle } from "../component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";

const Cart = () => {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>

        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />

          {user ? (
            <Link
              to="/checkOut"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              proceed checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 uppercase"
            >
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
