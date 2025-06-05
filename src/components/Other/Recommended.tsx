import Image from "next/image";
import { allProducts } from "@/data/products";

export default function Recommended() {
  return (
    <div className="mt-28 px-4">
      <h3 className="recomendacion-text text-4xl font-bold text-gray-900 mb-6 text-center">
        Recommended for You
      </h3>
      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
        Discover our most loved picks by customers - high-quality, trending, and
        top-rated products.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {allProducts.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow bg-white overflow-hidden"
          >
            <div className="relative h-52 w-full bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
              />
              <div className="absolute top-3 left-3 bg-[#3c2205] text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">
                ★ Top Pick
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-md font-semibold text-gray-900 truncate mb-1">
                {product.name}
              </h4>
              <h4 className="text-md text-center font-semibold text-gray-900 truncate mb-1">
                {product.category}
              </h4>
              <div className="flex items-center justify-center gap-1 text-yellow-400 text-sm mb-2">
                ★★★★☆ <span className="text-gray-500 text-xs">(210)</span>
              </div>
              <p className="text-lg text-[#3c2205]font-bold text-center">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-[#3c2205] border border-[#3c2205] text-white hover:bg-white hover:text-black text-sm py-2 rounded-xl font-medium transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
