"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrash,
  faHeart,
  faLock,
  faCheckCircle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { AppState, useAppSelector } from "@/features/auth/store/store";
import Cartitems from "../components/Cartitems";
import CartSummary from "../components/CartSummary";

export default function CartScreens() {
  const { numOfCartItems, products, totalCartPrice } = useAppSelector(
    (state) => state.cart,
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-2">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="w-6 h-6 text-green-600"
          />
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <span className="text-gray-600">
            You have {numOfCartItems} in your cart
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-4">
              {products.map((prdouct) => (
                <Cartitems key={prdouct._id} infoo={prdouct} />
              ))}
            </div>
            {/* Cart Item 1 */}

            {/* Cart Item 2 */}

            {/* Cart Item 3 */}
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            {/* Order Summary Card */}
            <CartSummary
              totalCartPrice={totalCartPrice}
              numOfCartItems={numOfCartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
