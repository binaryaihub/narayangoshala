import ContactPageClient from "./ContactPageClient";
import { get } from "@/lib/content";

export default function ContactPage() {
  const data = get<Record<string, unknown>>("contact_page");
  return <ContactPageClient data={data} />;
}
