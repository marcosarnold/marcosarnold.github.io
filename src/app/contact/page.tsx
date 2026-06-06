import { Mail, Linkedin, Github, FileText } from "lucide-react";
import Link from "next/link";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "arnoldmarcos9@gmail.com",
    href: "mailto:arnoldmarcos9@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/marcosarnold",
    href: "https://www.linkedin.com/in/marcosarnold/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/marcosarnold",
    href: "https://github.com/marcosarnold",
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View PDF",
    href: "/Arnold, Marcos, Resume.pdf",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pt-5 pb-16">
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-4">
        Say hello!
      </h1>
      <p className="text-muted-foreground text-base leading-relaxed mb-10">
        I am actively seeking internships, research positions, and new grad
        opportunities in software engineering, data, or HCI where technical
        work drives real-world impact — and am always open to open source
        collaboration.
      </p>

      <div className="space-y-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-border rounded-lg px-5 py-4 transition-all hover:border-primary/40 hover:shadow-sm group"
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">{label}</p>
              <p className="text-sm text-muted-foreground">{value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
