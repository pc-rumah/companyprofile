"use client";

import { useState, useRef } from "react";
import HorizontalTimeline from "@/components/theCompany/horizontalTimeline";
import FloatingImpact from "@/components/theCompany/floatingImpact";
import BentoProfile from "@/components/theCompany/bentoProfile";
import VideoFeed from "@/components/theCompany/videoFeed";
import Image from "next/image";

export default function TheCompany() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <main className="bg-company-surface text-company-on-surface font-manrope antialiased min-h-screen flex flex-col">
      {/* Centered Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Industrial factory"
            className="w-full h-full object-cover"
            src="/images/theCompany/tambang.png"
            fill
            loading="eager"
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

      {/* Floating Impact Stats */}
      <FloatingImpact />

      {/* Horizontal Timeline Section */}
      <HorizontalTimeline />

      {/* Bento Profile Layout */}
      <BentoProfile />

      {/* Video Feed Section */}
      <VideoFeed onPlayVideo={setActiveVideo} />

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
