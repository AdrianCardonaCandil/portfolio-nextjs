import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";

export function HeaderInfo() {
  return (
    <div className="order-2 flex flex-col gap-4 md:order-1">
      <div className="space-y-2">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Hola, soy John Doe
        </h1>
        <p className="text-xl text-muted-foreground">Ingeniero Informático</p>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button asChild>
          <Link href="#contact">
            Contacto <Send />
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/cv.pdf" download>
            Descargar CV <Download />
          </Link>
        </Button>
      </div>
      <div className="flex gap-2">
        <Button asChild variant="ghost" size="icon">
          <Link href="https://github.com" target="_blank">
            <Github />
          </Link>
        </Button>
        <Button asChild variant="ghost" size="icon">
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin />
          </Link>
        </Button>
      </div>
    </div>
  );
}
