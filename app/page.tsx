import React from "react";
import Home from "./Home";
import { getAllProducts } from "@/lib/actions";
import { sortProducts, filterProductTag } from "@/tools/ProductFilterFunctions";
import { Product } from "types";

const HomePage = async () => {
  const allProducts: Product[] = await getAllProducts();
  const newProducts: Product[] = sortProducts(allProducts, "newest").slice(
    0,
    8,
  );
  const modelProducts: Product[] = filterProductTag(
    allProducts,
    "models",
  ).slice(0, 4);

  return <Home newProducts={newProducts} modelProducts={modelProducts} />;
};

export default HomePage;