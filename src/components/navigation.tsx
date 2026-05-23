"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
// import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group -m-1.5 p-1.5 text-xl font-semibold tracking-tight transition-all duration-300 hover:tracking-wide"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text transition-all duration-500 group-hover:bg-[position:100%_0] group-hover:text-transparent">
            Marcos Arnold
          </span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium leading-6 transition-colors hover:text-accent",
                pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="mx-auto w-full max-w-7xl space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors hover:bg-muted",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Social Links for Mobile */}
            <div className="space-y-2 pt-4 border-t">
              <Link
                href="mailto:arnoldmarcos9@gmail.com"
                className="flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail className="mr-3 h-4 w-4" />
                Email
              </Link>
              <Link
                href="https://github.com"
                className="flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="mr-3 h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://linkedin.com"
                className="flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Linkedin className="mr-3 h-4 w-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
