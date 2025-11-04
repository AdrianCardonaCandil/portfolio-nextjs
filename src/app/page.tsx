
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl rounded-2xl shadow-2xl">
        <CardContent className="p-6">
          <section className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 flex flex-col gap-4 md:order-1">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Hola, soy John Doe
                </h1>
                <p className="text-xl text-muted-foreground">
                  Ingeniero Informático
                </p>
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
            <div className="order-1 md:order-2">
              <Image
                src="https://picsum.photos/seed/1/600/600"
                alt="Foto de perfil"
                width={600}
                height={600}
                className="aspect-square rounded-full object-cover"
                data-ai-hint="profile picture"
              />
            </div>
          </section>
        </CardContent>
      </Card>
    </main>
  );
}
