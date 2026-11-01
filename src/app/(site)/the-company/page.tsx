import { getTheCompanyImages, getTheCompanyVideos } from "@/lib/supabase/the-company-server";
import TheCompanyClient from "./TheCompanyClient";

export const metadata = {
  title: "The Company | Castle Trading Group",
};

export default async function TheCompanyPage() {
  const [images, videos] = await Promise.all([
    getTheCompanyImages(),
    getTheCompanyVideos(),
  ]);

  return <TheCompanyClient images={images} videos={videos} />;
}
