import { faLeaf, faLock, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUpHero() {
    return (
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-10 flex flex-col justify-center h-full rounded-2xl relative overflow-hidden shadow-sm">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-primary-300 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>

            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                    Smart Delivery<br />
                    <span className="text-primary-600">Faster</span> & <span className="text-primary-600">Greener</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    Join our community and experience the future of logistics.
                    Eco-friendly, secure, and always on time delivery services tailored for you.
                </p>

                <ul className="space-y-5">
                    <li className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <FontAwesomeIcon icon={faLeaf} className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Eco-friendly delivery</h3>
                            <p className="text-sm text-gray-500">Zero carbon footprint options available</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <FontAwesomeIcon icon={faTruckFast} className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Fast and reliable</h3>
                            <p className="text-sm text-gray-500">Same-day delivery for select locations</p>
                        </div>
                    </li>
                    <li className="flex items-center gap-4 bg-white/60 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/50 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-default group">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shrink-0">
                            <FontAwesomeIcon icon={faLock} className="text-xl" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">Secure and trustworthy</h3>
                            <p className="text-sm text-gray-500">Your packages are safe with us</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
