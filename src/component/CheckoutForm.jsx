import React from "react";
import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { custonFetch, formatPrice } from "../utils";
import { clearCart } from "../feature/cart/cartSlice";
import { toast } from "react-toastify";
export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };

    try {
      const response = await custonFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      );

      store.dispatch(clearCart());
      toast.success("Order placed successfully");
      return redirect("/orders");

      console.log("return responce", response);

      return null;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was am error placing your order";
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect("/login");
      return null;
    }
  };
const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label="first name " name="name" type="text" />
      <FormInput label="address " name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};

export default CheckoutForm;
