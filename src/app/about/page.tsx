import AboutPageClient from "./AboutPageClient";
import { get } from "@/lib/content";

export default function AboutPage() {
  const data = get<Record<string, unknown>>("about_page");
  return <AboutPageClient data={data} />;
}
