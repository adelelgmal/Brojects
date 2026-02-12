import ProductCard from "@/features/products/components/ProductCard";
import { getProducts } from "@/features/products/server/products.actions"
import { get } from "http"


export default async function FeaturedProucts() {

    const response =  await getProducts();

  return (
    <>
    <section className="py-10">
        <div className="container mx-auto ">
            <div className="flex items-center gap-3 my-8">
                <div className="h-8 w-1.5 bg-linear-b from-emerald-500 to-emerald-700 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    response.data.map((product)=><ProductCard key={product._id} info={product} />)
                }
            </div>

        </div>

    </section>
      
    </>
  )
}
