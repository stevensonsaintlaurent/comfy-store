import React from "react";
import { FeaturedProducts, Hero } from "../component";
import axios from "axios";
import { custonFetch } from "./../utils/index";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await custonFetch(url);
  const products = response.data.data;

  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
