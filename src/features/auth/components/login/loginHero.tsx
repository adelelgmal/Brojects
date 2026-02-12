import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faShieldHalved, faUsers } from '@fortawesome/free-solid-svg-icons'

export default function LoginHero() {
  return (
    <div className="hidden lg:flex  p-18 rounded-2xl relative bg-gradient-to-br from-red-600 via-red-700 to-red-900 items-center justify-center overflow-hidden">

      {/* Abstract Background Shapes & Mesh Gradients */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-red-500/30 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-black/40 blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>
      </div>

      {/* Main Glass Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-lg px-8">

        {/* Animated Icon Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-red-400 blur-2xl opacity-20 rounded-full animate-bounce duration-[3000ms]"></div>
          <div className="relative w-28 h-28 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
            <FontAwesomeIcon icon={faTruckFast} className="text-5xl text-white drop-shadow-md" />

            {/* Floating Status Badge */}
            <div className="absolute -right-6 -top-4 bg-white text-red-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-red-50 flex items-center gap-1 animate-bounce duration-[2000ms]">
              <span>🚀</span> Fast
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Smart<span className="text-red-200">Delivery</span>
          </h2>
          <p className="text-red-50 text-lg font-light leading-relaxed max-w-md mx-auto">
            Experience the future of logistics. Fast, reliable, and secure delivery solutions tailored for your needs.
          </p>
        </div>

        {/* Trust Badges / Stats Cards (New Features) */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {/* Card 1 */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-black/30 transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-200">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">50k+</p>
              <p className="text-red-200 text-xs uppercase tracking-wide opacity-80">Happy Users</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-black/30 transition-colors duration-300">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-200">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">100%</p>
              <p className="text-red-200 text-xs uppercase tracking-wide opacity-80">Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Gradient Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-red-900 to-transparent opacity-80"></div>
    </div>
  )
}
