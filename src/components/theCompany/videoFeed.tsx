import Image from 'next/image'

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
                    <p className="text-company-primary font-bold uppercase tracking-widest text-sm mb-2">Process in Motion</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-company-on-surface">Video Gallery</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {/* Featured Video (Spans 2 cols, 2 rows) */}
                    <div
                        className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                        onClick={() => openVideoModal('https://www.w3schools.com/html/mov_bbb.mp4')}
                    >
                        <Image
                            alt="Featured Video Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNe7ZTHrZgYsvtbL_EnZL8QrJ598UAQ3TzJh_IVJv8mKziRh_iwUgCjtcALeN5pKlrsn7PXVgU8xkAZ_GJly-juz0UAlmVaKk5LseSWmBTuvOnNX4NWYqo8WsRIdVJavXeQLmgDn83UfvzTFgNaeQnx5_me6LYbgQAg2xmQKqfEQDIxQ6cmrjkuFpctTSBAWWHrEeDQ9I8eiRtVzrh5ky0OOOtaZpMvLRuodLhQ6r89-Kk7r1H3NTyJlMsPqjal1kNtwiXI4cXgNIy"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-xl group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-4xl ml-2">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                            <h3 className="text-white font-bold text-2xl md:text-3xl">Automated Sorting Facility</h3>
                            <p className="text-company-on-surface-variant text-base mt-2">Inside our state-of-the-art production line ensuring maximum efficiency.</p>
                        </div>
                    </div>

                    {/* Secondary Video 1 */}
                    <div
                        className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                        onClick={() => openVideoModal('https://www.w3schools.com/html/mov_bbb.mp4')}
                    >
                        <Image
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-DqQ5R0Pfgj0KZyRvuOcGTSlm6DBumenQjU146RO5HQq5HRqUyfstx8EzCu98V5mZ3jJmkuikkYu1QbQw8M7wBIeY2V1Qj2NZtf2DRcfHcx8h9_Gj67fHg81YMJEiQihxX5hjjqhun9uueUkQczQqpOxFAmexpfTRPeBsE0Kv4vl3qA0_sTdaqStAuJc7gbdI0BWCezNQyFr8grsTga75PgvWCLozoknTFYf_zGuJtR4Cnw-Qy0cnBxfBHx8dV8Gmou6zC73mlGSO"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-bold text-lg">Quality Control</h4>
                        </div>
                    </div>

                    {/* Secondary Video 2 */}
                    <div
                        className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                        onClick={() => openVideoModal('https://www.w3schools.com/html/mov_bbb.mp4')}
                    >
                        <Image
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAznYEqsowpMbQrxR5OiSdMggu7bGrmRwM0BfX4z7duGQPS7LsfOL_1HjFES98m7q8JJzxu6OaDQsHlTz7o8A_TU0zg5-ayu3AtfYMuZRtmLKPTwQvE9UO8-NPsmSgNlzd-HPBsRRbMETJE1Yl-uWsOXl386nBWYQWQG8_wxR3I8PEJGBJk9dCcLAVtwJp6oiDnL2CFA74dpjBVZlKuuHIay4enwqNjtVmuQ2b_zoPjLOKY0W8JbiXHln1yjXHjTezFODc90HwOvEOu"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-bold text-lg">Raw Materials</h4>
                        </div>
                    </div>

                    {/* Secondary Video 3 */}
                    <div
                        className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                        onClick={() => openVideoModal('https://www.w3schools.com/html/mov_bbb.mp4')}
                    >
                        <Image
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKxf3sVZBil2nuoQW4oSvCaii67TYqAyf1MIiWs2p0nvhJZEV-mWrw6iM1ih6iPd8L3vr1i6FOQ0KUPKlQr5r-udca3XhTgbDODTE6roo0UP2bHJO3EcM6rtghHypvamTZ3EjfaG_aOuaVmfhAbp4h8bSsQ02XgU4LNHOQPvh2QYoOlCWLnknvMAWhgIM4e-GbaN8cu9a8UkTa1k6kUy76S52HPQ2VDoDVIwyxLAQ9_t7ijy9Uz4l9pi8_jZk496BV2nvtExshGwJ"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-bold text-lg">Shipping</h4>
                        </div>
                    </div>

                    {/* Secondary Video 4 */}
                    <div
                        className="group relative overflow-hidden rounded-3xl bg-company-surface-container cursor-pointer"
                        onClick={() => openVideoModal('https://www.w3schools.com/html/mov_bbb.mp4')}
                    >
                        <Image
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtMeywb-DEcxrvbdhMMICxpJpr9oTMrhxJHkHBTKMsQeH8dLsTNxKYQMX4gu1qHC1oFBEBqkSIoS3i-nVe_l4W1nctXxc_6O05Uj0xZRkzLsQdjkGUE_Hmfe92PaSWZ-4CF0fMXM85ROe3O6vcvLMBTKlR6ouv2rUGd4PjnO5qdMJMy_Vg3OQmVbkhHCPU3Pq8Q0iGUj9NVUAuKoFG-v9gTHFGoBRLqV15pfBqHQmDYvb40WpoJSZM-3Z3MR-cAcxq4ALHcVZvGyUT"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-14 h-14 rounded-full bg-company-primary/90 flex items-center justify-center text-company-surface shadow-lg group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="text-white font-bold text-lg">Product Burn Test</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

