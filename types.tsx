import { Database } from './database.types'

export interface UserData {
  id: string;
  email: string | null;
  created_at: Date;
  shipping_info: AddressInfo;
  billing_info: AddressInfo;
  photo_url: string;
  order_history: CustomerOrder[];
  username: string;
}

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}
export interface AddressInfo {
  name: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
}

export type Product = Database['public']['Tables']['products']['Row'];

export interface TopSellersProps {
  category: string;
  products: Product[];
}
// export interface ProductVariation {
//   product_id: string;
//   variation?: string;
//   quantity: number;
// }
export interface ProductReview {
  id: string;
  created_at: Date;
  product_id: string;
  user_id: string;
  title: string;
  content: string;
  rating: number;
}

export interface CartItem {
  key: string;
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  quantity: number;
  variation?: string;
}

export interface CustomerOrder {
  id: string;
  created_at: Date;
  customer_id: string;
  shipping_info: AddressInfo;
  billing_info: AddressInfo;
  products: CartItem[];
}
