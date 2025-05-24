import Image from "next/image"
import { diamondShapes } from "@/data/diamantes"

export default function DiamondShapeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#3c2205] mb-12">
          Shop by diamond shape
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {diamondShapes.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full aspect-square relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 sm:mt-6 font-semibold text-[#3c2205]">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              <button className="mt-4 w-8 h-8 rounded-full bg-[#7c5c35] text-white flex items-center justify-center hover:bg-[#5a4125] transition">
                →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
