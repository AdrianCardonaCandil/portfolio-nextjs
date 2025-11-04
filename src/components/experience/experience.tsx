import { jobs } from "@/lib/experience-data";
import { ExperienceItem } from "./experience-item";

export function Experience() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Experiencia Laboral
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Mi trayectoria profesional a lo largo de los años.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-3xl gap-8">
          {jobs.map((job) => (
            <ExperienceItem key={job.company} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}
