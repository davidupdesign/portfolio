const tags = ["Remote", "Office", "Agile", "Scrum", "DevOps" ];

export default function WorkStyle() {
  return (
    <section className="container-narrow mt-16">

        {/* name */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 mb-5">
        <span className="text-white/50 text-sm">Work Style</span>
      </div>

      {/* card */}
      <div className="rounded-xl border border-white/10 bg-white/0 p-6">
        <p className="text-white/80 text-sm leading-relaxed mb-2">
          I have collaborated with diverse clients and teams to identify project
          needs and have successfully managed these projects from start to
          finish.
        </p>
        <p className="text-white/80 text-sm leading-relaxed mb-5">
          If I don&apos;t know how to do something, I know how to learn.
          <span className="text-[#2196F3] font-medium"> I&apos;ll figure it out.</span>
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-xs font-medium bg-[#2196F3]/5 text-[#64B5F6] border border-[#2196F3]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
