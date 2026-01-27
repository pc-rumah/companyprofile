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
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALlXA-FG0P0wncgtUIDFSaLF17Ubc1ztkUPy_4BXT83pJAZzv2BLdiQq3FKJJm-WH0qGkwOChBurWvO1TTbjxnK3sqtvenQI-SNyNFWNPKucKKYdKTq8XF6WBmx3gXaiezhquAU7ThRZox5PP0L4DXoRYV8gCfw8Wli-7eHRYUuLzjUCYrfl_znrO0uFvujkqV7muirFOiWMP4Iiwyr9g6Gs4PK-W0irTp5I8otv66Q1QRyFxOfxsAWa_O57pCi5sHLXWxsnrRMNR_"
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
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORsZtxRIfaSwKxkYVQ4gbu1gUiNYKfU_mwCp-exFmvX3viad3P-0TJDbHj7kQI70okYm2dyqAxRDa0iwicxUuewa9Q0I-OmCAFAh8kQeB6bcubXEi3lYVxIvuzr2ltMzJ6IJ_C-ashZUi79VSClHkBcpTaEQohH4xOjT4Cz3BJ7875EpoX7_l5qjuYiHqcG66w0ENiQVwUIBrKSE4e8l5f92LU69WRNNKX7TpEY3L9z-ZSSmp0MGW0mAkhEUbOzYaPm498RqV5wiw"
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
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHvmynsgi8QkdICtSDbkBZaeRRbH7F7KekSXwKDrSCudHU9XPJIF_otP8KhaGoo9PwiGP-UB536qh-FInv98dmy2mxg0x_g-Kli5H2bNvw3r7ORpj2V1AsoBYgu6Q28Lzz_bWW8MtwM69g74BuFfEioCdT9qihPvwiLQdFt5MSfEJyb0TFFOOF7q1g3fE16Kn33JIq0gxwbMz_RcwsaTMYrKaf2RgaMKGJhrNEVkcQ6xz6e-aiSHhl-vJ8OTNRYM1nW4xmI4lnEoFR"
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

            {/* Premium Briquettes Preview */}
            <section className="py-20 bg-about-bg-light dark:bg-about-bg-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Premium Briquettes</h2>
                        <p className="text-gray-600 dark:text-[#A89689] max-w-2xl mx-auto">High calorie, low ash content, and long burning time. Explore our diverse range of shapes designed for optimal performance.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Cube Briquettes", desc: "Classic cube shape perfect for shisha and BBQ. Provides consistent heat distribution and stability.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZpD-cLNHeiSL_r5RSUFrWOhq8I1x0noW9R5PZx7zZNShykYtOqwXIsVpENnwN-SAua0p8jGm27zaO2MITp0gGb_nct_9q_S5pxkJh3b2kYMvY5yKdp_Ju6GGnv7GD10_kAFhASHDK2ftyxAR8dM9xcnMI7v_UxJ3bKhYFFOWUjlh_74N3vMvUS62mr72Um1FJQAetRJIaqwj2v6tPy9AWZd_UGzmeYWuKZNLyu2kSd20fK81Z6dbnirgoPN7Iwk8h161PwgWJ8vl4" },
                            { title: "Hexagonal Finger", desc: "Unique hexagonal design allows for better airflow stacking, ensuring a longer burning duration.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5x3Nx7mBiojgxkRXt7fipNtTL11BJw_gjdIWVJaIPZJGYsNt3DiNvO_3ewoWrXj46j8hqV_kgPVTYwiGRTlbs7pCtVd1HZJBpJafr05vek-DEYiHgshxiHT3cA4V8Pj6pwTSNGjnyZO64qhRhv3L1M0SSYjnThdyG2tmdKPFVoOJK0Ora8rN5gamFuSRhHTQiy4EgTL9HNnoqIWAYfQ5VKk85Voblv8ttUsqZTZDrl-HvD3DtVAMZSfeIDC8cONie2rgEtaGJ7_CS" },
                            { title: "Grooved Finger", desc: "Engineered with surface grooves to increase surface area for faster ignition and intense heat.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClOpbsj6oQw-nn_rLvt9Gfxgvt5vTCgw1PlJFiakOxXpHow_vwixg8o83TqBiMxob5l05CXYVflO6_YnoBZoW3yWLmaAjvRxBwwxSahsTJZAvXy4vwMFuAvt9pXjIAMosVvu_ZZBpnU8ClBHvMZAtM235r437fcPs0dzyLZcZ64M5rdwKXya93bWRAR-8BSdKSbfslPRXbQjMJ1yo-osNG23sV4yxb0ZzZ1mszOK7szIG0pMT9KLn1aXCYzo25ny6u81h2y3bBukuv" }
                        ].map((product, idx) => (
                            <div key={idx} className="bg-white dark:bg-about-surface-dark rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-[#EADDD0] dark:border-[#4A3D33]">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-about-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Image
                                        src={product.img}
                                        alt={product.title}
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{product.title}</h3>
                                    <p className="text-gray-600 dark:text-[#A89689] text-sm mb-4">{product.desc}</p>
                                    <span className="inline-flex items-center text-about-primary text-sm font-semibold cursor-pointer">
                                        View Specs <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </span>
                                </div>
                            </div>
                        ))}
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
