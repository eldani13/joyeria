import { categories } from "@/data/categories";
import { allProducts } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import {
  FaHeart,
  FaStar,
  FaStarHalfAlt,
  FaTruck,
  FaClock,
} from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { GrView } from "react-icons/gr";
export const dynamicParams = true;

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.name.toLowerCase(),
  }));
}


export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();

  const category = categories.find(
    (cat) => cat.name.toLowerCase() === slug
  )
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">
            Category not found
          </h2>
          <p className="text-gray-600">
            {"Sorry, we couldn't find the category you requested."}
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-amber-600 hover:underline"
          >
            Back to top
          </Link>
        </div>
      </div>
    );
  }

const categoryProducts = allProducts.filter(
  (product) => product.category.toLowerCase() === resolvedParams.slug.toLowerCase()
);


  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-gray-800 font-medium">{category.name}</span>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold tracking-wide text-gray-900 mb-4">
          {category.name}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
          {category.description}
        </p>
      </div>

      <div className="relative w-full mx-auto h-[22rem] mb-24 rounded-3xl overflow-hidden">
        <Image
          src={category.banner}
          alt={`Imagen de la categoría ${category.name}`}
          fill
          className="object-cover brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          {/* <h1 className="text-5xl font-bold text-gray-900">Earrings</h1> */}
          <p className="mt-4 text-lg text-gray-600 max-w-xl">
            Discover timeless elegance with our curated selection of earrings —
            crafted to sparkle on every occasion.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center mb-10 border-b border-gray-200 pb-4">
        <p className="text-gray-700 text-md">
          {categoryProducts.length} part{categoryProducts.length !== 1 && "s"}{" "}
          available
        </p>
        <div className="flex space-x-3 text-sm">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition">
            Relevance
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition">
            Price
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition">
            News
          </button>
        </div>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#3c2205] text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                  <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
                    <FaHeart className="w-4 h-4 text-[#3c2205]" />
                  </button>
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-1 min-h-[2.5rem] truncate">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-600 mb-2 min-h-[1.25rem]">
                        {product.category || "Categoría"}
                      </p>

                      <p className="text-lg font-bold text-[#3c2205] mb-2">
                        ${product.price.toFixed(2)}
                      </p>

                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400 text-sm">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                        </div>
                        <span className="text-gray-600 text-sm ml-2">
                          (4.5/5)
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-sm">
                          <FaTruck className="text-[#3c2205] mr-1" />
                          <span className="text-gray-600">Free shipping</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <FaClock className="text-[#3c2205] mr-1" />
                          <span className="text-gray-600">Available</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-3 mt-auto pt-2">
                    <button className="flex-1 bg-[#3c2205] flex items-center justify-center gap-1 text-white py-1.5 px-3 rounded-full font-semibold text-[13px] hover:bg-[#2c1804] transition">
                      <MdAddShoppingCart size={20} /> Add
                    </button>
                    <button className="flex-1 bg-gray-200 flex items-center justify-center gap-1 text-gray-800 py-1.5 px-3 rounded-full font-semibold text-[13px] hover:bg-gray-300 transition">
                      <GrView size={20} /> View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-10">
          There are currently no parts available in this category.
          <div className="mt-4">
            <Link href="/" className="text-amber-600 hover:underline">
              Explore other collections
            </Link>
          </div>
        </div>
      )}

      <div className="mt-28 px-4">
        <h3 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Recommended for You
        </h3>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Discover our most loved picks by customers - high-quality, trending,
          and top-rated products.
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
                <button className="mt-4 w-full bg-[#3c2205] hover:bg-amber-700 text-white text-sm py-2 rounded-xl font-medium transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
