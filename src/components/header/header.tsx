"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
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

      {/* Mobile Header */}
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú de navegación</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="w-full rounded-t-lg">
            <nav className="mt-4 flex flex-col items-center gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-full py-2 text-center text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setSheetOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
