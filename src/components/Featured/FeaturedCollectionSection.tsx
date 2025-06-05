import Image from "next/image";
import { featuredProducts } from "@/data/products";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";

export default function FeaturedCollectionSection() {
  return (
    <section className="px-4 sm:px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-start text-center lg:text-left">
          <h2 className="collections-text text-4xl font-light text-black mb-6">
            Collections
          </h2>
          <div className="relative rounded-[2rem] overflow-hidden p-1 mx-auto lg:mx-0">
            <Image
              src="/belleza.png"
              alt="Model with jewelry"
              width={400}
              height={400}
              className="rounded-[2rem] object-cover"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          <div className="flex justify-between items-center">
            <span className="more-text text-sm text-[#3c2205]">More</span>
            <button className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100">
              <FaArrowRightLong />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex flex-col">
                <div className="relative w-full bg-white rounded-md overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain w-full h-auto"
                  />
                </div>
                <div className="mt-2 text-sm h-20 flex flex-col justify-between">
                  <h3 className="font-medium text-gray-800 min-h-[1.5rem] truncate">
                    {product.name}
                  </h3>
                  <div className="w-full flex items-center justify-center gap-2">
                    <span className="flex-1 bg-[#3c2205b6] text-white text-center py-2 rounded-sm">
                      {product.price.toFixed(2)} $
                    </span>
                    <button className="flex-1 cursor-pointer bg-gray-300 flex items-center justify-center py-2 rounded-sm hover:bg-gray-200 hover:text-gray-600">
                      <LiaShoppingBagSolid size={21} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
