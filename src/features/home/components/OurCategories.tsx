import { getAllCategories } from "@/features/categories/server/categories.actions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

export default async function OurCategories() {
  const response = await getAllCategories();

  return (
    <section id="categories" className="py-10 px-15">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3 my-8">
            <div className="h-8 w-1.5 bg-gradient-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Categories</h2>
          </div>
          <Link
            href="/categories"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            View All
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {response.data.map((category) => (
          <Link
            key={category._id}
            href={``}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <div>
              {category.image ? (
                <Image
                  src={category.image}
                  alt={category.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 mb-2 object-cover rounded-xl mx-auto"
                />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-2 mx-auto" />
              )}
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}