// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-narrow py-8 mt-8 border-t border-white/10">
      <div className="flex items-center justify-between">
        {/* left - links */}
        <div className="flex items-center gap-6">

          {/* github */}
          <a
            href="https://github.com/davidupdesign"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/70 transition-colors"
          >
            GitHub
          </a>

          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/david-k21/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/70 transition-colors"
          >
            LinkedIn
          </a>

          {/* instagram */}
          <a
            href="https://www.instagram.com/davidupdesign/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/70 transition-colors"
          >
            Instagram
          </a>

          {/* email */}
          <a
            href="mailto:davidupdesign@gmail.com"
            className="text-white/40 text-xs hover:text-white/70 transition-colors"
          >
            Email
          </a>

        </div>

        {/* right */}
        <span className="text-white/25 text-xs">
        &copy; 2026 David K
        </span>
      </div>
    </footer>
  );
}
