import { featuresData } from "@/data/featuresData";

export default function Information() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-24 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="informacion-text text-4xl text-center text-[#3c2205] mb-2">
          Elegance that Tells Stories
        </h2>
        <p className="text-center text-lg  text-gray-600 max-w-3xl mx-auto mb-16">
          From necklaces and rings to bracelets and earrings, each piece is
          designed to capture the essence of timeless elegance with a modern
          twist.{" "}
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((item, index) => (
            <div key={index} className="p-8 rounded-lg">
              <h3 className="informacion-h3 text-xl font-semibold text-[#3c2205] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
