"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { shippingAdressValues } from "../schemas/checkout.schema";

interface ShippingAddressFromProps {
  register: UseFormRegister<shippingAdressValues>;
  errors: FieldErrors<shippingAdressValues>;
}

export default function ShippingForm({
  register,
  errors,
}: ShippingAddressFromProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-t-lg flex items-center gap-4">
          <div className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-md">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Shipping Address</h3>
            <p className="text-sm opacity-90">
              Where should we deliver your order?
            </p>
          </div>
        </div>

        <div className="p-6 space-y-5">
          {/* Info box */}
          <div className="bg-blue-50 border border-blue-100 rounded-md p-4 flex items-start gap-3">
            <div className="text-blue-600 mt-0.5">
              <FontAwesomeIcon icon={faInfoCircle} />
            </div>
            <div>
              <div className="font-semibold text-sm text-blue-800">
                Delivery Information
              </div>
              <div className="text-sm text-blue-700/80">
                Please ensure your address is accurate for smooth delivery
              </div>
            </div>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <input
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-md bg-white text-gray-700"
                id="city"
                type="text"
                placeholder="e.g. Cairo, Alexandria, Giza"
                {...register("city")}
              />
            </div>
            {errors.city && (
              <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                {errors.city.message}
              </p>
            )}
          </div>

          {/* Street Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address *
            </label>
            <div className="relative">
              <div className="absolute top-2 left-0 pl-3 flex items-start pt-3 text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <textarea
                id="details"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-md bg-white text-gray-700 resize-none"
                rows={4}
                placeholder="Street name, building number, floor, apartment..."
                {...register("details")}
              />
            </div>
            {errors.details && (
              <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                {errors.details.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input
                className="w-full pl-11 pr-36 py-3 border border-gray-200 rounded-md bg-white text-gray-700"
                placeholder="01xxxxxxxxx"
                id="phone"
                {...register("phone")}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-500">
                Egyptian numbers only
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                  <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
