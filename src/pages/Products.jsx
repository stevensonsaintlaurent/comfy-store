import { Filters, PaginationContainer, Productcontainer } from "../component";
import { custonFetch } from "../utils";
const url = "/products";
export const loader = async ({ request }) => {
  const response = await custonFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  console.log("loader from products", products, "and ", meta);
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <Productcontainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
