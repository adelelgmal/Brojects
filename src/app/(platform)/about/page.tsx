import React from "react";
import Image from "next/image";

import img1 from "@/assets/images/1 (1).jpg";
import img2 from "@/assets/images/1 (2).jpg";
import img3 from "@/assets/images/2 (1).jpg";
import img4 from "@/assets/images/88.jpg";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-6">
        <p className="text-gray-400 text-sm">Home / About</p>
      </div>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold text-black mb-6">Our Story</h1>
            <p className="text-gray-700 text-sm leading-7 mb-4">
              Launched in 2015, Exclusive is South Asia premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by highly tailored marketing, data and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 millions customers across the region.
            </p>
            <p className="text-gray-700 text-sm leading-7">
              Exclusive has more than 1 million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative h-96">
            <Image
              src={img4}
              alt="Our Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Card 1 */}
          <div className="border border-gray-200 rounded-lg p-8 text-center hover:bg-red-500 hover:text-white transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                📅
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">10.5k</h3>
            <p className="text-sm">Sellers active our site</p>
          </div>

          {/* Stat Card 2 */}
          <div className="border border-gray-200 rounded-lg p-8 text-center bg-red-500 text-white">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-2xl">
                💵
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">33k</h3>
            <p className="text-sm">Monthly Product Sale</p>
          </div>

          {/* Stat Card 3 */}
          <div className="border border-gray-200 rounded-lg p-8 text-center hover:bg-red-500 hover:text-white transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                🎁
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">45.5k</h3>
            <p className="text-sm">Customer active in our site</p>
          </div>

          {/* Stat Card 4 */}
          <div className="border border-gray-200 rounded-lg p-8 text-center hover:bg-red-500 hover:text-white transition-all">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                👤
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">25k</h3>
            <p className="text-sm">Anual gross sale in our site</p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={img1}
                alt="Tom Cruise"
                fill
                className="object-contain "
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Tom Cruise</h3>
            <p className="text-sm text-gray-600 mb-4">Founder & Chairman</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                in
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={img2}
                alt="Emma Watson"
                fill
                className="object-contain "
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Emma Watson</h3>
            <p className="text-sm text-gray-600 mb-4">Managing Director</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                in
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="relative h-80 mb-6 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={img3}
                alt="Will Smith"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-1">Will Smith</h3>
            <p className="text-sm text-gray-600 mb-4">Product Designer</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-red-500">
                𝕏
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                in
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                🚚
              </div>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-sm text-gray-600">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                ☎️
              </div>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-sm text-gray-600">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl">
                🛡️
              </div>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">
              MONEY BACK GUARANTEE
            </h3>
            <p className="text-sm text-gray-600">
              We return money within 30 days
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
