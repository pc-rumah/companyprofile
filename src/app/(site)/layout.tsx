import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import VisitorTracker from "@/components/VisitorTracker";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <VisitorTracker />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppChat />
    </>
  );
}

