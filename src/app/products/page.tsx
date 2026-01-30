import Image from "next/image";
import Link from 'next/link';

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  specs: ProductSpec[];
}

const products: Product[] = [
  {
    id: "cube",
    category: "SHISHA - BBQ",
    title: "Cube Briquettes",
    description: "Premium cube-shaped briquettes designed for optimal heat distribution and long burning sessions.",
    image: "/images/products/Cube.jpeg",
    specs: [
      { label: "Size", value: "25x25x25mm, 26x26x26mm" },
      { label: "Burning Time", value: "2+ Hours" },
      { label: "Ash Content", value: "< 2.5%" },
    ],
  },
  {
    id: "hexagonal",
    category: "BBQ / GRILLING",
    title: "Hexagonal Briquettes",
    description: "Unique hexagonal shape offering superior airflow and consistent high temperature for grilling.",
    image: "/images/products/Hexa.jpeg",
    specs: [
      { label: "Length", value: "5cm - 10cm" },
      { label: "High Calorific Value", value: "" },
      { label: "Smokeless & Odorless", value: "" },
    ],
  },
  {
    id: "rcl",
    category: "BBQ / GRILLING",
    title: "RCL Briquettes",
    description: "Cylindrical stick briquettes ideal for specific industrial or specialized ceremonial burning needs.",
    image: "/images/products/RCLw.jpeg",
    specs: [
      { label: "Diameter", value: "1.8cm - 2.0cm" },
      { label: "Quick Ignition", value: "" },
      { label: "Low Moisture", value: "" },
    ],
  },
  {
    id: "finger",
    category: "BBQ / GRILLING",
    title: "Finger / Stick Briquettes",
    description: "Cylindrical stick shape designed for specialized airflow and rapid ignition. Provides intense heat.",
    image: "/images/products/hexa line.jpeg",
    specs: [
      { label: "Length", value: "5cm - 10cm" },
      { label: "High Calorific Value", value: "" },
      { label: "Smokeless & Odorless", value: "" },
    ]
  }
];

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5 flex flex-col md:flex-row h-full">
    {/* Image Section */}
    <div className="relative w-full md:w-2/5 min-h-[300px] md:min-h-[400px]">
      <Image
        src={product.image}
        alt={product.title}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 40vw"
      />
      {/* Overlay gradient for better text visibility if needed, or stylistic touch */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
    </div>

    {/* Content Section */}
    <div className="flex-1 p-8 md:p-10 flex flex-col justify-center bg-[#1a1a1a]">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-[#2a2a2a] text-[#ffd700] text-xs font-bold tracking-wider uppercase rounded-md mb-3 border border-[#ffd700]/20">
          {product.category}
        </span>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {product.title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {product.description}
        </p>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
        {product.specs.map((spec, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="text-[#ffd700] material-icons text-sm">check</span>
            <span className="text-gray-300 text-sm font-medium">
              {spec.label}{spec.value ? `: ${spec.value}` : ''}
            </span>
          </div>
        ))}
      </div>

      {/* Action */}
      <div className="mt-auto pt-4">
        <button className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-[#ffd700] text-white hover:text-[#ffd700] transition-colors rounded-lg font-medium text-sm tracking-wide uppercase">
          Inquire Now
          <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  </div>
);

export default function Products() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-inter">
      {/* Header */}
      <header className="relative bg-[#0d0d0d] py-20 lg:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9S6iYtmsgfR4c42MmYnVTrADKlIlvpqBZZYM-OSPG6m1zRmEt-S0L7qXlSCKYHGx_kDTmc96E-V8GSmFA52TdJKkyVsV0Ia0m4MA2KuTYll4SeBQPSPa9ETpCFAIhsMsHPpiUf_vsLWJcB3HjotNxj3Fg3yZCUF_Lf_HnNBZ3I6mRS0I0YsDZUVJBpOegogLiuVBtkZBxvj2GOh4l7Tn-ujBT5VGJ3C35FRyXSKFNjdcZMmCnk9P3JXEANKX53PCRVsrKX-JiyiaX"
            alt="Dark textured background representing charcoal"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Premium Collections
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            Discover our range of sustainable, high-performance coconut charcoal briquettes designed for every need.
          </p>
        </div>
      </header>


      {/* Products Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#121212] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#ffd700] uppercase tracking-[0.2em] text-sm font-bold mb-4 block">B2B Partnership</span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Order?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Contact our sales team for a custom quote or to request product samples. We offer private labeling (OEM) services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-[#ffd700] text-black font-bold rounded hover:bg-[#e6c200] transition-colors uppercase tracking-widest text-sm shadow-lg shadow-[#ffd700]/20">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

