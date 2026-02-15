"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowRightFromBracket,
  faBars,
  faCartArrowDown,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faMessage,
  faPhone,
  faRightFromBracket,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import App from "next/app";
import { AppState, useAppSelector } from "@/features/auth/store/store";
import useLogout from "@/hooks/useLogeOut";

export default function Navbar() {
  const { logout } = useLogout();
  const{numOfCartItems}=useAppSelector((state)=>state.cart)

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { isAuthenticated } = useSelector(
    (appState: AppState) => appState.auth,
  );

  return (
    <header className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-slate-800 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact Info */}
          <ul className="flex items-center gap-4">
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <FontAwesomeIcon icon={faMessage} className="w-4 h-4" />
              <a href="mailto:contact@smartdelivery.com">
                contact@smartdelivery.com
              </a>
            </li>
          </ul>
          {/* Quick Links */}
          <ul className="flex items-center gap-4">
            <li>
              <Link
                href="/track-order"
                className="hover:text-emerald-400 transition-colors"
              >
                Track Order
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-emerald-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-emerald-400 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <select className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                <option value="EGP">EGP</option>
                <option value="SRA">SRA</option>
                <option value="AED">AED</option>
              </select>
            </li>
            <li>
              <select className="bg-slate-700 border border-slate-600 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer">
                <option value="ar">العربيه</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <Link
              href="/"
              className="text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              Smart Delivery
            </Link>
          </h1>

          {/* Search Bar */}
          <div className="relative w-full lg:w-1/2">
            <input
              type="search"
              placeholder="Search for products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition-colors">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
            </button>
          </div>

          {/* Action Links */}
          <ul className="flex items-center gap-4 lg:gap-6">
            <li>
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <FontAwesomeIcon icon={faHouse} className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors hidden"
              >
                <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                <span className="hidden sm:inline">Wishlist</span>
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors relative"
              >
                <FontAwesomeIcon icon={faCartArrowDown} className="w-5 h-5" />
                <span className="hidden sm:inline">Cart</span>
                <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {numOfCartItems}
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                <span className="hidden sm:inline">Contact</span>
              </Link>
            </li>
            {isAuthenticated ? (
              <li onClick={logout} className="cursor-pointer">
                <Link
                  href="/logout"
                  className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    className="w-5 h-5"
                  />
                  <span className="hidden sm:inline">Logout</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    href="/signup"
                    className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full transition-colors"
                  >
                    <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
                    <span className="hidden sm:inline">Signup</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-4 py-2 rounded-full transition-colors"
                  >
                    <FontAwesomeIcon icon={faAddressCard} className="w-4 h-4" />
                    <span className="hidden sm:inline">Login</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* Bottom Nav */}
      <nav className="bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-3 hover:bg-emerald-700 transition-colors"
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>

            {/* Nav Links */}
            <ul className="hidden lg:flex items-center">
              <li>
                <Link
                  href="/"
                  className="block px-5 py-3 hover:bg-emerald-700 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/recently-added"
                  className="block px-5 py-3 hover:bg-emerald-700 transition-colors font-medium"
                >
                  Recently Added
                </Link>
              </li>
              <li>
                <Link
                  href="/featured"
                  className="block px-5 py-3 hover:bg-emerald-700 transition-colors font-medium"
                >
                  Featured Products
                </Link>
              </li>
              <li>
                <Link
                  href="/offers"
                  className="block px-5 py-3 hover:bg-emerald-700 transition-colors font-medium"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="block px-5 py-3 hover:bg-emerald-700 transition-colors font-medium"
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
