'use client'

import { useRef } from 'react'

type TimelineItem = {
    year: string
    title: string
    description: string
    active?: boolean
    highlightDot?: boolean
}

const timelineItems: TimelineItem[] = [
    {
        year: '2015',
        title: 'Foundation',
        description:
            'Established in Semarang, Indonesia with a commitment to quality raw materials.',
        highlightDot: true,
    },
    {
        year: '2017',
        title: 'Global Reach',
        description:
            'First major international export milestone to partners in the Middle East.',
    },
    {
        year: '2020',
        title: 'Modernization',
        description:
            'Massive factory expansion and integration of automated sorting technologies.',
    },
    {
        year: '2023',
        title: 'Sustainability',
        description:
            'Achieved major ISO Certifications and hit key eco-friendly production targets.',
        active: true,
    },
]

export default function HorizontalTimeline() {
    const timelineRef = useRef<HTMLDivElement>(null)

    const scrollTimeline = (direction: 'left' | 'right') => {
        if (timelineRef.current) {
            const scrollAmount = 340; // width of item + gap
            timelineRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    }

    return (
        <section className="py-32 overflow-hidden bg-company-surface">
            <div className="max-w-7xl mx-auto px-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <p className="text-company-primary font-bold uppercase tracking-widest text-sm mb-4">
                        The Evolution
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-company-on-surface">
                        Timeline of Excellence
                    </h2>
                </div>

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => scrollTimeline('left')}
                        className="w-12 h-12 rounded-full border border-company-outline-variant flex items-center justify-center hover:bg-company-primary hover:border-company-primary transition-all group cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-company-on-surface group-hover:text-company-surface">
                            chevron_left
                        </span>
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollTimeline('right')}
                        className="w-12 h-12 rounded-full border border-company-outline-variant flex items-center justify-center hover:bg-company-primary hover:border-company-primary transition-all group cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-company-on-surface group-hover:text-company-surface">
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>

            <div className="relative timeline-scroll-container">
                <div className="absolute top-[4.5rem] left-0 right-0 h-[2px] bg-company-outline-variant z-0" />

                <div
                    ref={timelineRef}
                    className="flex overflow-x-auto gap-12 px-[10%] pb-12 no-scrollbar snap-x relative z-10 scroll-smooth"
                >
                    {timelineItems.map((item) => (
                        <div key={item.year} className="flex-shrink-0 w-[320px] snap-start">
                            <div className="flex flex-col items-center mb-8">
                                <div
                                    className={`w-10 h-10 rounded-full ring-[8px] ring-company-surface flex items-center justify-center z-10 transition-colors ${item.active || item.highlightDot
                                        ? 'bg-company-primary'
                                        : 'bg-company-outline-variant'
                                        }`}
                                >
                                    <div className="w-3 h-3 rounded-full bg-company-surface" />
                                </div>

                                <span
                                    className={`text-3xl font-black mt-4 ${item.active
                                        ? 'text-company-primary'
                                        : 'text-company-gold'
                                        }`}
                                >
                                    {item.year}
                                </span>
                            </div>

                            <div
                                className={`bg-company-surface-container p-8 rounded-2xl border min-h-[180px] shadow-lg ${item.active
                                    ? 'border-company-primary/20'
                                    : 'border-company-outline-variant'
                                    }`}
                            >
                                <h3 className="text-xl font-bold text-company-on-surface mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-company-on-surface-variant text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}