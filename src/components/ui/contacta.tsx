"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBox,
  faUsers,
  faDollarSign,
  faTruck,
  faHeadset,
  faShieldAlt,
  
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "@/assets/images/1 (1).jpg";
import img2 from "@/assets/images/1 (2).jpg";
import img3 from "@/assets/images/2 (1).jpg";
import img4 from "@/assets/images/88.jpg";

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: img2,
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Managing Director",
      image: img3,
    },
    {
      id: 3,
      name: "Will Smith",
      role: "Product Designer",
      image: img4,
    },
  ];

  // Statistics data
  const stats = [
    { icon: faStore, number: "10.5k", label: "Sellers active our site" },
    {
      icon: faDollarSign,
      number: "33k",
      label: "Monthly Producst Sale",
      highlight: true,
    },
    { icon: faBox, number: "45.5k", label: "Customer active in our site" },
    { icon: faUsers, number: "25k", label: "Anual gross sale in our site" },
  ];

  // Features data
  const features = [
    {
      icon: faTruck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: faHeadset,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: faShieldAlt,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="px-8 py-4 text-sm text-gray-600">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>About</span>
      </div>

      {/* Our Story Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-black">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Launched in 2015, Exclusive is South premier online shopping
              marketplace with an active presence in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sellers and 300 brands and serves 3 millions
              customers across the region
            </p>
            <p className="text-gray-700 leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assortment in categories
              ranging from consumer.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={img1}
              alt="Shopping girls"
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-8 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg flex flex-col items-center justify-center text-center ${
                  stat.highlight
                    ? "bg-red-500 text-white"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div
                  className={`text-4xl mb-4 ${stat.highlight ? "text-white" : "text-red-500"}`}
                >
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${stat.highlight ? "text-white" : "text-black"}`}
                >
                  {stat.number}
                </h3>
                <p
                  className={`text-sm ${stat.highlight ? "text-white" : "text-gray-600"}`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">Our Team</h2>
          <p className="text-gray-600">Talented & Experienced Team</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="pb-12"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="flex flex-col items-center">
                <div className="w-full h-64 relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{member.role}</p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-red-500 transition"
                  >
                    
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2">
          {[...Array(6)].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === 0 ? "bg-red-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <div className="text-3xl text-black">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
