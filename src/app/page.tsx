import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { get } from "@/lib/content";

export default function Home() {
  const hero = get<Record<string, string>>("hero");
  const about = get<Record<string, unknown>>("about_section");
  const programs = get<Record<string, unknown>>("programs");
  const impact = get<Record<string, unknown>>("impact");
  const testimonials = get<Record<string, unknown>>("testimonials");
  const cta = get<Record<string, string>>("cta");

  return (
    <>
      <Hero
        badge={hero.badge}
        titleLine1={hero.title_line1}
        titleLine2={hero.title_line2}
        subtitle={hero.subtitle}
        ctaPrimary={hero.cta_primary}
        ctaSecondary={hero.cta_secondary}
      />
      <AboutSection
        label={about.label as string}
        titleLine1={about.title_line1 as string}
        titleLine2={about.title_line2 as string}
        paragraph1={about.paragraph1 as string}
        paragraph2={about.paragraph2 as string}
        stats={about.stats as { number: string; label: string; icon: string }[]}
      />
      <Programs
        label={programs.label as string}
        title={programs.title as string}
        subtitle={programs.subtitle as string}
        items={programs.items as { icon: string; title: string; description: string; color: string }[]}
      />
      <Impact
        label={impact.label as string}
        title={impact.title as string}
        subtitle={impact.subtitle as string}
        items={impact.items as { icon: string; number: string; label: string; description: string }[]}
        ctaTitle={impact.cta_title as string}
        ctaText={impact.cta_text as string}
        ctaButton={impact.cta_button as string}
      />
      <Testimonials
        label={testimonials.label as string}
        title={testimonials.title as string}
        items={testimonials.items as { name: string; role: string; content: string; rating: number }[]}
      />
      <CTA
        titleLine1={cta.title_line1}
        titleLine2={cta.title_line2}
        text={cta.text}
        primaryButton={cta.primary_button}
        secondaryButton={cta.secondary_button}
      />
    </>
  );
}
