"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const fontMain = isHome
    ? "font-roboto"
    : pathname?.startsWith("/about")
      ? "font-outfit"
      : "font-inter";
  const fontDisplay = isHome
    ? "font-lora"
    : pathname?.startsWith("/about")
      ? "font-outfit"
      : "font-playfair";

  return (
    <footer
      className={clsx(
        "bg-home-surface-dark text-white border-t border-gray-800",
        fontMain,
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-home-primary text-2xl">
                local_fire_department
              </span>
              <span
                className={clsx(
                  "font-bold text-2xl text-white tracking-wide",
                  fontDisplay,
                )}
              >
                CASTLE <span className="text-home-accent-gold">TRADING</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6 text-sm leading-relaxed">
              Providing the world with high-quality, sustainable coconut shell
              charcoal briquettes. Your reliable partner in renewable energy.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/18ey2zeAM9/"
                className="text-gray-400 hover:text-home-primary transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/castle_briquette?igsh=MWI4NXl3Y2pzMm9ybw=="
                className="text-gray-400 hover:text-home-primary transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@castle.briquette?_r=1&_t=ZS-96vPQE5Ldxp"
                className="text-gray-400 hover:text-home-primary transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={clsx("text-lg font-bold mb-4 text-white", fontDisplay)}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/certificates"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  Certificates
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 hover:text-home-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4
              className={clsx("text-lg font-bold mb-4 text-white", fontDisplay)}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm mt-1">
                  location_on
                </span>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Ngrowo, Karangjati
                  <br />
                  Bergas District, Semarang Regency, Central Java.
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm">
                  email
                </span>
                <span className="text-gray-400 text-sm">
                  Castlegroup0101@gmail.com
                </span>
              </li>
              <li className="flex items-center">
                <span className="material-symbols-outlined text-home-accent-gold mr-2 text-sm">
                  phone
                </span>
                <span className="text-gray-400 text-sm">0857-3592-5977</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs tracking-wider uppercase">
          <p>© 2026 Castle Trading Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
