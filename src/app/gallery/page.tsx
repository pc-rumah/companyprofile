import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PT Castle Trading Group - Factory Storyboard",
  description:
    "Witness the journey of excellence. From raw material selection to the intense heat of carbonization.",
};

export default function GalleryPage() {
  return (
    <div className="bg-gallery-bg-light dark:bg-gallery-bg-dark font-roboto antialiased transition-colors duration-300">
      <header className="relative bg-gallery-surface-dark py-24 px-6 text-center border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-gallery-primary font-oswald font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Factory Insight
          </span>
          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6 uppercase">
            Production Storyboard
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Witness the journey of excellence. From raw material selection to
            the intense heat of carbonization, every step is a testament to our
            dedication to quality.
          </p>
        </div>
      </header>

      {/* <section className="bg-white dark:bg-gallery-bg-dark py-16 md:py-24 border-b border-gray-200 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/3">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Intro</span>
                                <div className="h-px bg-gray-300 dark:bg-gray-600 w-12"></div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                                Step Inside <span className="text-gallery-primary">Our Plant</span>
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                Before exploring our detailed photo gallery, take a moment to experience the atmosphere of our facility. This short film captures the scale, rhythm, and precision of our daily operations.
                            </p>
                        </div>
                        <div className="w-full md:w-2/3 relative group cursor-pointer">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-video bg-gray-900">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    poster="https://lh3.googleusercontent.com/aida-public/AB6AXuAwVL7vExXl1O-zniYQpw0TCXxh9zI49Ti2wIZMMZWEIOSDlLd482yKrLmVGC3YxkwOzTEDh0RsRoKH-NsX754du7Ek4ByhvWVTp43s5iq95d-kLAon6FFk2CshL_eZw66pg861hOsYJ7x_Rpo7wjMNkBwxZp0esicVACuVX2H4nXwfeqGoRQtPwK5geK3xImm_6g-l3t-AOEM23UIj-JZqa_uUOzaNnWgvBORmgk8AdwQzEyh9up-6UdciSx2u4Cj9y63hlfbfG1a9"
                                >
                                    <source src="/video/vid1.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

      <section className="bg-gallery-surface-light dark:bg-gallery-surface-dark overflow-hidden group">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Massive warehouse filled with stacked bags of raw charcoal"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08 (1).jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Step 01</span> */}
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Scale of{" "}
                <span className="text-gallery-primary">Operations</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our facility houses extensive storage capabilities, ensuring a
                consistent supply chain year-round. We process tons of premium
                raw materials daily, meticulously sorting them to meet
                international export standards. The sheer volume of our
                warehouse reflects our readiness to fulfill global demand.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    check_circle
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    High-capacity storage facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    check_circle
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Climate-controlled environment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] overflow-hidden group">
        <Image
          alt="Atmospheric factory interior"
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
          src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08 (2).jpeg"
          fill
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full p-12 flex flex-col items-center z-10">
          <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">
            Production Flow
          </span>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase shadow-black drop-shadow-lg">
            Core Manufacturing
          </h3>
        </div>
      </section>

      <section className="bg-white dark:bg-gallery-bg-dark overflow-hidden group">
        <div className="flex flex-col md:flex-row-reverse min-h-[600px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Worker operating a conveyor belt transporting charcoal"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08.jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-gray-50 dark:bg-black/20">
            <div className="max-w-lg mx-auto md:mr-0 md:ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
                {/* <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Step 02</span> */}
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Mechanized{" "}
                <span className="text-gallery-primary">Efficiency</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Automation meets skilled oversight. Our conveyor systems
                streamline the movement of materials, reducing breakage and
                ensuring uniform processing. Dedicated operators monitor every
                stage, guaranteeing that only the best pieces move forward in
                the production line.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    settings
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Streamlined material transport
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    visibility
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Continuous visual inspection
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="relative h-[80vh] overflow-hidden group">
                <Image
                    alt="Intense production environment"
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (1).jpeg"
                    fill
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-0 left-0 w-full p-12 flex flex-col items-center z-10">
                    <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">Quality Focus</span>
                    <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase shadow-black drop-shadow-lg">Industrial Mastery</h3>
                </div>
            </section> */}

      <section className="bg-gallery-surface-light dark:bg-gallery-surface-dark overflow-hidden group">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Charcoal briquettes glowing red hot on a burner test"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (2).jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Step 03</span> */}
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                The{" "}
                <span className="text-gallery-primary">
                  processing materials
                </span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                The foundation of quality lies in the raw materials. We
                meticulously source and prepare our materials, ensuring they
                meet the highest standards for carbon content and purity. This
                careful selection process is the first step in creating a
                superior product that delivers exceptional performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] overflow-hidden group">
        <Image
          alt="Expert workers inspecting product"
          className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
          src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (3).jpeg"
          fill
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full p-12 flex flex-col items-center z-10">
          <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm mb-4">
            Standardized Sorting
          </span>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-white uppercase shadow-black drop-shadow-lg">
            Human Precision
          </h3>
        </div>
      </section>

      <section className="bg-white dark:bg-gallery-bg-dark overflow-hidden group">
        <div className="flex flex-col md:flex-row-reverse min-h-[600px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Workers manually sorting charcoal in a large warehouse"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09.jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24 bg-gray-50 dark:bg-black/20">
            <div className="max-w-lg mx-auto md:mr-0 md:ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
                {/* <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Step 04</span> */}
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Precision <span className="text-gallery-primary">Sorting</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Human expertise plays a vital role. In our sieving and sorting
                stations, experienced workers separate the charcoal by size and
                quality. This manual intervention ensures that no irregularities
                slip through the cracks, maintaining a premium standard for our
                packaging.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    grid_on
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Multi-stage sieving process
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="material-icons text-gallery-secondary mr-3 mt-1">
                    groups
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Expert manual quality control
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gallery-surface-light dark:bg-gallery-surface-dark overflow-hidden group">
        <div className="flex flex-col md:flex-row min-h-[600px]">
          <div className="w-full md:w-1/2 relative h-[400px] md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <Image
              alt="Workers sitting on a pile of charcoal doing final selection and packing"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              src="/images/gallery/WhatsApp Image 2026-02-10 at 10.21.10.jpeg"
              width={800}
              height={600}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center p-8 md:p-16 lg:p-24">
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="bg-gallery-primary text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">Step 05</span> */}
                <div className="h-px bg-gray-300 dark:bg-gray-600 flex-grow"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-oswald font-bold text-gray-900 dark:text-white mb-6 uppercase">
                Fire <span className="text-gallery-primary">Test</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Quality isn't just claimed; it's proven. We rigorously test our
                briquettes for burn consistency, heat output, and ash content.
                The glowing embers you see here demonstrate the purity and high
                carbon content of our product, ensuring a long-lasting, clean
                burn for the end consumer.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-gallery-primary hover:bg-orange-600 text-white font-oswald font-bold uppercase tracking-wider py-3 px-8 rounded transition-colors duration-300 flex items-center"
                >
                  Contact Sales
                  <span className="material-icons ml-2 text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
