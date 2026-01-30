'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navClass = clsx(
        "z-50 w-full transition-colors duration-300 border-b",
        isHome ? "fixed top-0 bg-home-surface-light/90 dark:bg-home-surface-dark/90 backdrop-blur-md border-gray-200 dark:border-gray-800"
            : "sticky top-0 bg-white/95 dark:bg-home-surface-dark/95 backdrop-blur shadow-sm border-gray-200 dark:border-gray-800"
    );

    const linkClass = (path: string) => clsx(
        "transition-colors font-medium text-sm tracking-wide uppercase",
        pathname === path
            ? "text-home-primary font-bold"
            : "text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary"
    );

    // Determine font classes based on path
    const fontMain = isHome ? 'font-roboto' : pathname?.startsWith('/about') ? 'font-outfit' : 'font-inter';
    const fontDisplay = isHome ? 'font-lora' : pathname?.startsWith('/about') ? 'font-outfit' : 'font-playfair';

    return (
        <nav className={clsx(navClass, fontMain)}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <span className="material-symbols-outlined text-home-primary text-3xl group-hover:scale-110 transition-transform">local_fire_department</span>
                            <span className={clsx("font-bold text-xl md:text-2xl text-gray-900 dark:text-white tracking-wide uppercase", fontDisplay)}>
                                Castle <span className="text-home-accent-gold">Trading</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className={linkClass('/')}>Home</Link>
                        <Link href="/products" className={linkClass('/products')}>Products</Link>
                        <Link href="/about" className={linkClass('/about')}>About</Link>
                        <Link href="/contact" className={linkClass('#contact')}>Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <span className="material-symbols-outlined text-2xl">close</span>
                            ) : (
                                <span className="material-symbols-outlined text-2xl">menu</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-home-surface-dark border-t border-gray-200 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Home</Link>
                        <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Products</Link>
                        <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">About</Link>
                        <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-home-primary dark:hover:text-home-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
