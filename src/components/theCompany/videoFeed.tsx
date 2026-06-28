import Image from "next/image";

interface VideoFeedProps {
  onPlayVideo: (videoSrc: string) => void;
}

export default function VideoFeed({ onPlayVideo }: VideoFeedProps) {
  const openVideoModal = (videoSrc: string) => {
    onPlayVideo(videoSrc);
  };
  return (
    <section className="py-16 bg-company-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-10">
          <p className="text-company-primary font-bold uppercase tracking-widest text-sm mb-2">
            Process in Motion
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-company-on-surface">
            Video Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {/* Featured Video (Spans 2 cols, 2 rows) */}
          <div
            className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("/video/production.mp4")}
          >
            <Image
              alt="Featured Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbProduksi.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-white font-bold text-2xl md:text-3xl">
                Production Process Overview
              </h3>
              <p className="hidden lg:block text-company-on-surface-variant text-base mt-2">
                Inside our state-of-the-art production line ensuring maximum
                efficiency.
              </p>
            </div>
          </div>

          {/* Secondary Video 1 */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("/video/Production2.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbProduction2.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">
                Raw Material Handling
              </h4>
            </div>
          </div>

          {/* Secondary Video 2 */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("/video/stuffing.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbstuffing.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">Stuffing Process</h4>
            </div>
          </div>

          {/* Secondary Video 3 */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("/video/packaging.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbPack1.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">
                Packaging Ahmad C25
              </h4>
            </div>
          </div>

          {/* Secondary Video 4 */}
          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("video/Qualitycontrol.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbQc.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">
                Product Burn Test
              </h4>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("video/vid6.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbvid6.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">
                Packing Hexa type
              </h4>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
            onClick={() => openVideoModal("video/vid7.mp4")}
          >
            <Image
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              src="/images/theCompany/thumbvid7.PNG"
              fill
              loading="eager"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  play_circle
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white font-bold text-lg">Unload Process</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
