import { ReactNode } from "react";
import "../styles/globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import "../app/lib/fontawesome";

import "react-toastify/dist/ReactToastify.css";

import { Exo } from "next/font/google";
import Providers from "@/components/providers/providers";
import { verify } from "crypto";
import { vertifyToken } from "@/features/auth/server/auth.actions";
import { getLoggedUserCart } from "@/features/cart/server/cart.actions";
import { CartState } from "@/features/cart/store/cart.slice";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-exo",
  display: "swap",
});

const defaultCartState: CartState = {
  cartId: null,
  numOfCartItems: 0,
  totalCartPrice: 0,
  products: [],
  error: null,
  isLoading: false,
};

export default async function layout({ children }: { children: ReactNode }) {

  const authValues = await vertifyToken();
  let cartState = defaultCartState;
  if (authValues.isAuthenticated) {
    try {
      const cartResponse = await getLoggedUserCart();
      console.log("Layout cartResponse keys:", Object.keys(cartResponse));
      console.log("Layout cartResponse.cartId:", cartResponse.cartId);
      cartState = {
        cartId: cartResponse.cartId,
        totalCartPrice: cartResponse.data.totalCartPrice,
        products: cartResponse.data.products,
        numOfCartItems: cartResponse.numOfCartItems,
        isLoading: false,
        error: null,
      }


    } catch (error) {
      cartState = defaultCartState;
    }
  }

  return (
    <html lang="en">
      <body className={`${exo.className} font-medium`}>
        <Providers preloadedState={{ auth: authValues, cart: cartState }}>
          <Navbar />
          {children}

          <Footer />


        </Providers>
      </body>
    </html>
  );
}
