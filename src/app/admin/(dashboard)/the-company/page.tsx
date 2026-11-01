import { getTheCompanyImages, getTheCompanyVideos } from "@/lib/supabase/the-company-server";
import PageBreadcrumb from "@/components/admin/common/PageBreadCrumb";
import TheCompanyManager from "@/components/admin/the-company/TheCompanyManager";

export const metadata = {
  title: "The Company Content | Castle Trading Admin",
};

export const dynamic = "force-dynamic";

export default async function TheCompanyAdminPage() {
  const [images, videos] = await Promise.all([
    getTheCompanyImages(),
    getTheCompanyVideos(),
  ]);

  return (
    <div className="space-y-6">
      <PageBreadcrumb pageTitle="The Company Content" />

      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
          The Company — Content Manager
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
          Manage hero image, bento gallery photos, and video feed displayed on the public{" "}
          <a
            href="/the-company"
            target="_blank"
            className="text-brand-600 dark:text-brand-400 hover:underline"
          >
            /the-company
          </a>{" "}
          page.
        </p>
      </div>

      <TheCompanyManager images={images} videos={videos} />
    </div>
  );
}
