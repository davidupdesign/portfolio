import { AtSign } from 'lucide-react';


export default function CTA() {
  return (
    <section className="container-narrow mt-16 mb-8 text-center">
      <p className="text-white/40 text-sm mb-2">
        Interested in working together?
      </p>
      <h2 className="text-white font-bold text-3xl mb-8">
        Let&apos;s Connect.
      </h2>

      <div className="flex items-center justify-center gap-3">
        {/* email */}
        <a
          href="mailto:davidupdesign@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:text-white hover:border-white/30 transition-all duration-200"
        >
          <AtSign className='w-4 h-4' />
          Email
        </a>

        {/* linkedin */}
        <a
          href="https://www.linkedin.com/in/david-k21/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:text-white hover:border-white/30 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
