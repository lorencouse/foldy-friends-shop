import { Product, AddressInfo } from "../types";

export const emptyProduct: Product = {
  id: "",
  name: "",
  description: "",
  full_price: 0,
  sale_price: 0,
  images: [],
  variations: [],
  categories: [],
  tags: [],
  created_at: "",
  sold: 0,
  stock: 0,
  sku: "",
};

export const emptyAddress: AddressInfo = {
  name: "",
  address_1: "",
  address_2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  email: "",
  phone: "",
};

export const productVariations = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Pink",
  "Black",
  "White",
];
export const productCategories = ["paper", "tools", "kits"];
export const productTags = [
  "supplies",
  "scissors",
  "glue",
  "tape",
  "knives and blades",
  "animals",
  "masks",
  "models",
  "pens",
  "markers",
  "staples",
];
