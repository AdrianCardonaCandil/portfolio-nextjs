import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="w-full bg-card/50 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Ingeniero Informático</p>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationSharp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">España</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <FaGithub className="text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
