export default function FloatingImpact() {
    return (
        <section className="relative z-30 -mt-16 max-w-6xl mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-company-surface-container/60 backdrop-blur-xl border border-company-outline-variant p-2 rounded-3xl shadow-2xl">
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-company-surface-container">
                    <div className="text-company-primary mb-4 bg-company-primary/10 p-3 rounded-full">
                        <span className="material-symbols-outlined text-4xl">factory</span>
                    </div>
                    <div className="text-4xl font-bold text-company-on-surface mb-1">500MT</div>
                    <div className="text-company-on-surface-variant text-xs uppercase tracking-widest">Monthly Capacity</div>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-company-surface-container">
                    <div className="text-company-primary mb-4 bg-company-primary/10 p-3 rounded-full">
                        <span className="material-symbols-outlined text-4xl">eco</span>
                    </div>
                    <div className="text-4xl font-bold text-company-on-surface mb-1">100%</div>
                    <div className="text-company-on-surface-variant text-xs uppercase tracking-widest">Eco-Friendly</div>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-company-surface-container">
                    <div className="text-company-primary mb-4 bg-company-primary/10 p-3 rounded-full">
                        <span className="material-symbols-outlined text-4xl">public</span>
                    </div>
                    <div className="text-4xl font-bold text-company-on-surface mb-1">15+</div>
                    <div className="text-company-on-surface-variant text-xs uppercase tracking-widest">Export Countries</div>
                </div>
            </div>
        </section>
    )
}