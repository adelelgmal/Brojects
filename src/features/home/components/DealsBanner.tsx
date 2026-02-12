import { faTag, faLeaf, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DealsBanner() {
  const cards = [
    {
      icon: faTag,
      badge: "Deals of the Day",
      title: "Fresh & Organic Products",
      text: "Get up to 50% off on selected products. Limited time offer!",
      cta: "Shop Now",
      variant: "bg-green-600 text-white",
    },
    {
      icon: faLeaf,
      badge: "New Arrivals",
      title: "Exotic Fruits & Vegetables",
      text: "Discover unique and rare fruits and vegetables from around the world.",
      cta: "Explore Now",
      variant: "border border-green-600 text-green-600",
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600">
                <FontAwesomeIcon icon={c.icon} className="text-2xl" />
              </div>

              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-green-600 font-semibold mb-1">
                  {c.badge}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{c.text}</p>
                <button
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium ${c.variant} hover:opacity-95`}
                >
                  <FontAwesomeIcon icon={faClock} className="text-sm" />
                  {c.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
