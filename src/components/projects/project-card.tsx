import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";
import type { Project } from "@/lib/projects-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  title,
  description,
  technologies,
  image,
  githubUrl,
}: Omit<Project, "colSpan">) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105">
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
              <Badge key={index} variant="secondary">
                <Icon className="h-4 w-4" />
              </Badge>
            ))}
          </div>
          <Link
            href={githubUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Github className="h-4 w-4" />
            Ver en GitHub
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
