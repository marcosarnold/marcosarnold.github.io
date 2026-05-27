import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
const projects = [
  {
    title: "Twitter Community Detection",
    description:
      "Analysis of a 81,306 user Twitter network using Leiden and Infomap community detection to identify political clusters and echo chamber effects",
    technologies: ["Python", "NetworkX", "Pandas"],
    github: "https://github.com/marcosarnold/twitter-community-detection",
  },
  {
    title: "CashCow",
    description: 
      "Finance AI Chrome extension built at Cal Hacks 12.0 that detects checkout pages, classifies merchants in real time, and recommends optimal credit cards to maximize cashback and rewards using real time reward data",
    technologies: ["React", "TypeScript", "Fetch.AI API", "FastAPI", "BrightData MCP", "Anthropic API"],
    github: "https://github.com/marcosarnold/cash-cow",
  },
  {
    title: "Pikes Peak Hill Climb",
    description:
      "Interactive 3D recreation of the Pikes Peak Hill Climb featuring a racing experience through the Colorado Rockies and Red Rocks",
    technologies: ["JavaScript", "HTML", "CSS", "Three.js", "Modular ES6 Architecture"],
    github: "https://github.com/marcosarnold/pikes-peak-hill-climb",
    live: "https://pikespeakhillclimb.com/"
  },
  {
    title: "Snake AI",
    description: 
      "Snake game implementing Greedy, Dijkstra, and A* algorithms for AI pathfinding and real time navigation",
    technologies: ["Python", "Pygame", "Matplotlib", "Jupyter Notebook"],
    github: "https://github.com/marcosarnold/snake-game-ai",
  },
  {
    title: "Hue Hero",
    description: 
      "Desktop color by number pixel art game that turns images into playable grids with SQL based progress tracking",
    technologies: ["Java", "Swing", "SQL", "Image Processing"],
    github: "https://github.com/marcosarnold/hue-hero",
  },
  {
    title: "Spotify Sentiment Analyzer",
    description:
      "Web application that analyzes the emotional tone of songs and albums using Spotify metadata, lyrics, and a multilingual BERT model for sentiment analysis",
    technologies: ["Python", "Streamlit", "Hugging Face Transformers", "Spotify API"],
    github: "https://github.com/marcosarnold/sentence-sentiment-analyzer",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-5 pb-16">
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-8">
        Projects
      </h1>

      <div className="space-y-5">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-b border-border pb-5 last:border-0"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-foreground">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View source code"
                >
                  <Github className="h-4 w-4" />
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Open live site"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed mt-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 items-center mt-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
