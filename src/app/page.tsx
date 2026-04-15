import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StoryBridge } from "@/components/StoryBridge";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { HowIThink } from "@/components/HowIThink";
import { Skills } from "@/components/Skills";
import { BuildProcess } from "@/components/BuildProcess";
import { ProofOfWork } from "@/components/ProofOfWork";
import { ClosingCTA } from "@/components/ClosingCTA";
import { getStorySteps, getProjects } from "@/lib/markdown";

export default function Home() {
  const storySteps = getStorySteps();
  const projects = getProjects();

  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <StoryBridge />
        <Timeline steps={storySteps} />
        <Projects projects={projects} />
        <HowIThink />
        <Skills />
        <BuildProcess />
        <ProofOfWork />
        <ClosingCTA />
      </main>
    </>
  );
}
