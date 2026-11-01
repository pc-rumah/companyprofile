import Image from "next/image";
import { CompanyImage } from "@/lib/supabase/the-company";

interface BentoProfileProps {
  images: CompanyImage[];
}

export default function BentoProfile({ images }: BentoProfileProps) {
  const getImage = (slot: string) =>
    images.find((img) => img.slot === slot);

  const bentoSlots = [
    "bento_1",
    "bento_2",
    "bento_3",
    "bento_4",
    "bento_5",
    "bento_6",
    "bento_7",
  ];

  return (
    <section className="py-16 bg-company-surface-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[250px]">
          {/* Bento Cell: Profile & Bio (Spans 2 cols, 2 rows) */}
          <div className="md:col-span-2 md:row-span-2 bg-company-surface p-6 sm:p-10 rounded-3xl border border-company-outline-variant shadow-xl flex flex-col justify-between h-auto md:h-full">
            <div>
              <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-company-primary p-1 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-company-surface-container flex items-center justify-center overflow-hidden">
                    <span className="text-company-primary font-black text-2xl sm:text-3xl">
                      CB
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-company-on-surface leading-tight mb-1">
                    CASTLE BRIQUETTE
                  </h2>
                  <p className="text-company-primary font-medium text-base sm:text-lg">
                    @castle_briquette
                  </p>
                </div>
              </div>
              <p className="text-company-on-surface-variant text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8">
                Leading the future of sustainable charcoal production. 500MT
                Monthly Capacity | 100% Eco-Friendly.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-4 sm:py-6 border-y border-company-outline-variant mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="font-bold text-company-on-surface text-2xl sm:text-3xl">
                    8
                  </div>
                  <div className="text-[10px] sm:text-xs text-company-on-surface-variant uppercase tracking-widest mt-1 sm:mt-2">
                    Posts
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-company-on-surface text-2xl sm:text-3xl">
                    9
                  </div>
                  <div className="text-[10px] sm:text-xs text-company-on-surface-variant uppercase tracking-widest mt-1 sm:mt-2">
                    Followers
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-company-on-surface text-2xl sm:text-3xl">
                    3
                  </div>
                  <div className="text-[10px] sm:text-xs text-company-on-surface-variant uppercase tracking-widest mt-1 sm:mt-2">
                    Following
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-company-primary text-company-surface py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-opacity-90 transition-all active:scale-[0.98] cursor-pointer">
              Follow Business
            </button>
          </div>

          {/* Dynamic Bento Image Cells */}
          {bentoSlots.map((slot) => {
            const img = getImage(slot);
            if (!img) return null;

            const isWide = img.col_span === 2;

            return (
              <div
                key={slot}
                className={`h-[250px] md:h-full group relative overflow-hidden rounded-3xl bg-company-surface-container ${
                  isWide ? "md:col-span-2" : ""
                }`}
              >
                <Image
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={img.src}
                  fill
                  loading="eager"
                  sizes={
                    isWide
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 100vw, 25vw"
                  }
                />
                {img.caption && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{img.caption}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
