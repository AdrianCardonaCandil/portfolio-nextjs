
import { About } from "@/components/about/about";
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
