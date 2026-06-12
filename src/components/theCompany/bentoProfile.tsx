import Image from 'next/image';


export default function BentoProfile() {
    return (
        <section className="py-16 bg-company-surface-lowest">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {/* Bento Cell: Profile & Bio (Spans 2 cols, 2 rows) */}
                    <div className="md:col-span-2 md:row-span-2 bg-company-surface p-10 rounded-3xl border border-company-outline-variant shadow-xl flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="w-24 h-24 rounded-full border-2 border-company-primary p-1 flex-shrink-0">
                                    <div className="w-full h-full rounded-full bg-company-surface-container flex items-center justify-center overflow-hidden">
                                        <span className="text-company-primary font-black text-3xl">CC</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-company-on-surface leading-tight mb-1">CarbonCraft</h2>
                                    <p className="text-company-primary font-medium text-lg">@carboncraft_id</p>
                                </div>
                            </div>
                            <p className="text-company-on-surface-variant text-xl leading-relaxed mb-8">
                                Leading the future of sustainable charcoal production. 500MT Monthly Capacity | 100% Eco-Friendly.
                            </p>
                            <div className="grid grid-cols-3 gap-4 py-6 border-y border-company-outline-variant mb-8">
                                <div className="text-center">
                                    <div className="font-bold text-company-on-surface text-3xl">9</div>
                                    <div className="text-xs text-company-on-surface-variant uppercase tracking-widest mt-2">Posts</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-company-on-surface text-3xl">1.2k</div>
                                    <div className="text-xs text-company-on-surface-variant uppercase tracking-widest mt-2">Followers</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-bold text-company-on-surface text-3xl">48</div>
                                    <div className="text-xs text-company-on-surface-variant uppercase tracking-widest mt-2">Following</div>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-company-primary text-company-surface py-5 rounded-xl font-bold text-xl hover:bg-opacity-90 transition-all active:scale-[0.98] cursor-pointer">
                            Follow Business
                        </button>
                    </div>

                    {/* Bento Cell: Image 1 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Burning Charcoal"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtMeywb-DEcxrvbdhMMICxpJpr9oTMrhxJHkHBTKMsQeH8dLsTNxKYQMX4gu1qHC1oFBEBqkSIoS3i-nVe_l4W1nctXxc_6O05Uj0xZRkzLsQdjkGUE_Hmfe92PaSWZ-4CF0fMXM85ROe3O6vcvLMBTKlR6ouv2rUGd4PjnO5qdMJMy_Vg3OQmVbkhHCPU3Pq8Q0iGUj9NVUAuKoFG-v9gTHFGoBRLqV15pfBqHQmDYvb40WpoJSZM-3Z3MR-cAcxq4ALHcVZvGyUT"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">512</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 2 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Product Cube"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYHquoyGC0hA9OCMj3KMOiREyoWuZJ1FH5_XG39ZKiEZhrSI5oowjhyV2xncd93ZCOXfCAC-hvsdRpxUwyvVt4imFuj8pkIuhhSutuKM1PBATAKRdDvRZTiYC7796Pr6rVj6LG14E4K4M9f2djy1_yXsagKukSWNq-wzIc9f_zGZvmD-bLOrn4jm8FMfmmgs7bu8xe5T0WRyXJyGffQnh55ecNSWp0iiETX3amkK4pMgRtS0WegLVabHFQ_hA7-kkO_suwwf2y9B02"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">124</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 3 (Spans 2 cols) */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Factory Activity"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNe7ZTHrZgYsvtbL_EnZL8QrJ598UAQ3TzJh_IVJv8mKziRh_iwUgCjtcALeN5pKlrsn7PXVgU8xkAZ_GJly-juz0UAlmVaKk5LseSWmBTuvOnNX4NWYqo8WsRIdVJavXeQLmgDn83UfvzTFgNaeQnx5_me6LYbgQAg2xmQKqfEQDIxQ6cmrjkuFpctTSBAWWHrEeDQ9I8eiRtVzrh5ky0OOOtaZpMvLRuodLhQ6r89-Kk7r1H3NTyJlMsPqjal1kNtwiXI4cXgNIy"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">89</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 4 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Product RCL"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsVqXKsgnBYoLu_PKsv25xXOmIeLHz6Jf92Eh2IbFfNAU1C74O5aFVbbCYEAsE9sVSKTwi1qaD_zTvPonp7FXW8gxNBHZo3ZEDWL2iU7GMmNhJ74SbtkyFIs6OqecIVXI94hyg-D8k_BPhBxDc9Qxqomh3oY2U3-UyT2j2D04Y6L2U1l1TSc1NxuzcOzYsYmbMOUFeCDzZU5u7w4ACitfqzpNSzaPqhWIaaDOO6bX-ltGMy1b-5R9NN_a-Ha1AiZSEnWdKA799u5F9"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">210</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 5 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Warehouse Bags"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAznYEqsowpMbQrxR5OiSdMggu7bGrmRwM0BfX4z7duGQPS7LsfOL_1HjFES98m7q8JJzxu6OaDQsHlTz7o8A_TU0zg5-ayu3AtfYMuZRtmLKPTwQvE9UO8-NPsmSgNlzd-HPBsRRbMETJE1Yl-uWsOXl386nBWYQWQG8_wxR3I8PEJGBJk9dCcLAVtwJp6oiDnL2CFA74dpjBVZlKuuHIay4enwqNjtVmuQ2b_zoPjLOKY0W8JbiXHln1yjXHjTezFODc90HwOvEOu"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">433</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 6 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Quality Control"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-DqQ5R0Pfgj0KZyRvuOcGTSlm6DBumenQjU146RO5HQq5HRqUyfstx8EzCu98V5mZ3jJmkuikkYu1QbQw8M7wBIeY2V1Qj2NZtf2DRcfHcx8h9_Gj67fHg81YMJEiQihxX5hjjqhun9uueUkQczQqpOxFAmexpfTRPeBsE0Kv4vl3qA0_sTdaqStAuJc7gbdI0BWCezNQyFr8grsTga75PgvWCLozoknTFYf_zGuJtR4Cnw-Qy0cnBxfBHx8dV8Gmou6zC73mlGSO"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">187</span>
                            </div>
                        </div>
                    </div>

                    {/* Bento Cell: Image 7 */}
                    <div className="group relative overflow-hidden rounded-3xl bg-company-surface-container">
                        <Image
                            alt="Shipping Preparation"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAKxf3sVZBil2nuoQW4oSvCaii67TYqAyf1MIiWs2p0nvhJZEV-mWrw6iM1ih6iPd8L3vr1i6FOQ0KUPKlQr5r-udca3XhTgbDODTE6roo0UP2bHJO3EcM6rtghHypvamTZ3EjfaG_aOuaVmfhAbp4h8bSsQ02XgU4LNHOQPvh2QYoOlCWLnknvMAWhgIM4e-GbaN8cu9a8UkTa1k6kUy76S52HPQ2VDoDVIwyxLAQ9_t7ijy9Uz4l9pi8_jZk496BV2nvtExshGwJ"
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined materials-filled">favorite</span>
                                <span className="font-bold">295</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}