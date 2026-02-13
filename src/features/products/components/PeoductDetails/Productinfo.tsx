'use client'

import React, { useState } from "react";
import { Product } from "../../types/Products.types";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css"

export default function Productinfo({ product }: { product?: Product }) {
const [count,setCount]=useState(1)


  if (!product) {
    return (
      <div className="text-center py-12 text-gray-500">
        Loading product information...
      </div>
    );
  }

  const {
    _id,
    name,
    description,
    imageCover,
    ratingsAverage,
    ratingsQuantity,
    quantity,
    price,
    priceAfterDiscount,
    subcategories,
    brand,
    category,images,
  } = product;

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <ImageGallery items={images.map((image)=>{
          return {
            original:image,
            thumbnail:image,
          }
        })}/>
        

        {/* Right Column - Product Info */}
        <div className="flex flex-col justify-start space-y-6">
          {/* Category Badge */}
          <div className="inline-block">
            <span className="inline-block px-3 py-1 text-xs font-semibold border border-gray-300 text-gray-700 rounded">
              {category.name}
            </span>
            <span className="inline-block ml-2 px-3 py-1 text-xs font-semibold border border-gray-300 text-gray-700 rounded">
              {brand.name}
            </span>
          </div>

          {/* Product Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
            {name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-lg text-yellow-400">★</span>
              <span className="text-lg text-yellow-400">★</span>
              <span className="text-lg text-yellow-400">★</span>
              <span className="text-lg text-gray-300">★</span>
              <span className="text-lg text-gray-300">★</span>
            </div>
            <span className="text-sm text-gray-600">3.5 (128 reviews)</span>
          </div>

          {/* Price Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                {priceAfterDiscount || price} EGP
              </span>
              <span className="line-through text-gray-400 text-lg">
                {price}
              </span>
            </div>
            {priceAfterDiscount && (
              <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-full">
                {Math.round(((price - priceAfterDiscount) / price) * 100)}%
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-700">
              Quantity
            </label>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={()=>{setCount(count-1)}}>
                  −
                </button>
                <input
                  type="number"
                  value={count}
                  onChange={(e)=>{
                    setCount(+e.target.value)
                  }}
                  
                  className="w-16 text-center border-none outline-none py-2 bg-transparent"
                />
                <button className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={()=>{setCount(count+1)}}
                >
                  +
                </button>
              </div>
              <span className="text-sm text-gray-500">
                {quantity} available
              </span>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex items-center justify-between py-4 border-t border-gray-200">
            <span className="text-lg font-semibold text-gray-700">
             Total Price:  { count * (priceAfterDiscount || price)} EGP
            </span>
            <span className="text-2xl font-bold text-green-600"></span>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex gap-4">
            <button className="flex-1 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
              <span>🛒</span>
              Add to Cart
            </button>
            <button className="flex-1 px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
              <span>🛒</span>
              Buy Now
            </button>
          </div> */}

          {/* Wishlist Button */}
          
        </div>
      </div>

      {/* Route Badge - Bottom Right */}
      
    </div>
  );
}
