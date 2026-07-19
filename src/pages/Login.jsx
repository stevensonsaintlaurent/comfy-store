import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput } from "./../component";
import SubmitBtn from "../component/SubmitBtn";
import { toast } from "react-toastify";
import { custonFetch } from "../utils";
import { loginUser } from "../feature/user/userSlice";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await custonFetch.post("/auth/local", data);
      toast.success("Logged in  successfully");
      store.dispatch(loginUser(response.data));
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check you credentieals";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
