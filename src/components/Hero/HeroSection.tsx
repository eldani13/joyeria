import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:grid md:grid-cols-2 min-h-[600px]">
      <div className="flex flex-col justify-center items-start bg-[#F8ECE4] px-6 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32 text-center md:text-left">
        <h1 className="hero-h1 text-4xl md:text-5xl font-bold text-[#3A2A1C] mb-4">
          Your Journey Begins Here
        </h1>
        <p className="hero-parrafo text-[#7B5E4D] text-lg md:text-xl mb-6">
          Discover our earrings collection
        </p>
        <Link
          href="#"
          className="px-6 py-2 text-white bg-[#B88A65] hover:bg-[#a07552] rounded-full transition"
        >
          View collection
        </Link>
      </div>

      <div className="relative w-full h-[400px] sm:h-[500px] md:min-h-[800px]">
        <Image
          src="/mujer.png"
          alt="Model wearing jewelry"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
}
