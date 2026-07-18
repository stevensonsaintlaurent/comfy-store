import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitBtn } from "../component";
import About from "./About";
import { custonFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await custonFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check you credentieals";
    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
        method="POST"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" label="username" name="username" />
        <FormInput type="email" label="email" name="email" />
        <FormInput type="password" label="password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>

        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
