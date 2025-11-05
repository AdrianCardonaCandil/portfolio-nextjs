
import { Contact } from "@/components/contact/contact";
import { Experience } from "@/components/experience/experience";
import { Header } from "@/components/header/header";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
