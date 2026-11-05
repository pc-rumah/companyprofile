import type { Metadata } from "next";
import { getTheCompanyImages, getTheCompanyVideos } from "@/lib/supabase/the-company-server";
import TheCompanyClient from "./TheCompanyClient";

export const metadata: Metadata = {
  title: "The Company - Factory Operations, Bento Profile & Video Feed",
  description:
    "Explore PT Castle Trading Group's legacy in sustainable energy. Watch our factory production line videos, raw material sorting, and packing operations.",
  alternates: {
    canonical: "/the-company",
  },
  openGraph: {
    title: "The Company - Legacy in Energy | PT Castle Trading Group",
    description:
      "From a local vision to a global standard in sustainable coconut briquette production. 500MT monthly capacity, modern machinery.",
    url: "/the-company",
  },
};

export default async function TheCompanyPage() {
  const [images, videos] = await Promise.all([
    getTheCompanyImages(),
    getTheCompanyVideos(),
  ]);

  return <TheCompanyClient images={images} videos={videos} />;
}
