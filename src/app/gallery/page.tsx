import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Gallery - Castle Trading Group",
    description: "Explore our premium coconut charcoal production and products.",
};

const galleryImages = [
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08 (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08 (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08.jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (1).jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (2).jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (3).jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09.jpeg",
    "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.10.jpeg",
];

export default function GalleryPage() {
    return (
        <div className="bg-gallery-bg-light dark:bg-gallery-bg-dark text-gray-900 dark:text-[#E5D5C6] transition-colors duration-300 font-roboto-condensed">
            <header className="relative py-16 bg-gallery-surface-light dark:bg-gallery-bg-dark border-b border-[#EADDD0] dark:border-[#4A3D33]">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-tighter leading-none">
                            Sustainable Energy from <span className="text-gallery-primary">Nature's Core</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-[#A89689] font-light max-w-2xl border-l-4 border-gallery-primary pl-6 py-2 uppercase tracking-wide">
                            Transforming coconut shell waste into premium charcoal briquettes for the world.
                        </p>
                    </div>
                </div>
            </header>

            <main className="bg-gallery-bg-light dark:bg-gallery-bg-dark py-8">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

                        {/* Image 1: Facility */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[0]}
                                alt="Castle Trading Group Facility"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-xs uppercase tracking-widest font-bold">Facility / Semarang</p>
                            </div>
                        </div>

                        {/* Content Block: Our Story */}
                        <div className="break-inside-avoid bg-white dark:bg-gallery-surface-dark p-8 border-t-4 border-gallery-primary shadow-sm">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="uppercase tracking-widest text-xs font-bold text-gallery-primary">About Us</span>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-tight">Our Story</h2>
                            <div className="prose prose-sm text-gray-600 dark:text-[#A89689] font-medium leading-relaxed uppercase">
                                <p className="mb-4">
                                    Founded with a vision to revolutionize the charcoal industry, <strong>PT Castle Trading Group</strong> stands at the forefront of sustainable energy production. Located in the heart of <strong>Semarang, Indonesia</strong>.
                                </p>
                                <p>
                                    We are committed to an eco-conscious philosophy, turning what was once considered coconut shell waste into high-grade, renewable energy.
                                </p>
                            </div>
                        </div>

                        {/* Image 2: Production */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[1]}
                                alt="Production Area"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Content Block: Stats */}
                        <div className="break-inside-avoid bg-gray-900 dark:bg-[#1A1410] p-8 text-white">
                            <div className="grid grid-cols-1 gap-8">
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-gallery-primary text-4xl">public</span>
                                    <div>
                                        <h4 className="font-bold text-lg uppercase tracking-tight">Global Reach</h4>
                                        <p className="text-sm text-gray-400 uppercase">Exported to the Middle East & beyond.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-gallery-primary text-4xl">eco</span>
                                    <div>
                                        <h4 className="font-bold text-lg uppercase tracking-tight">100% Eco-friendly</h4>
                                        <p className="text-sm text-gray-400 uppercase">Sustainable production.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image 3: Products (Cube) */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[2]}
                                alt="Cube Briquettes"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="p-6 bg-white dark:bg-gallery-surface-dark">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase">Cube Briquettes</h3>
                                <p className="text-xs text-gray-500 dark:text-[#A89689] mt-2 uppercase">Precision-Cut / High Calorie</p>
                            </div>
                        </div>

                        {/* Content Block: Production Journey */}
                        <div className="break-inside-avoid bg-gallery-primary p-8 text-white">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="uppercase tracking-widest text-xs font-bold text-white/80">Operational Excellence</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Production Journey</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 border-b border-white/20 pb-3">
                                    <span className="font-bold text-2xl opacity-50">01</span>
                                    <span className="text-sm uppercase font-bold">Eco-conscious sourcing</span>
                                </div>
                                <div className="flex items-center gap-4 border-b border-white/20 pb-3">
                                    <span className="font-bold text-2xl opacity-50">02</span>
                                    <span className="text-sm uppercase font-bold">Advanced carbonization</span>
                                </div>
                                <div className="flex items-center gap-4 border-b border-white/20 pb-3">
                                    <span className="font-bold text-2xl opacity-50">03</span>
                                    <span className="text-sm uppercase font-bold">Rigorous quality control</span>
                                </div>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[3]}
                                alt="Factory Operations"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Image 5: Hexagonal */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[4]}
                                alt="Hexagonal Finger"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="p-6 bg-white dark:bg-gallery-surface-dark">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase">Hexagonal Finger</h3>
                                <p className="text-xs text-gray-500 dark:text-[#A89689] mt-2 uppercase">Enhanced Airflow Design</p>
                            </div>
                        </div>

                        {/* Image 6: Grooved */}
                        <div className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                            <Image
                                src={galleryImages[5]}
                                alt="Grooved Finger"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="p-6 bg-white dark:bg-gallery-surface-dark">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white uppercase">Grooved Finger</h3>
                                <p className="text-xs text-gray-500 dark:text-[#A89689] mt-2 uppercase">Rapid Ignition Tech</p>
                            </div>
                        </div>

                        {/* Content Block: Precision Processing */}
                        <div className="break-inside-avoid bg-gallery-surface-light dark:bg-gallery-surface-dark p-8 border border-[#EADDD0] dark:border-[#4A3D33]">
                            <p className="text-gallery-primary font-bold text-sm uppercase tracking-widest italic mb-4">Precision Processing</p>
                            <p className="text-gray-600 dark:text-[#A89689] text-sm uppercase font-bold leading-relaxed">
                                Turning what was once considered coconut shell waste into high-grade, renewable energy through rigorous international standards.
                            </p>
                        </div>

                        {/* Remaining Images */}
                        {galleryImages.slice(6).map((src, idx) => (
                            <div key={idx} className="break-inside-avoid relative group overflow-hidden border border-[#EADDD0] dark:border-[#4A3D33]">
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${idx + 7}`}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        ))}

                    </div>
                </div>
            </main>

            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tighter">Ready to Partner with Us?</h2>
                    <p className="text-gray-400 mb-10 text-xl uppercase tracking-widest font-light max-w-3xl mx-auto">
                        We supply premium charcoal bulk orders worldwide. Contact us today for a quote.
                    </p>
                    <Link href="/contact" className="inline-block bg-gallery-primary hover:bg-[#8B4513] text-white font-bold py-5 px-12 transition-all uppercase tracking-[0.2em] text-sm ring-1 ring-white/20 hover:ring-gallery-primary">
                        Contact Sales Department
                    </Link>
                </div>
                <div className="absolute inset-0 opacity-10 flex items-center justify-center select-none pointer-events-none">
                    <span className="text-[30rem] font-bold uppercase tracking-tighter leading-none">C T G</span>
                </div>
            </section>
        </div>
    );
}
