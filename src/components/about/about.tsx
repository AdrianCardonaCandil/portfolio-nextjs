import { AboutInfo } from "./about-info";
import { AboutProfileImage } from "./about-profile-image";

export function About() {
  return (
    <section className="w-full bg-card/50 py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <AboutInfo />
        <AboutProfileImage />
      </div>
    </section>
  );
}
