import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-20 bg-[#F9F9F7] text-center px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12">
        Categories
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
        {categories.map((cat) => {
          const slug = cat.name.toLowerCase().replace(/\s+/g, "-");

          return (
            <Link key={cat.name} href={`/categories/${slug}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <div className="w-full aspect-square relative">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="mt-4 text-base font-medium text-gray-800">{cat.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
