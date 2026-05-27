"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Sparkles,
  FileText,
  Palette,
  ScissorsLineDashed,
  Terminal,
  Globe,
  Linkedin,
  Github,
  Mail,
  Music2,
} from "lucide-react";
import { BlogH1 } from "@/components/blog-h1";

type RecentPost = { slug: string; title: string };

export default function HomePage() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(true);
  const [isBlogOpen, setIsBlogOpen] = useState(true);
  const [isToolsOpen, setIsToolsOpen] = useState(true);
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);

  useEffect(() => {
    fetch("/api/recent-posts?limit=2")
      .then((r) => r.json())
      .then(setRecentPosts)
      .catch(() => setRecentPosts([]));
  }, []);

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pt-5 pb-16 flex flex-col justify-center overflow-hidden gap-5">
        <div>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-medium tracking-tight text-foreground mb-4">
              marcos arnold!
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Building, learning, and crafting!
            </p>
            {/*<p className="text-muted-foreground text-base leading-relaxed">
              You should check out my favorite pages:{" "}
              <Link
                href="/blog"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Weaving{" "}
              </Link>
              or{" "}
              <Link
                href="/photography"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Puzzles
              </Link>
            </p> */}

            {/* EXPERIENCES */ }
            <div className="mt-8">
              <button
                onClick={() => setIsTimelineOpen(!isTimelineOpen)}
                className="flex items-center gap-2 text-3xl font-medium tracking-tight text-foreground hover:text-primary transition-colors mb-4 group cursor-pointer"
              >
                Experience
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isTimelineOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isTimelineOpen
                    ? "max-h-[2000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ol className="relative border-l border-border ml-2 pl-6 space-y-6">
                  {/* Experience 1 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        May 2026 - Present
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/nightshift.svg"
                          alt="Nighshift AGI logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Nightshift AGI | Software Engineer Intern
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        Incoming Summer 2026
                      </p>
                    </div>
                  </li>
                  {/* Experience 2 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        Nov. 2025 - Present
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/cc.png"
                          alt="Colorado College Department of Math + CS logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Colorado College | Undergraduate Research Assistant
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                      Conducting HCI research on accessibility and cognitive disabilities
                        by synthesizing 15+ ACM papers and integrating Hugging Face diffusion
                        models with Meshy APIs to generate 100+ images across 20+ prompts for
                        accessibility focused 2D to 3D assistive object design.
                      </p>
                    </div>
                  </li>
                  {/* Experience 3 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        Sep. 2025 - Present
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/socc.png"
                          alt="The Sounds of Colorado College logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Sounds of Colorado College | Head Website Developer
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                      Maintaining the SOCC Radio website using WordPress, Cargo, HTML, and CSS,
                        supporting 500+ weekly visitors by implementing content updates, multimedia
                        integrations, and accessibility improvements.
                      </p>
                    </div>
                  </li>
                  {/* Experience 4 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        Jan. 2026 - Mar. 2026
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/heyneighbor.png"
                          alt="Hey Neighbor logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Hey Neighbor | Data Analysis & Research Intern
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                      Evaluated survey data from 200+ Neighborhood University alumni across 5
                        cohorts to evaluate civic engagement outcomes and developed 5+ actionable
                        recommendations to strengthen accessibility, alumni networking, and
                        community leadership initiatives in Colorado Springs.
                      </p>
                    </div>
                  </li>
                  {/* Experience 5 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        May 2025 - Oct. 2025
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/cc.png"
                          alt="Colorado College Office of Information Technology logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Colorado College | Software Engineer Intern
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                      Architected a full stack Django, HTMX, and PostgreSQL application that
                        centralized tracking for 23 institutional applications across 19
                        business processes, managing 1K+ records while improving data
                        integrity and reducing cross campus reporting query times by 40%.
                      </p>
                    </div>
                  </li>
                  {/* Experience 6 */}
                  <li className="ml-2 group">
                    <div className="pb-2">
                      <span className="text-sm font-medium text-primary">
                        May 2025
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <Image
                          src="/images/beats.png"
                          alt="Beats by Dre logo"
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded"
                        />
                        <h4 className="text-lg font-semibold text-foreground">
                          Beats by Dre | Data Analysis Externship
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                      Analyzed 20+ Gen Z consumer survey responses using Python, Gemini AI,
                        and Excel to identify audio preference trends, producing visualizations
                        and insight summaries that informed marketing and product strategy
                        recommendations for Beats by Dre.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* FAVORITE/RECENT TOOLS */ }
        <div>
          <button
            onClick={() => setIsToolsOpen(!isToolsOpen)}
            className="flex items-center gap-2 text-3xl font-medium tracking-tight text-foreground hover:text-primary transition-colors mb-4 group cursor-pointer"
          >
            Some Tools I&apos;ve Been Enjoying Recently
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isToolsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isToolsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-3 ml-2">
              <div className="group border-b border-border group-hover:border-primary/30 transition-colors pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">
                    LLM: Claude
                  </h3>
                </div>
              </div>
              <div className="group border-b border-border group-hover:border-primary/30 transition-colors pb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">
                    Notes: Figma
                  </h3>
                </div>
              </div>
              <div className="group border-b border-border group-hover:border-primary/30 transition-colors pb-3">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">
                    Sketchbook: p5.js
                  </h3>
                </div>
              </div>
              <div className="group border-b border-border group-hover:border-primary/30 transition-colors pb-3">
                <div className="flex items-center gap-2">
                  <ScissorsLineDashed className="w-4 h-4 text-primary" />
                  <h3 className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2">
                    Weaving: Tapestry Beater
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL LINKS */ }
      <div className="fixed bottom-6 left-6 hidden flex-col gap-3 md:flex">
        <Link
          href="mailto:arnoldmarcos9@gmail.com"
          className="rounded-full bg-background/80 p-3 text-muted-foreground shadow-sm ring-1 ring-border transition-all hover:text-foreground hover:shadow-md"
        >
          <Mail className="h-4 w-4 transition-transform hover:scale-110" />
          <span className="sr-only">Email Ben Aguirre</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/marcosarnold/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-background/80 p-3 text-muted-foreground shadow-sm ring-1 ring-border transition-all hover:text-foreground hover:shadow-md"
        >
          <Linkedin className="h-4 w-4 transition-transform hover:scale-110" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://github.com/marcosarnold"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-background/80 p-3 text-muted-foreground shadow-sm ring-1 ring-border transition-all hover:text-foreground hover:shadow-md"
        >
          <Github className="h-4 w-4 transition-transform hover:scale-110" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="/Arnold, Marcos, Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-background/80 p-3 text-muted-foreground shadow-sm ring-1 ring-border transition-all hover:text-foreground hover:shadow-md"
        >
          <FileText className="h-4 w-4 transition-transform hover:scale-110" />
          <span className="sr-only">Resume</span>
        </Link>
      </div>
    </>
  );
}
