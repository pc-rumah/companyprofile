'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export function Footer() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    const fontMain = isHome ? 'font-roboto' : pathname?.startsWith('/about') ? 'font-outfit' : 'font-inter';
    const fontDisplay = isHome ? 'font-lora' : pathname?.startsWith('/about') ? 'font-outfit' : 'font-playfair';

    return (
        <footer className={clsx("bg-home-surface-dark text-white border-t border-gray-800", fontMain)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-symbols-outlined text-home-primary text-2xl">local_fire_department</span>
                            <span className={clsx("font-bold text-2xl text-white tracking-wide", fontDisplay)}>
                                CASTLE <span className="text-home-accent-gold">TRADING</span>
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
                            Providing the world with high-quality, sustainable coconut shell charcoal briquettes. Your reliable partner in renewable energy.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-home-primary transition-colors">
                                <span className="material-symbols-outlined">share</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-home-primary transition-colors">
                                <span className="material-symbols-outlined">email</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={clsx("text-lg font-bold mb-4 text-white", fontDisplay)}>Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-home-primary transition-colors text-sm">Home</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-home-primary transition-colors text-sm">Products</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-home-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link href="#contact" className="text-gray-400 hover:text-home-primary transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className={clsx("text-lg font-bold mb-4 text-white", fontDisplay)}>Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm mt-1">location_on</span>
                                <span className="text-gray-400 text-sm leading-relaxed">Jl. Industri Raya No. 45<br />Surabaya, Indonesia</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm">phone</span>
                                <span className="text-gray-400 text-sm">+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center">
                                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm">email</span>
                                <span className="text-gray-400 text-sm">sales@castletrading.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Extra */}
                    <div>
                        <h4 className={clsx("text-lg font-bold mb-4 text-white", fontDisplay)}>Newsletter</h4>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 rounded bg-white/5 border border-gray-700 text-white focus:outline-none focus:border-home-primary focus:ring-1 focus:ring-home-primary text-sm"
                            />
                            <button type="submit" className="px-4 py-2 rounded bg-white text-home-surface-dark font-bold hover:bg-home-primary hover:text-white transition-colors text-sm uppercase">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs tracking-wider uppercase">
                    <p>© 2026 Castle Trading Group. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
