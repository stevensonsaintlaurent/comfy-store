import { Filters, PaginationContainer, Productcontainer } from "../component";
import { custonFetch } from "../utils";
const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "products",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],

    queryFn: () => custonFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params),
    );
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
