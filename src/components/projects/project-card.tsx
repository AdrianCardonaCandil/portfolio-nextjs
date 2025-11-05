import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/projects-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
}: Omit<Project, "colSpan">) {
  return (
    <AnimatedBorder className="h-full">
      <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300">
        <Image
          src={image.src}
          alt={`Imagen del proyecto ${title}`}
          width={image.width}
          height={image.height}
          className="aspect-video w-full object-cover"
          data-ai-hint={image.hint}
        />
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col justify-between">
          <p className="mb-4 text-muted-foreground">{description}</p>
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((Icon, index) => (
                <div
                  key={index}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" })
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
            <Link
              href={githubUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <FaGithub className="h-4 w-4" />
              Ver en GitHub
            </Link>
          </div>
        </CardContent>
      </Card>
    </AnimatedBorder>
  );
}
