import Image from "next/image";

export default function Products() {
    return (
        <main className="bg-products-bg-light dark:bg-products-bg-dark text-products-text-light dark:text-products-text-dark font-inter transition-colors duration-300">
            {/* Header */}
            <header className="relative bg-products-bg-dark py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9S6iYtmsgfR4c42MmYnVTrADKlIlvpqBZZYM-OSPG6m1zRmEt-S0L7qXlSCKYHGx_kDTmc96E-V8GSmFA52TdJKkyVsV0Ia0m4MA2KuTYll4SeBQPSPa9ETpCFAIhsMsHPpiUf_vsLWJcB3HjotNxj3Fg3yZCUF_Lf_HnNBZ3I6mRS0I0YsDZUVJBpOegogLiuVBtkZBxvj2GOh4l7Tn-ujBT5VGJ3C35FRyXSKFNjdcZMmCnk9P3JXEANKX53PCRVsrKX-JiyiaX"
                        alt="Dark textured background representing charcoal"
                        fill
                        className="object-cover opacity-20 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-products-bg-light dark:from-products-bg-dark via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-products-text-light dark:text-white mb-6">
                        Premium Coconut Charcoal
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                        Sustainable, high-calorie briquettes crafted for shisha and barbecue. Export-quality production from Indonesia's finest raw materials.
                    </p>
                    <div className="mt-10 flex justify-center gap-6">
                        <div className="flex items-center gap-2 text-products-primary">
                            <span className="material-icons">verified</span>
                            <span className="font-medium text-sm tracking-wide text-gray-800 dark:text-white uppercase">SGS Certified</span>
                        </div>
                        <div className="flex items-center gap-2 text-products-primary">
                            <span className="material-icons">eco</span>
                            <span className="font-medium text-sm tracking-wide text-gray-800 dark:text-white uppercase">100% Natural</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Products Showcase */}
            <section className="py-16 md:py-24 bg-products-bg-light dark:bg-products-bg-dark">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                    {/* Product 1: Cube */}
                    <div className="group flex flex-col items-center bg-products-card-light dark:bg-products-card-dark rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                        <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/images/products/Cube.jpeg"
                                alt="Premium Cube Briquettes"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute top-8 right-8 bg-products-primary text-black text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-full shadow-lg">
                                Best Seller
                            </div>
                        </div>
                        <div className="w-full max-w-4xl px-8 py-12 md:px-16 md:py-16 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="flex-1">
                                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-products-text-light dark:text-white mb-6">
                                        Premium Cube Briquettes
                                    </h3>
                                    <div className="h-1.5 w-20 bg-products-primary mb-8 mx-auto md:mx-0"></div>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                        Our signature cube shape offers the perfect balance of heat distribution and longevity. Ideal for shisha lounges requiring consistent performance. Crafted with precision for the discerning global market.
                                    </p>
                                </div>
                                {/* Specs */}
                                <div className="w-full md:w-80 bg-products-bg-light/50 dark:bg-black/20 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="text-products-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 text-center md:text-left">Technical Specs</h4>
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">timer</span> Burn Time
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">2.5+ Hours</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">whatshot</span> Heat Level
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">High (7200+)</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">straighten</span> Sizes
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">25mm, 26mm, 27mm</span>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        <button className="w-full py-4 bg-products-primary text-white hover:bg-yellow-600 transition-colors uppercase text-xs font-bold tracking-widest rounded-lg shadow-md">
                                            Request Full Specs
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 2: Hexagonal */}
                    <div className="group flex flex-col items-center bg-products-card-light dark:bg-products-card-dark rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                        <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/images/products/Hexa.jpeg"
                                alt="Hexagonal Gold Briquettes"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="w-full max-w-4xl px-8 py-12 md:px-16 md:py-16 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="flex-1">
                                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-products-text-light dark:text-white mb-6">
                                        Hexagonal Gold
                                    </h3>
                                    <div className="h-1.5 w-20 bg-products-primary mb-8 mx-auto md:mx-0"></div>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                        Unique hexagonal shape designed for efficient stacking and optimal airflow. Perfect for long burning sessions with consistent heat output and minimal ash production.
                                    </p>
                                </div>
                                {/* Specs */}
                                <div className="w-full md:w-80 bg-products-bg-light/50 dark:bg-black/20 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="text-products-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 text-center md:text-left">Technical Specs</h4>
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">timer</span> Burn Time
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">2.5+ Hours</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">whatshot</span> Heat Level
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">High</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">straighten</span> Sizes
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">20mm x 50mm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 3: Finger */}
                    <div className="group flex flex-col items-center bg-products-card-light dark:bg-products-card-dark rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                        <div className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/images/products/hexa line.jpeg"
                                alt="Finger Style Briquettes"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="w-full max-w-4xl px-8 py-12 md:px-16 md:py-16 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="flex-1">
                                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-products-text-light dark:text-white mb-6">
                                        Finger / Stick Style
                                    </h3>
                                    <div className="h-1.5 w-20 bg-products-primary mb-8 mx-auto md:mx-0"></div>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                        Cylindrical stick shape designed for specialized airflow and rapid ignition. Provides intense heat, making it excellent for grilling or traditional usage.
                                    </p>
                                </div>
                                {/* Specs */}
                                <div className="w-full md:w-80 bg-products-bg-light/50 dark:bg-black/20 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="text-products-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 text-center md:text-left">Technical Specs</h4>
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">timer</span> Burn Time
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">2.0+ Hours</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">whatshot</span> Heat Level
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">Very High</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">straighten</span> Sizes
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">18mm x 35mm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product 4: Flat */}
                    <div className="group flex flex-col items-center bg-products-card-light dark:bg-products-card-dark rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-all duration-500 hover:shadow-2xl">
                        <div className="relative w-full aspect-[3/2] md:aspect-[16/9] overflow-hidden">
                            <Image
                                src="/images/products/RCLw.jpeg"
                                alt="Flat Signature Briquettes"
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        <div className="w-full max-w-4xl px-8 py-12 md:px-16 md:py-16 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                                <div className="flex-1">
                                    <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-products-text-light dark:text-white mb-6">
                                        RCL
                                    </h3>
                                    <div className="h-1.5 w-20 bg-products-primary mb-8 mx-auto md:mx-0"></div>
                                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                                        Distinct flat shape offering great stability and surface area. Engineered for specific heat management needs, ensuring a smooth and consistent experience.
                                    </p>
                                </div>
                                {/* Specs */}
                                <div className="w-full md:w-80 bg-products-bg-light/50 dark:bg-black/20 p-8 rounded-xl border border-gray-100 dark:border-gray-700">
                                    <h4 className="text-products-primary font-bold text-xs uppercase tracking-[0.2em] mb-6 text-center md:text-left">Technical Specs</h4>
                                    <div className="space-y-5">
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">timer</span> Burn Time
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">1.5+ Hours</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">whatshot</span> Heat Level
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">Medium-High</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 font-medium">
                                                <span className="material-icons text-products-primary text-lg">straighten</span> Sizes
                                            </span>
                                            <span className="text-sm font-bold text-products-text-light dark:text-white">25mm x 25mm x 15mm</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-products-bg-light dark:bg-products-bg-dark">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <span className="text-products-primary uppercase tracking-[0.2em] text-sm font-bold mb-4 block">B2B Partnership</span>
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-products-text-light dark:text-white mb-8">
                        Ready to Order?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
                        Contact our sales team for a custom quote or to request product samples. We offer private labeling (OEM) services.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-products-primary text-white font-bold rounded shadow-lg hover:bg-yellow-600 transition-colors uppercase tracking-widest text-sm">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
