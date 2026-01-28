import Image from "next/image";

export default function About() {
    return (
        <main className="bg-about-bg-light dark:bg-about-bg-dark text-gray-900 dark:text-[#E5D5C6] transition-colors duration-300 font-outfit">
            {/* Header */}
            <header className="relative py-20 bg-about-surface-light dark:bg-about-bg-dark overflow-hidden">
                <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
                    {/* SVG Background */}
                    <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path className="text-gray-300 dark:text-about-primary" d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-outfit font-bold text-gray-900 dark:text-white mb-6">
                        Sustainable Energy from <span className="text-about-primary">Nature's Core</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-[#A89689] max-w-2xl mx-auto">
                        Transforming coconut shell waste into premium charcoal briquettes for the world.
                    </p>
                </div>
            </header>

            {/* Story Section */}
            <section className="py-16 md:py-0">
                <div className="flex flex-col md:flex-row min-h-[600px]">
                    <div className="w-full md:w-1/2 relative h-96 md:h-auto group overflow-hidden">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                        <Image
                            src="/images/buildings/factory.jpeg"
                            alt="Castle Trading Group Warehouse Facility"
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                    <div className="w-full md:w-1/2 bg-white dark:bg-about-bg-dark p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-12 bg-about-primary"></div>
                                <span className="uppercase tracking-widest text-sm font-bold text-about-primary">About Us</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Our Story</h2>
                            <div className="prose prose-lg text-gray-600 dark:text-[#A89689]">
                                <p>
                                    Founded with a vision to revolutionize the charcoal industry, <strong>PT Castle Trading Group</strong> stands at the forefront of sustainable energy production. Located in the heart of <strong>Semarang, Indonesia</strong>, we are strategically positioned to access the finest raw materials the archipelago has to offer.
                                </p>
                                <p>
                                    We are committed to an eco-conscious philosophy, turning what was once considered coconut shell waste into high-grade, renewable energy. Our state-of-the-art facility ensures that every briquette meets rigorous international standards.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 mt-4 border-t border-[#EADDD0] dark:border-[#4A3D33]">
                                <div className="flex items-start gap-4">
                                    <div className="bg-about-primary/10 p-3 rounded-lg text-about-primary">
                                        <span className="material-symbols-outlined text-3xl">public</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Global Reach</h4>
                                        <p className="text-sm text-gray-500 dark:text-[#A89689]">Proudly exported to the Middle East & beyond.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-about-primary/10 p-3 rounded-lg text-about-primary">
                                        <span className="material-symbols-outlined text-3xl">eco</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">100% Eco-friendly</h4>
                                        <p className="text-sm text-gray-500 dark:text-[#A89689]">Sustainable production from coconut waste.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Production Journey */}
            <section className="py-20 bg-white dark:bg-about-surface-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="w-full lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-[#EADDD0] dark:border-[#4A3D33] relative">
                                        <Image
                                            src="/images/about/1.jpeg"
                                            alt="Interior production area"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="h-48 rounded-2xl overflow-hidden shadow-lg border border-[#EADDD0] dark:border-[#4A3D33] bg-about-primary/5 flex items-center justify-center p-6 text-center">
                                        <p className="text-about-primary font-bold text-sm uppercase tracking-widest italic">Precision Processing</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="h-48 rounded-2xl overflow-hidden shadow-lg border border-[#EADDD0] dark:border-[#4A3D33] bg-about-bg-light dark:bg-about-bg-dark flex items-center justify-center p-6 text-center">
                                        <p className="text-gray-600 dark:text-[#A89689] text-sm">Turning what was once considered coconut shell waste into high-grade, renewable energy.</p>
                                    </div>
                                    <div className="h-64 rounded-2xl overflow-hidden shadow-lg border border-[#EADDD0] dark:border-[#4A3D33] relative">
                                        <Image
                                            src="/images/about/2.jpeg"
                                            alt="Factory floor operations"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-12 bg-about-primary"></div>
                                <span className="uppercase tracking-widest text-sm font-bold text-about-primary">Operational Excellence</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">Production Journey</h2>
                            <div className="prose prose-lg text-gray-600 dark:text-[#A89689]">
                                <p>Our state-of-the-art facility ensures that every briquette meets rigorous international standards. From the careful selection of raw coconut shells to the high-pressure carbonization process, every step is optimized for quality.</p>
                                <ul className="list-none space-y-4 p-0">
                                    <li className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-about-primary text-white flex items-center justify-center font-bold text-sm">1</span>
                                        <span className="text-gray-700 dark:text-[#E5D5C6]">Eco-conscious sourcing of coconut waste.</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-about-primary text-white flex items-center justify-center font-bold text-sm">2</span>
                                        <span className="text-gray-700 dark:text-[#E5D5C6]">Advanced carbonization and processing.</span>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-about-primary text-white flex items-center justify-center font-bold text-sm">3</span>
                                        <span className="text-gray-700 dark:text-[#E5D5C6]">Rigorous quality control for premium results.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white dark:bg-about-surface-dark border-t border-[#EADDD0] dark:border-[#4A3D33]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Partner with Us?</h2>
                    <p className="text-gray-600 dark:text-[#A89689] mb-8 text-lg">We supply premium charcoal bulk orders worldwide. Contact us today for a quote.</p>
                    <button className="bg-about-primary hover:bg-[#8B4513] text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-about-primary/30">
                        Contact Sales
                    </button>
                </div>
            </section>
        </main>
    );
}
