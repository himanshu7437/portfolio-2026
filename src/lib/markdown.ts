import fs from "fs";
import path from "path";

// Resolves to the parent directory of the Next.js project
const dataDir = path.join(process.cwd(), "src/data");
console.log("Reading from:", dataDir);
export interface StoryStep {
  year: string;
  title: string;
  description: string;
}

export function getStorySteps(): StoryStep[] {
  const filePath = path.join(dataDir, "personal.md");
  let fileContents = "";
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error("Error reading personal.md:", err);
    return [];
  }

  const lines = fileContents
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0 && !l.startsWith("#"));

  const titles = ["Curiosity", "Real-world transition", "Problem Solving", "Product Engineering"];

  return lines.map((desc, index) => {
    return {
      year: index === lines.length - 1 ? "Present" : `Phase ${index + 1}`,
      title: titles[index] || `Chapter ${index + 1}`,
      description: desc,
    };
  });
}

export interface ProjectData {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
}

export function getProjects(): ProjectData[] {
  const filePath = path.join(dataDir, "projects.md");
  let fileContents = "";
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error("Error reading projects.md:", err);
    return [];
  }

  // Split by markdown horizontal rule
  const blocks = fileContents.split("---").map(b => b.trim()).filter(b => b.length > 0);

  return blocks.map(block => {
    const titleMatch = block.match(/##\s+(.*)/);
    const problemMatch = block.match(/Problem:\s*\n([\s\S]*?)(?=\n[A-Z]|$)/);
    const solutionMatch = block.match(/Solution:\s*\n(.*)/);
    const techMatch = block.match(/Tech:\s*\n(.*)/);
    const impactMatch = block.match(/Impact:\s*\n(.*)/);

    // If it's the first block containing "# Projects", exclude it if there is no "##"
    if (!titleMatch) return null;

    return {
      title: titleMatch[1].trim(),
      problem: problemMatch ? problemMatch[1].trim() : "",
      solution: solutionMatch ? solutionMatch[1].trim() : "",
      tech: techMatch ? techMatch[1].split(",").map(t => t.trim()) : [],
      impact: impactMatch ? impactMatch[1].trim() : ""
    };
  }).filter((p): p is ProjectData => p !== null);
}
