"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import WhatsAppIcon from "./Icons/WhatsAppIcon";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  const adminPhone = "628123456789";

  const message = "Hai! saya ingin bertanya mengenai produk anda.";

  const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      {/* Panel WhatsApp */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-50 w-[350px] overflow-hidden rounded-xl bg-white shadow-2xl">
          {/* Header */}
          <div className="bg-[#2FAC45] p-6 text-white">
            <div className="flex items-center gap-4">
              <WhatsAppIcon className="h-6 w-6 fill-current text-white-600" />

              <div>
                <h2 className="text-xl font-semibold">
                  Mulai Terhubung dengan Kami
                </h2>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="mb-4 text-sm text-gray-500">
              Team Kami akan membalas Secepatnya.
            </p>

            {/* Admin */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border-l-2 border-green-500 bg-gray-100 p-4 transition hover:bg-gray-200"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  A
                </div>

                <div>
                  <h3 className="font-medium text-gray-800">Admin</h3>

                  <p className="text-sm text-gray-500">Customer Service</p>
                </div>
              </div>

              <WhatsAppIcon className="h-6 w-6 fill-current text-green-600" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#2FAC45] text-white shadow-lg transition hover:scale-110"
        aria-label="WhatsApp Chat"
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <WhatsAppIcon className="h-7 w-7 fill-current" />
        )}
      </button>
    </>
  );
}
