import { Product } from "../types";

// Shuffles products array and returns a specified number of products
export const shuffleProducts = (array: Product[], number: number) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.slice(0, number);
};

// Filters products by category
export function filterProductCategory(products: Product[], category: string) {
  return products.filter(
    (p) => Array.isArray(p.categories) && p.categories.includes(category),
  );
}

// Filters products by tag
export function filterProductTag(products: Product[], tag: string) {
  return products.filter((p) => Array.isArray(p.tags) && p.tags.includes(tag));
}

// Filters products by price range
export function filterProductPrice(
  products: Product[],
  min: number,
  max: number,
) {
  return products.filter((p) => {
    const price = p.sale_price ?? p.full_price ?? 0;
    return price >= min && price <= max;
  });
}

export function sortProducts(products: Product[], sort: string): Product[] {
  const sortedProducts = [...products];

  const getValidDate = (date: any) => {
    const parsedDate = new Date(date);
    return isNaN(parsedDate.getTime()) ? null : parsedDate;
  };

  switch (sort) {
    case "lowest":
      return sortedProducts.sort(
        (p1, p2) =>
          (p1.sale_price ?? p1.full_price ?? 0) -
          (p2.sale_price ?? p2.full_price ?? 0),
      );
    case "highest":
      return sortedProducts.sort(
        (p1, p2) =>
          (p2.sale_price ?? p2.full_price ?? 0) -
          (p1.sale_price ?? p1.full_price ?? 0),
      );
    case "newest":
      return sortedProducts.sort(
        (p1, p2) =>
          (getValidDate(p2.created_at)?.getTime() ?? 0) -
          (getValidDate(p1.created_at)?.getTime() ?? 0),
      );
    case "oldest":
      return sortedProducts.sort(
        (p1, p2) =>
          (getValidDate(p1.created_at)?.getTime() ?? 0) -
          (getValidDate(p2.created_at)?.getTime() ?? 0),
      );
    default:
      return products;
  }
}
