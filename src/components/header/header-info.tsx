"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export function HeaderInfo() {
  return (
    <div className="order-2 flex flex-col gap-6 md:order-1">
      <div className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Hola, soy John Doe
        </h1>
        <TypeAnimation
          sequence={[
            "Ingeniero Informático",
            1000,
            "",
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-xl text-muted-foreground md:text-2xl"
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <Button size="lg" asChild>
          <Link href="#contact">
            Contacto <Send />
          </Link>
        </Button>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/cv.pdf" download>
            Descargar CV <Download />
          </Link>
        </Button>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="size-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon">
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="size-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
