import { Hero } from "@/components/Hero";
import { StoryJourney } from "@/components/StoryJourney";
import { Projects } from "@/components/Projects";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="w-full max-w-[1400px]">
        <Hero />
        <StoryJourney />
        <Projects />
        <Philosophy />
        <Contact />
      </div>
    </main>
  );
}
