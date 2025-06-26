"use server";

import { createClient } from "@/utils/supabase/client";
import { Product, UserData } from "@/types";
import { cookies } from "next/headers";

export const getProductById = async (id: string): Promise<Product | null> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();
  if (error || !data) return null;
  return data as Product;
};

export const getProductsFromCategory = async (
  category: string,
  limitCount: number = 10,
): Promise<Product[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .contains("categories", [category])
    .limit(limitCount);
  if (error || !data) return [];
  return data as Product[];
};

export const getProductsFromTag = async (
  tag: string,
  limitCount: number = 10,
): Promise<Product[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .contains("tags", [tag])
    .limit(limitCount);
  if (error || !data) return [];
  return data as Product[];
};

export const getAllProducts = async (): Promise<Product[]> => {
  const supabase = await createClient();

  const { data, error } = await supabase.from("products").select("*");
  if (error || !data) return [];

  return data as Product[];
};

// export const getUserProfile = async (
//   userId: string,
// ): Promise<UserData | null> => {
//   const supabase = await createClient();

//   const { data, error } = await supabase
//     .from("users")
//     .select("*")
//     .eq("id", userId)
//     .single();
//   if (error || !data) return null;
//   return data as UserData;
// };
