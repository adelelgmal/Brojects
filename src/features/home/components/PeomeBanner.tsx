import {
  faCar,
  faShieldAlt,
  faHeadset,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PeomeBanner() {
  const features = [
    {
      icon: faCar,
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      icon: faShieldAlt,
      title: "Secure Payment",
      description: "100% secure payment processing",
    },
    {
      icon: faHeadset,
      title: "24/7 Support",
      description: "We are here to help you",
    },
    {
      icon: faUndo,
      title: "Easy Returns",
      description: "30-day money-back guarantee",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <FontAwesomeIcon
                  icon={feature.icon}
                  className="text-4xl text-indigo-600 hover:text-indigo-700 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
