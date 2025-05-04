import Link from "next/link"
import { FaBehance, FaDribbble } from "react-icons/fa6";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import { ImBehance2 } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="text-center md:text-left">
            <div className="font-bold text-lg">Prosenjit Banik</div>
            <p className="text-sm text-muted-foreground mt-1">UI/UX Designer</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:pbanik856@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiMail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.behance.net/prosenjitbanik7576"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaBehance className=" h-5 w-5" />
              <span className="sr-only">Behance </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/prosenjit-banik-887413282/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://dribbble.com/kreva7576"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FaDribbble className="h-5 w-5" />
              <span className="sr-only">Dribbble</span>
            </Link>
          </div>

          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Prosenjit Banik. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
