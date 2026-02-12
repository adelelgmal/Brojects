"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  faStar,
  faShoppingCart,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Product } from "../types/Products.types";
import { addProductCart, getLoggedUserCart } from "@/features/cart/server/cart.actions";
import { toast } from "react-toastify";
import { setCartInfo } from "@/features/cart/store/cart.slice";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/features/auth/store/store";

export default function ProductCard({ info }: { info: Product }) {
  const {
    _id,
    imageCover,
    category,
    title,
    price,
    priceAfterDiscount,
    ratingsAverage,
  } = info;

  const dispatch=useAppDispatch()

  const handelAddToCart = async () => {
    try {
      const response = await addProductCart({ productId: _id });
      if (response.status == "success") {
        toast.success(response.message);
     const cartInfo=await  getLoggedUserCart()
       dispatch  (setCartInfo(cartInfo));
        console.log("hello");
      }
    } catch (error) {
      console.error("Cart error:", error);

      toast.error(
        "Failed to add product to cart If you don't have an account, please create one.",
      );
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-64 w-full p-6">
        <img
          src={imageCover}
          alt={title || "Product Image"}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 px-10"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Discount Badge */}
        {priceAfterDiscount && price > priceAfterDiscount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {Math.round(((price - priceAfterDiscount) / price) * 100)}%
          </div>
        )}

        {/* Action Buttons */}
      </div>

      {/* Content */}
      <Link href={`/products/${_id}`}>
        <div className="p-4 pb-0">
          {/* Product Title */}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={`text-xs ${
                    i < Math.floor(ratingsAverage)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({ratingsAverage?.toFixed(1)})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${priceAfterDiscount || price}
            </span>
            {priceAfterDiscount && priceAfterDiscount < price && (
              <span className="text-sm text-gray-400 line-through">
                ${price}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart Button - Outside Link to prevent navigation conflicts */}
      <div className="p-4 pt-4">
        <button
          type="button"
          className="w-full py-2 px-3 rounded-lg font-semibold flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 transition-all active:scale-95"
          onClick={(e) => {
            e.preventDefault(); // Extra safety
            handelAddToCart();
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} className="text-sm" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
