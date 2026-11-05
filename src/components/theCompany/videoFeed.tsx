import Image from "next/image";
import { CompanyVideo } from "@/lib/supabase/the-company";
import { getVideoUrl } from "@/lib/supabase/storage";

interface VideoFeedProps {
  videos: CompanyVideo[];
  onPlayVideo: (videoSrc: string) => void;
}

export default function VideoFeed({ videos, onPlayVideo }: VideoFeedProps) {
  const openVideoModal = (fileName: string) => {
    onPlayVideo(getVideoUrl(fileName));
  };

  const prefetchVideo = (fileName: string) => {
    if (typeof document !== "undefined") {
      const url = getVideoUrl(fileName);
      if (url && !document.querySelector(`link[rel="prefetch"][href="${url}"]`)) {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "video";
        link.href = url;
        document.head.appendChild(link);
      }
    }
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
          {videos.map((video) => {
            if (video.featured) {
              return (
                <div
                  key={video.id}
                  className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                  onClick={() => openVideoModal(video.file_name)}
                  onMouseEnter={() => prefetchVideo(video.file_name)}
                >
                  <Image
                    alt={`${video.title} - Factory Video`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    src={video.thumbnail}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-xl group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-4xl">
                        play_circle
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-bold text-2xl md:text-3xl">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="hidden lg:block text-company-on-surface-variant text-base mt-2">
                        {video.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={video.id}
                className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                onClick={() => openVideoModal(video.file_name)}
                onMouseEnter={() => prefetchVideo(video.file_name)}
              >
                <Image
                  alt={`${video.title} - Factory Video`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  src={video.thumbnail}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      play_circle
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent">
                  <h4 className="text-white font-bold text-lg">{video.title}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
