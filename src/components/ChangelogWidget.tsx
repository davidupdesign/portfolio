type ChangelogEntry = {
  title: string;
  version: string;
  date: string;
  tag: string;
};

async function getChangelogEntries(): Promise<ChangelogEntry[]> {
  try {
    const res = await fetch(
      "https://clivy-one.vercel.app/changelog/portfolio-project/rss",
      {
        next: { revalidate: 3600 },
        //fetches every 1 hour
      },
    );

    const xml = await res.text();

    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)];

    return items.slice(0, 5).map((match) => {

      const item = match[1];

      const rawTitle =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ??
        item.match(/<title>(.*?)<\/title>/)?.[1] ??
        "Untitled";

      // strip the v prefix from the title if it exists
      const title = rawTitle.replace(/^v\d+\.\d+\s*-\s*/, "").trim();
      

      const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] ?? "";

      // v adn tag in description or custom fields
      const description =
        item.match(
          /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/,
        )?.[1] ??
        item.match(/<description>([\s\S]*?)<\/description>/)?.[1] ??
        "";

      // extracting version — looking for v followed by numbers and dots
      const version =
        description.match(/v(\d+\.\d+)/)?.[0] ??
        item.match(/v(\d+\.\d+)/)?.[0] ??
        "";

      // extracting tag — new, fox, imporv, instrastr
      const tag =
        description.match(/\b(NEW|FIX|IMPROVEMENT|INFRASTRUCTURE)\b/)?.[1] ??
        "";

      // formatting the date
      const date = pubDate
        ? new Date(pubDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      return { title, version, date, tag };
    });
  } catch {
    //
    return [];
  }
}

// tag colors
const tagColors: Record<string, string> = {
  NEW: "bg-[#2196F3]/20 text-[#64B5F6]",
  FIX: "bg-[#1565C0]/20 text-[#90CAF9]",
  IMPROVEMENT: "bg-[#1976D2]/20 text-[#BBDEFB]",
  INFRASTRUCTURE: "bg-[#0D47A1]/20 text-[#E3F2FD]",
};

export default async function ChangelogWidget() {
  const entries = await getChangelogEntries();

  if (entries.length === 0) return null;

  return (
    <section className="container-narrow mt-16">
      {/* section label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 mb-5">
        {/* <span className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" /> */}
        <span className="text-white/50 text-sm">
          My Portfolio&apos;s Changelog
        </span>
      </div>

      {/* entries */}
      <div className="border border-white/10 rounded-lg overflow-hidden">
        {entries.map((entry, index) => (
          <div
            key={index}
            className={`flex items-center justify-between px-4 py-3 gap-4
              ${index !== entries.length - 1 ? "border-b border-white/10" : ""}`}
          >
            {/* left — v and title */}
            <div className="flex items-center gap-3 min-w-0">
              {entry.version && (
                <span className="text-white/30 text-xs font-mono shrink-0">
                  {entry.version}
                </span>
              )}
              <span className="text-white/80 text-sm truncate">
                {entry.title}
              </span>
            </div>

            {/* right — tag n date */}
            <div className="flex items-center gap-3 shrink-0">
              {entry.tag && (
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[entry.tag] ?? "bg-white/10 text-white/50"}`}
                >
                  {entry.tag}
                </span>
              )}
              <span className="text-white/30 text-xs">{entry.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* link */}
      <a
        href="https://clivy-one.vercel.app/changelog/portfolio-project"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-1 mt-4 text-white/40 text-xs hover:text-[#2196F3] transition-colors duration-300 w-fit ml-auto"
      >
        View full changelog
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
        <span className="absolute bottom-0 left-0 w-full h-px bg-white/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </a>

      {/* <iframe
        src="https://clivy-one.vercel.app/changelog/portfolio-project"
        style={{ width: "100%", height: "50vh", border: "none" }}
      /> */}
    </section>
  );
}
