import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className=" bg-white/25 shadow text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-4">Smart Delivery</h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Smart Delivery is your go-to online marketplace for fresh and organic groceries, delivering quality products right to your doorstep.
            </p>
            <ul className="flex gap-3">
              <li>
                <a href="#" className="w-5 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebookF} className="text-white" />
                </a>
              </li>
              <li>
                <a href="#" className="w-5 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </a>
              </li>
              <li>
                <a href="#" className="w-5 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </a>
              </li>
              <li>
                <a href="#" className="w-5 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
                </a>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Categories</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Fruits & Vegetables</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Dairy & Eggs</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Bakery & Snacks</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Meat & Fish</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Beverages</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4">Customer Service</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">My Account</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Order History</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Wishlist</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Returns & Refunds</Link></li>
              <li><Link href="#" className="hover:text-green-500 transition-colors duration-300">Help Center</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Smart Delivery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
