import React from "react";
import { getProductById } from "../server/products.actions";
import { string } from "zod";
import Productinfo from "../components/PeoductDetails/Productinfo";

export default async function ProudectDetailsScreen({
  productId,
}: {
  productId: string;
}) {
  try {
    const response = await getProductById({ id: productId });
    const productData = response?.data || response?.data;

    return (
      <>
        <Productinfo product={productData} />
      </>
    );
  } catch (error) {
    return (
      <div className="text-center py-12 text-red-500">
        Failed to load product details. Please try again.
      </div>
    );
  }
}
