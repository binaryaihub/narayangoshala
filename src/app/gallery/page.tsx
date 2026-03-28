import GalleryPageClient from "./GalleryPageClient";
import { get } from "@/lib/content";

export default function GalleryPage() {
  const data = get<Record<string, unknown>>("gallery_page");
  return <GalleryPageClient data={data} />;
}
