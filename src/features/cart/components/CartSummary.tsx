import { faCheckCircle, faLock, faShoppingCart, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import React from 'react'

export default function CartSummary({totalCartPrice,numOfCartItems}:{totalCartPrice:number,numOfCartItems:number}) {

  const subtotal=totalCartPrice;
  const shipping=subtotal>500?0:70;
  const total =Math.round(subtotal+shipping)

  return (
    <>
    <div className="">
                {/* Order Summary Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  {/* Header */}
                  <div className="bg-green-600 text-white p-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
                    <div>
                      <h2 className="font-bold">Order Summary</h2>
                      <p className="text-sm text-green-100">You Have {numOfCartItems}items in your cart</p>
                    </div>
                  </div>
    
                  {/* Free Shipping Banner */}
                  <div className="bg-green-50 border-b border-green-200 p-4 flex items-start gap-3">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-green-700">
                        Free Shipping!
                      </p>
                      <p className="text-xs text-green-600">
                        You qualify for free delivery
                      </p>
                    </div>
                  </div>
    
                  {/* Summary Details */}
                  <div className="p-4 space-y-3 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Subtotal</span>
                      <span className="font-semibold">{subtotal} EGP</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">Shipping</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                  </div>
    
                  {/* Total */}
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-gray-900">
                        {total  }<span className="text-sm text-gray-600">EGP</span>
                      </span>
                    </div>
                  </div>
    
                  {/* Promo Code */}
                  <div className="p-4 border-b">
                    <button className="text-green-600 text-sm font-semibold flex items-center gap-1 hover:text-green-700">
                      🎟️ Apply Promo Code
                    </button>
                  </div>
    
                  {/* Checkout Button */}
                   <Link href='/checkout'>
                  <button className="w-full  bg-green-600 text-white py-3 px-4 font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faLock} className="w-4 h-4" />
                    Secure Checkout
                  </button>
                  </Link>
    
                  {/* Continue Shopping */}
                 
                  <button className="w-full bg-gray-100 text-gray-700 py-3 px-4 font-semibold hover:bg-gray-200 transition border-t text-sm">
                    ← Continue Shopping
                  </button>
                  
    
                  {/* Payment & Delivery Info */}
                  <div className="p-4 bg-blue-50 border-t flex justify-around text-xs text-center">
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="text-gray-700">Secure Payment</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <FontAwesomeIcon
                        icon={faTruck}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="text-gray-700">Fast Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
      
    </>
  )
}
