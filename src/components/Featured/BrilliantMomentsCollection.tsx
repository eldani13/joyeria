import Image from "next/image";

export default function BrilliantMomentsCollection() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="brillante-text text-4xl text-[#3c2205]">
          Brilliant moments collection
        </h2>
        <p className="text-gray-600 mt-2">
          Brilliant design and unparalleled craftsmanship.
        </p>
        <button className="mt-6 px-6 py-2 border border-[#3c2205] rounded-full text-[#3c2205] hover:bg-[#3c2205] hover:text-white transition">
          View collection
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
          <Image
            src="/modelo1.png"
            alt="Model with earrings"
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[290px]">
            <Image
              src="/modelo2.png"
              alt="Wedding rings"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[290px]">
            <Image
              src="/modelo3.png"
              alt="Minimalist earrings"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
