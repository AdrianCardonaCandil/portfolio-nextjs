import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 hidden w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block">
      <div className="container flex h-14 items-center">
        <nav className="flex items-center gap-4 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-muted-foreground transition-colors hover:text-foreground"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
