import { Filters, PaginationContainer, Productcontainer } from "../component";
import { custonFetch } from "../utils";
const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await custonFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;

  return { products, meta, params };
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
