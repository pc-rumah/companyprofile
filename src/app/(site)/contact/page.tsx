import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - Sales & Export Inquiries",
  description:
    "Contact PT Castle Trading Group for quotations, OEM/custom packaging, and sample requests for coconut charcoal briquettes. Factory located in Semarang, Central Java, Indonesia.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sales & Export | PT Castle Trading Group",
    description:
      "Send us an inquiry for premium coconut shell charcoal briquettes. Fast 24-hour response for international B2B buyers.",
    url: "/contact",
  },
};

export default function Contact() {
    const contactJsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact PT Castle Trading Group",
        description: "Official contact page for coconut charcoal sales, samples, and export inquiries.",
        mainEntity: {
            "@type": "LocalBusiness",
            name: "PT Castle Trading Group",
            telephone: "+62-857-3592-5977",
            email: "Castlegroup0101@gmail.com",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Ngrowo, Karangjati, Bergas",
                addressLocality: "Semarang Regency",
                addressRegion: "Central Java",
                postalCode: "50552",
                addressCountry: "ID",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: -7.176008,
                longitude: 110.428299,
            },
        },
    };

    return (
        <main className="min-h-screen bg-home-bg-dark text-white font-inter selection:bg-home-primary selection:text-white pt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactJsonLd),
                }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column */}
                    <div>
                        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl mb-16 leading-relaxed max-w-xl">
                            Have questions about our premium coconut shell charcoal briquettes? Send us a message and our trade specialists will respond within 24 hours.
                        </p>

                        <div className="space-y-16">

                            <div className="border-l-4 border-home-primary pl-8">
                                <h3 className="font-playfair text-2xl font-bold mb-3 flex items-center gap-3 text-white">
                                    <span className="material-icons text-home-primary">mail</span>
                                    Email
                                </h3>
                                <div className="flex flex-col gap-2 text-lg md:text-xl font-medium">
                                    <a href="mailto:Castlegroup0101@gmail.com" className="text-gray-300 hover:text-home-primary transition-colors w-fit">
                                        Castlegroup0101@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="border-l-4 border-home-primary pl-8">
                                <h3 className="font-playfair text-2xl font-bold mb-3 flex items-center gap-3 text-white">
                                    <span className="material-icons text-home-primary">call</span>
                                    Phone
                                </h3>
                                <div className="flex flex-col gap-2 text-lg md:text-xl font-medium">
                                    <a href="tel:+6285735925977" className="text-gray-300 hover:text-home-primary transition-colors w-fit">
                                        0857-3592-5977
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        {/* Visit Us */}
                        <div>
                            <h3 className="font-playfair text-3xl font-bold mb-8 flex items-center gap-3 text-white">
                                <span className="material-icons text-home-primary text-3xl">location_on</span>
                                Visit Us
                            </h3>
                            <address className="not-italic text-gray-300 text-lg leading-relaxed pl-11 border-l border-gray-800">
                                Ngrowo<br />
                                Karangjati, Bergas, Semarang Regency<br />
                                Central Java 50552, Indonesia
                            </address>
                        </div>

                        {/* Map Placeholder */}
                        <div className="relative w-full aspect-square md:aspect-video lg:aspect-square bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 group shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1957.699365379054!2d110.42829944692915!3d-7.176007989447596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70850062d537c9%3A0xd877ac600c8ff06c!2sPT%20CASTLE%20TRADING%20GROUP!5e1!3m2!1sen!2sid!4v1769607468355!5m2!1sen!2sid"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
