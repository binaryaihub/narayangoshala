import DonatePageClient from "./DonatePageClient";
import { get } from "@/lib/content";

export default function DonatePage() {
  const data = get<Record<string, unknown>>("donate_page");
  return <DonatePageClient data={data} />;
}
