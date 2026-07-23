import React from "react";
import { FeaturedProducts, Hero } from "../component";
import axios from "axios";
import { custonFetch } from "./../utils/index";

const url = "/products?featured=true";

const featuedProductsQuery = {
  queryKey: ["featuredProducts"],
  queryKey: () => custonFetch(url),
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuedProductsQuery);
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
