import { projects } from "@/lib/projects-data";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="w-full bg-card/50 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Una selección de mis trabajos más recientes.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className={cn(
                "col-span-1",
                project.colSpan === 2 && "md:col-span-2 lg:col-span-2"
              )}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
