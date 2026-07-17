import React from "react";
import { formatPrice } from "../utils";
import { generateAmountOptions } from "./../utils/index";

const CartItem = ({ cartItem }) => {
  console.log("cartItem", cartItem);
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:w-32 object-cover"
      />

      {/* info */}
      <div className="sm:ml-16 sm:w-48">
        {/* title */}
        <h3 className="capitalize font-medium">{title}</h3>

        {/* company */}

        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* color */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color: <span className="badge badge-sm">{productColor}</span>
        </p>
      </div>
      <div className="sm:ml-24 ">
        {/* amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
            <select
              name="amount"
              id="amount "
              className="mt-2 select select-base select-bordered select-xs"
            >
              {generateAmountOptions(amount + 3)}
            </select>
          </label>
        </div>

        {/* remove */}
        <button className="mt-2 link link-primary link-hover text-sm ">
          {" "}
          remove
        </button>
      </div>
      <p className="font-medium sm:ml-auto ">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
