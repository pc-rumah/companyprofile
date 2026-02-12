import Image from "next/image";
import Link from 'next/link';

export default function Certificates() {
    return (
        <main className="relative z-10 bg-cert-charcoal-deep font-sans text-gray-300 antialiased overflow-x-hidden selection:bg-cert-primary selection:text-white">
            <div className="fixed inset-0 bg-noise pointer-events-none z-0"></div>

            {/* Hero Section */}
            <section className="h-screen w-full flex flex-col items-center justify-center px-6 relative border-b border-white/5">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 opacity-20 text-[20vw] font-serif italic text-cert-gold-muted pointer-events-none select-none whitespace-nowrap">
                    Quality
                </div>
                <div className="max-w-4xl text-center relative z-10 scale-90 md:scale-100">
                    <span className="text-cert-gold text-sm uppercase tracking-[0.5em] mb-6 block font-medium">Global Accreditation</span>
                    <h1 className="text-6xl md:text-9xl font-serif font-black text-white mb-8 leading-none">
                        RECOGNIZED <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-cert-gold via-[#F1E2A8] to-cert-gold-muted italic">QUALITY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Our commitment to excellence is verified by international standards. Explore our certifications below.
                    </p>
                    <div className="mt-16 flex flex-col items-center gap-4 animate-bounce">
                        <span className="text-[10px] uppercase tracking-widest text-cert-gold-muted">Scroll to Explore</span>
                        <span className="material-symbols-outlined text-cert-gold">expand_more</span>
                    </div>
                </div>
            </section>

            {/* Certificate 1 - Eco-Friendly */}
            <section className="min-h-screen w-full flex flex-col md:flex-row items-stretch border-b border-white/5 relative z-10 bg-cert-charcoal-deep/95 backdrop-blur-sm">
                <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center order-2 md:order-1">
                    <div className="max-w-md">
                        {/* <span className="text-cert-primary text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Chapter 01</span> */}
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Factory Audit Certificate</h2>
                        {/* <p className="text-cert-gold uppercase tracking-[0.2em] text-sm font-semibold mb-8">ISO 14001:2015 Certified</p> */}
                        <p className="text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
                            KAN-accredited laboratory test results for coconut shell charcoal briquettes (moisture, ash, volatile matter, fixed carbon)
                        </p>
                        <Link
                            href="/sertif/075 FAC PT. CASTLE TRADING GROUP.pdf"
                            target="_blank"
                            className="group flex w-fit items-center gap-4 bg-cert-primary text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-cert-charcoal-deep shadow-2xl"
                        >
                            <span>Download PDF</span>
                            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">download</span>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-cert-charcoal-light flex items-center justify-center p-8 md:p-16 order-1 md:order-2">
                    <div className="relative group w-full max-w-lg">
                        <div className="absolute -inset-4 border border-cert-gold/30 scale-105 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border-8 border-cert-charcoal-deep bg-white h-[400px] flex items-center justify-center">
                            {/* Placeholder for PDF Preview - using icon since we don't have the image */}
                            <div className="flex flex-col items-center justify-center text-cert-charcoal-deep opacity-80 p-8 text-center">
                                <span className="material-symbols-outlined text-8xl mb-4 text-cert-gold">eco</span>
                                <h3 className="font-serif text-3xl font-bold mb-2">Factory Audit Certificate</h3>
                                <p className="uppercase tracking-widest text-sm">KAN-accredited laboratory test results</p>
                                {/* <p className="mt-8 text-xs text-gray-500 font-mono">CERTIFICATE NO: 123456789</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate 2 - Export Grade */}
            <section className="min-h-screen w-full flex flex-col md:flex-row items-stretch border-b border-white/5 bg-[#141416] relative z-10">
                <div className="w-full md:w-1/2 bg-cert-charcoal-light/50 flex items-center justify-center p-8 md:p-16 order-1">
                    <div className="relative group w-full max-w-lg">
                        <div className="absolute -inset-4 border border-cert-gold/30 scale-105 group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border-8 border-cert-charcoal-deep bg-white h-[400px] flex items-center justify-center">
                            {/* Placeholder for PDF Preview */}
                            <div className="flex flex-col items-center justify-center text-cert-charcoal-deep opacity-80 p-8 text-center">
                                <span className="material-symbols-outlined text-8xl mb-4 text-cert-gold">science</span>
                                <h3 className="font-serif text-3xl font-bold mb-2">Certificate of Analysis</h3>
                                <p className="uppercase tracking-widest text-sm">Quality Analysis</p>
                                {/* <p className="mt-8 text-xs text-gray-500 font-mono">CERTIFICATE NO: 987654321</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-24 flex flex-col justify-center order-2">
                    <div className="max-w-md">
                        {/* <span className="text-cert-primary text-xs uppercase tracking-[0.4em] font-bold mb-4 block">Chapter 02</span> */}
                        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">Certificate of Analysis</h2>
                        {/* <p className="text-cert-gold uppercase tracking-[0.2em] text-sm font-semibold mb-8">Premium Grade A Certification</p> */}
                        <p className="text-lg md:text-xl text-gray-400 mb-12 font-light leading-relaxed">
                            accreditation by KAN for SNI ISO/IEC 17025:2017 /ISO/IEC 17025:2017 with certificate number LPTEST METHODS
                            1682-IDN
                        </p>
                        <Link
                            href="/sertif/A.0847 COA PT. CASTLE TRADING GROUP - FA.pdf"
                            target="_blank"
                            className="group flex w-fit items-center gap-4 bg-cert-primary text-white px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm transition-all hover:bg-white hover:text-cert-charcoal-deep shadow-2xl"
                        >
                            <span>Download PDF</span>
                            <span className="material-symbols-outlined transition-transform group-hover:translate-y-1">download</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer / Summary Section */}
            {/* <section className="h-screen w-full flex flex-col items-center justify-center text-center p-6 bg-cert-charcoal-deep relative overflow-hidden z-10">
                <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                    <div className="w-[80vw] h-[80vw] border-[1px] border-cert-gold rounded-full"></div>
                </div>
                <div className="relative z-10">
                    <h3 className="font-serif text-5xl italic text-white mb-8">Excellence Without Compromise</h3>
                    <div className="h-px w-32 bg-cert-gold mx-auto mb-12"></div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="text-center">
                            <div className="text-cert-gold text-3xl font-serif mb-2">100%</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">Natural Product</div>
                        </div>
                        <div className="text-center">
                            <div className="text-cert-gold text-3xl font-serif mb-2">ISO</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">Standardized</div>
                        </div>
                        <div className="text-center">
                            <div className="text-cert-gold text-3xl font-serif mb-2">Grade A</div>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500">Export Quality</div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
                    <div className="font-serif italic text-white/40 text-sm tracking-widest uppercase">PT Castle Trading Group</div>
                </div>
            </section> */}
        </main>
    );
}
