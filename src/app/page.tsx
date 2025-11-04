
import { Experience } from "@/components/experience/experience";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Experience />
    </main>
  );
}
