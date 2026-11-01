import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppChat />
    </>
  );
}

