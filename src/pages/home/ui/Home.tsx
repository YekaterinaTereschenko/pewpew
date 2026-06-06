import { useState } from "react";
import { useProducts } from "../../../entities/product/hooks/useProducts";
import ProductsList from "../../../widgets/products-list/ui/ProductsList";
import Loader from "../../../shared/ui/Loader";
import Error from "../../../shared/ui/Error";
import Search from "../../../features/search/ui/Search";
import Sort from "../../../features/sort/ui/Sort";
import type { SortValue } from "../../../features/sort/model/sort-type";

export default function Home() {
  const { data, isPending, isError } = useProducts();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortValue>("default");

  if (isPending) return <Loader />;
  if (isError) return <Error />;

  const processedProducts = (data ?? [])
    .filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice() // чтобы не мутировать оригинал
    .sort((a, b) => {
      switch (sort) {
        case "name":
          return a.title.localeCompare(b.title);

        case "lowerPrice":
          return a.price - b.price;

        case "higherPrice":
          return b.price - a.price;

        default:
          return 0;
      }
    });

  return (
    <>
      <div className="flex flex-row gap-3 justify-center bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-5">
        <Search value={search} onChange={setSearch} />
        <Sort value={sort} onChange={setSort} />
      </div>

      <ProductsList products={processedProducts} />
    </>
  );
}