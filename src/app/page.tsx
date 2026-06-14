import Image from "next/image";
import Link from "next/link";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main className="bg-home-bg-light dark:bg-home-bg-dark transition-colors duration-300 font-roboto">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7i9oK8PgDhGGdxtBgMGPgfFkPITTuZ9e4ZxVQU0c0Cq0YfCjLZdlXROfyrZILlLA13P38whQe88CH1PIZMnVhgqEh4AlncQrOIdFILmCcvMCU0WP4y60xcZG2DnL06qcu8fpSMu49AMZ34m50GpUULPgI9u322mesOf7KZDzDNDoL65D7RIYmB35E_MpeNjvte930UrnoRhieH94X1fKae5GiU856U2yxwyvUXva6KIkvd4GCr8_gOcLO9eKrG3mUizzL-mhDx6oT"
            alt="Glowing charcoal embers"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-home-bg-light dark:to-home-bg-dark"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-home-accent-gold font-medium tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
              Sustainable Energy Solutions
            </h2>
            <h1 className="font-lora font-bold text-4xl md:text-6xl lg:text-7xl text-white leading-tight shadow-black drop-shadow-lg">
              Empowering Global Energy <br className="hidden md:block" />
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-home-primary">
                Renewable
              </span>{" "}
              Coconut Briquettes
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed font-light">
              Premium quality, eco-friendly charcoal produced with precision for
              industrial and leisure needs worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-home-primary hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1"
              >
                Explore Our Products
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </Link>
              {/* <Link href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-home-accent-gold text-base font-bold rounded-md text-white hover:text-home-accent-gold transition-all duration-300 bg-white/5 backdrop-blur-sm">
                Contact Sales
              </Link> */}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <span className="material-symbols-outlined text-white/50 text-3xl animate-bounce">
            keyboard_arrow_down
          </span>
        </div>
      </header>

      {/* Why Choose Us */}
      <section className="py-24 bg-home-bg-light dark:bg-home-bg-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-home-primary font-bold tracking-wider uppercase text-xs">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-lora font-bold text-gray-900 dark:text-white">
              Pure Energy, Naturally Sourced
            </h2>
            <div className="w-24 h-1 bg-home-accent-gold mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: "eco",
                title: "100% Eco-Friendly",
                desc: "Made from sustainable coconut shells, our briquettes leave a minimal carbon footprint and preserve natural forests.",
              },
              {
                icon: "local_fire_department",
                title: "Long Lasting Heat",
                desc: "Engineered for high calorific value, providing consistent, clean, and prolonged heat for all applications.",
              },
              {
                icon: "public",
                title: "Global Export Standard",
                desc: "Trusted by partners worldwide, we adhere to strict international quality standards for secure and reliable shipping.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-home-surface-light dark:bg-home-surface-dark p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:border-home-accent-gold dark:hover:border-home-accent-gold transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-home-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-home-primary transition-colors">
                  <span className="material-symbols-outlined text-3xl text-home-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-lora font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gray-50 dark:bg-[#151518]" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <span className="text-home-primary font-bold tracking-wider uppercase text-xs">
                Our Products
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-lora font-bold text-gray-900 dark:text-white">
                Our Briquette Shapes
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
                Crafted to perfection in various forms to suit your specific
                burning requirements.
              </p>
            </div>
            <Link
              href="/products"
              className="hidden md:inline-flex items-center text-home-accent-gold hover:text-home-primary font-bold transition-colors mt-4 md:mt-0 text-sm"
            >
              View Full Catalog{" "}
              <span className="material-symbols-outlined ml-1 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cube", img: "/images/products/Cube.jpeg" },
              { title: "Hexa", img: "/images/products/Hexa.jpeg" },
              { title: "Hexa Line", img: "/images/products/hexa line.jpeg" },
              { title: "RCL", img: "/images/products/RCLw.jpeg" },
            ].map((product, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-home-surface-dark"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 dark:bg-gray-800 h-64 relative block">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-lora font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/products"
              className="inline-flex items-center text-home-accent-gold hover:text-home-primary font-bold transition-colors text-sm"
            >
              View Full Catalog{" "}
              <span className="material-symbols-outlined ml-1 text-sm">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <SpeedInsights />
    </main>
  );
}
