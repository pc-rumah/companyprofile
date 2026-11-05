"use client";

import { useState } from "react";
import Image from "next/image";
import BentoProfile from "@/components/theCompany/bentoProfile";
import VideoFeed from "@/components/theCompany/videoFeed";
import { CompanyImage, CompanyVideo } from "@/lib/supabase/the-company";

interface TheCompanyClientProps {
  images: CompanyImage[];
  videos: CompanyVideo[];
}

export default function TheCompanyClient({ images, videos }: TheCompanyClientProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const heroImage = images.find((img) => img.slot === "hero");
  const heroSrc = heroImage?.src ?? "/images/theCompany/tambang.png";
  const heroAlt = heroImage?.alt ?? "Industrial factory";

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <main className="bg-company-surface text-company-on-surface font-manrope antialiased min-h-screen flex flex-col">
      {/* Centered Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt={heroAlt}
            className="w-full h-full object-cover"
            src={heroSrc}
            fill
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-company-surface/20 via-transparent to-company-surface"></div>
        </div>
        <div className="relative z-10 text-center px-8 max-w-4xl mt-20">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-company-on-surface mb-8 tracking-tight leading-tight">
            Our Legacy in Energy
          </h1>
          <p className="text-xl md:text-3xl text-company-on-surface-variant font-light max-w-2xl mx-auto">
            From a local vision to a global standard in sustainable industrial
            production.
          </p>
        </div>
      </section>

      {/* Bento Profile Layout */}
      <BentoProfile images={images} />

      {/* Video Feed Section */}
      <VideoFeed videos={videos} onPlayVideo={setActiveVideo} />

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-5xl bg-company-surface-container rounded-2xl overflow-hidden shadow-2xl transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-company-primary text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
              onClick={closeVideoModal}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="aspect-video bg-black w-full">
              <video
                className="w-full h-full"
                controls
                autoPlay
                playsInline
                preload="metadata"
                src={activeVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

