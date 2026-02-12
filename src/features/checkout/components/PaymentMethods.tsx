"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faCreditCard,
  faCheck,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
} from "@fortawesome/free-brands-svg-icons";

interface PaymentMethodsProps{
    selectedMethod:'cash'|'card',
    changeMethod:(method :'cash'|'card')=> void


}

export default function PaymentMethods({selectedMethod,changeMethod}:PaymentMethodsProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-t-lg flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-md">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Payment Method</h3>
            <p className="text-sm opacity-90">Choose how  like to pay</p>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Cash on Delivery */}
          <button type="button"
          onClick={()=>{
            changeMethod('cash')

          }}>
          <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 ${
                selectedMethod=='cash'?'bg-linear-to-br from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/30':` bg-gray-100 rounded-lg`
            }`}>
              <FontAwesomeIcon icon={faWallet} size="lg" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Cash on Delivery</h4>
              <p className="text-sm text-gray-600">
                Pay when your order arrives at your doorstep
              </p>
            </div>
            <div className="flex items-center">
                {
              selectedMethod =='cash'&& <FontAwesomeIcon icon={faCheck} className="text-gray-400" />
                }
            </div>
          </div>
          </button>

          {/* Pay Online */}
          <button type="button"
          onClick={()=>{
            changeMethod('card')
          }}
          >
          <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <div className={`w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-500 ${
                selectedMethod=='card'?'bg-linear-to-br from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/30':` bg-gray-100 rounded-lg`
            }`}>
                
              <div className="flex items-center">
                {
              selectedMethod =='card'&& <FontAwesomeIcon icon={faCheck} className="text-gray-400" />
                }
            </div>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">Pay Online</h4>
              <p className="text-sm text-gray-600">
                Secure payment with Credit/Debit Card via Stripe
              </p>
              <div className="flex gap-3 mt-3">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-xs text-white font-bold">
                  <FontAwesomeIcon icon={faCcVisa} size="sm" />
                </div>
                <div className="w-8 h-5 bg-orange-600 rounded flex items-center justify-center text-xs text-white font-bold">
                  <FontAwesomeIcon icon={faCcMastercard} size="sm" />
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center text-xs text-white font-bold">
                  <FontAwesomeIcon icon={faCcAmex} size="sm" />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-gray-400" />
            </div>
          </div>
          </button>

          {/* Security Notice */}
          <div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start gap-3">
            <div className="text-green-600 mt-0.5">
              <FontAwesomeIcon icon={faShieldAlt} size="lg" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-green-800">
                Secure & Encrypted
              </h4>
              <p className="text-sm text-green-700">
                Your payment info is protected with 256-bit SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
