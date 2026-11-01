import { createClient } from "@/lib/supabase/client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CompanyImage {
  id?: string;
  slot: string; // "hero" | "bento_1" ... "bento_7"
  src: string;
  alt: string;
  caption: string;
  col_span: number;
  updated_at?: string;
}

export interface CompanyVideo {
  id: string;
  title: string;
  description?: string | null;
  file_name: string;
  thumbnail: string;
  featured: boolean;
  sort_order: number;
  created_at?: string;
}

// ─── Seed Data (matches current hardcoded content) ────────────────────────────

export const SEED_IMAGES: Omit<CompanyImage, "id" | "updated_at">[] = [
  {
    slot: "hero",
    src: "/images/theCompany/tambang.png",
    alt: "Industrial factory",
    caption: "",
    col_span: 1,
  },
  {
    slot: "bento_1",
    src: "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.10.jpeg",
    alt: "Burning Charcoal",
    caption: "Our Product",
    col_span: 1,
  },
  {
    slot: "bento_2",
    src: "/images/products/Cube.jpeg",
    alt: "Product Cube",
    caption: "Cube Type",
    col_span: 1,
  },
  {
    slot: "bento_3",
    src: "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09.jpeg",
    alt: "Factory Activity",
    caption: "Production Process",
    col_span: 2,
  },
  {
    slot: "bento_4",
    src: "/images/products/RCL.jpeg",
    alt: "Product RCL",
    caption: "RCL Type",
    col_span: 1,
  },
  {
    slot: "bento_5",
    src: "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.08.jpeg",
    alt: "Warehouse Bags",
    caption: "Product Packages",
    col_span: 1,
  },
  {
    slot: "bento_6",
    src: "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (3).jpeg",
    alt: "Quality Control",
    caption: "Our Warehouse",
    col_span: 1,
  },
  {
    slot: "bento_7",
    src: "/images/gallery/WhatsApp Image 2026-02-10 at 10.21.09 (2).jpeg",
    alt: "Shipping Preparation",
    caption: "Production",
    col_span: 1,
  },
];

export const SEED_VIDEOS: Omit<CompanyVideo, "created_at">[] = [
  {
    id: "production-overview",
    title: "Production Process Overview",
    description:
      "Inside our state-of-the-art production line ensuring maximum efficiency.",
    file_name: "production.mp4",
    thumbnail: "/images/theCompany/thumbProduksi.PNG",
    featured: true,
    sort_order: 0,
  },
  {
    id: "raw-material-handling",
    title: "Raw Material Handling",
    description: null,
    file_name: "Production2.mp4",
    thumbnail: "/images/theCompany/thumbProduction2.PNG",
    featured: false,
    sort_order: 1,
  },
  {
    id: "stuffing-process",
    title: "Stuffing Process",
    description: null,
    file_name: "stuffing.mp4",
    thumbnail: "/images/theCompany/thumbstuffing.PNG",
    featured: false,
    sort_order: 2,
  },
  {
    id: "packaging-ahmad",
    title: "Packaging Ahmad C25",
    description: null,
    file_name: "packaging.mp4",
    thumbnail: "/images/theCompany/thumbPack1.PNG",
    featured: false,
    sort_order: 3,
  },
  {
    id: "product-burn-test",
    title: "Product Burn Test",
    description: null,
    file_name: "Qualitycontrol.mp4",
    thumbnail: "/images/theCompany/thumbQc.PNG",
    featured: false,
    sort_order: 4,
  },
  {
    id: "packing-hexa-type",
    title: "Packing Hexa type",
    description: null,
    file_name: "vid6.mp4",
    thumbnail: "/images/theCompany/thumbvid6.PNG",
    featured: false,
    sort_order: 5,
  },
  {
    id: "unload-process",
    title: "Unload Process",
    description: null,
    file_name: "vid7.mp4",
    thumbnail: "/images/theCompany/thumbvid7.PNG",
    featured: false,
    sort_order: 6,
  },
  {
    id: "production-process",
    title: "Production Process",
    description: null,
    file_name: "Vid9.mp4",
    thumbnail: "/images/theCompany/thumbvid9.PNG",
    featured: false,
    sort_order: 7,
  },
  {
    id: "qc-cube-30x32",
    title: "QC Cube Type 30x32",
    description: null,
    file_name: "Vid10.mp4",
    thumbnail: "/images/theCompany/thumbvid10.PNG",
    featured: false,
    sort_order: 8,
  },
  {
    id: "export-process",
    title: "Export Process",
    description: null,
    file_name: "Vid11.mp4",
    thumbnail: "/images/theCompany/thumbvid11.PNG",
    featured: false,
    sort_order: 9,
  },
  {
    id: "qc-hexa-type",
    title: "QC Hexa Type",
    description: null,
    file_name: "Vid12.mp4",
    thumbnail: "/images/theCompany/thumbvid12.PNG",
    featured: false,
    sort_order: 10,
  },
  {
    id: "packing-hexa-line",
    title: "Packing Hexa Line",
    description: null,
    file_name: "Vid13.mp4",
    thumbnail: "/images/theCompany/thumbvid13.PNG",
    featured: false,
    sort_order: 11,
  },
  {
    id: "process-in-action",
    title: "Our Process in Action",
    description: null,
    file_name: "Vid14.mp4",
    thumbnail: "/images/theCompany/thumbvid14.PNG",
    featured: false,
    sort_order: 12,
  },
  {
    id: "packing-cube-25",
    title: "Packing Cube type 25",
    description: null,
    file_name: "Vid15.mp4",
    thumbnail: "/images/theCompany/thumbvid15.PNG",
    featured: false,
    sort_order: 13,
  },
  {
    id: "qc-rcl-27x40",
    title: "QC RCL 27x40",
    description: null,
    file_name: "Vid16.mp4",
    thumbnail: "/images/theCompany/thumbvid16.PNG",
    featured: false,
    sort_order: 14,
  },
  {
    id: "qc-cube-25",
    title: "QC Cube type 25",
    description: null,
    file_name: "Vid17.mp4",
    thumbnail: "/images/theCompany/thumbvid17.PNG",
    featured: false,
    sort_order: 15,
  },
  {
    id: "product-mfg-hexa-line-25",
    title: "Product Manufacturing Hexa Line Type 25",
    description: null,
    file_name: "vid18.mp4",
    thumbnail: "/images/theCompany/thumbvid18.PNG",
    featured: false,
    sort_order: 16,
  },
  {
    id: "cetak-cube-25",
    title: "Product Manufacturing Cube Type 25",
    description: null,
    file_name: "Vid19.mp4",
    thumbnail: "/images/theCompany/thumb19.PNG",
    featured: false,
    sort_order: 17,
  },
  {
    id: "cetak-hole-40-32",
    title: "Product Manufacturing Cube Hole 40x32",
    description: null,
    file_name: "Vid20.mp4",
    thumbnail: "/images/theCompany/thumb20.PNG",
    featured: false,
    sort_order: 18,
  },
  {
    id: "cetak-hexa-28-lis",
    title: "Product Manufacturing Hexa Type 28x28",
    description: null,
    file_name: "Vid21.mp4",
    thumbnail: "/images/theCompany/thumb21.PNG",
    featured: false,
    sort_order: 19,
  },
  {
    id: "cetak-rcl-27x40",
    title: "Product Manufacturing RCL Type 27x40",
    description: null,
    file_name: "Vid22.mp4",
    thumbnail: "/images/theCompany/thumb22.PNG",
    featured: false,
    sort_order: 20,
  },
  {
    id: "packing-process-hexa-25x5",
    title: "Packing Process Hexa Type 25x5",
    description: null,
    file_name: "Vid23.mp4",
    thumbnail: "/images/theCompany/thumb23.PNG",
    featured: false,
    sort_order: 21,
  },
  {
    id: "qc-process-rcl-27x40",
    title: "QC Process RCL Type 27x40",
    description: null,
    file_name: "Vid24.mp4",
    thumbnail: "/images/theCompany/thumb24.PNG",
    featured: false,
    sort_order: 22,
  },
];

// ─── Client-side Mutations (used in Admin components) ─────────────────────────

export async function updateImage(
  slot: string,
  data: Partial<Omit<CompanyImage, "id" | "slot" | "updated_at">>
): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase
    .from("the_company_images")
    .update({ ...data, updated_at: new Date().toISOString() })
    .eq("slot", slot);

  return { error: error?.message ?? null };
}

export async function upsertVideo(
  video: Omit<CompanyVideo, "created_at">
): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase
    .from("the_company_videos")
    .upsert(video, { onConflict: "id" });

  return { error: error?.message ?? null };
}

export async function deleteVideo(id: string): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase
    .from("the_company_videos")
    .delete()
    .eq("id", id);

  return { error: error?.message ?? null };
}

export async function migrateExistingData(): Promise<{ error: string | null }> {
  const supabase = createClient();

  // Upsert images
  const { error: imgError } = await supabase
    .from("the_company_images")
    .upsert(SEED_IMAGES, { onConflict: "slot", ignoreDuplicates: false });

  if (imgError) return { error: `Images: ${imgError.message}` };

  // Upsert videos
  const { error: vidError } = await supabase
    .from("the_company_videos")
    .upsert(SEED_VIDEOS, { onConflict: "id", ignoreDuplicates: false });

  if (vidError) return { error: `Videos: ${vidError.message}` };

  return { error: null };
}

// ─── Image Upload to Supabase Storage ────────────────────────────────────────

const IMAGE_BUCKET = "thecompany-images";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";

export function getImagePublicUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("/")) {
    return path;
  }
  return `${SUPABASE_URL.replace(/\/$/, "")}/storage/v1/object/public/${IMAGE_BUCKET}/${path}`;
}

export async function uploadCompanyImage(
  file: File,
  slot: string
): Promise<{ url: string | null; error: string | null }> {
  const supabase = createClient();
  const ext = file.name.split(".").pop();
  const fileName = `${slot}-${Date.now()}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from(IMAGE_BUCKET)
    .upload(fileName, file, { upsert: true, contentType: file.type });

  if (uploadError) return { url: null, error: uploadError.message };

  const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(fileName);
  return { url: data.publicUrl, error: null };
}
