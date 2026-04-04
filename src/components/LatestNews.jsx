import React from "react";

const LatestNews = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section
      id="news"
      aria-labelledby="news-title"
      className="relative py-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.35),_transparent_65%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="news-title" className="font-display text-3xl text-white sm:text-4xl">
              最新動態
            </h2>
            <p className="mt-2 text-gray-300">
              即時掌握 Justin Fitness 最新課程、活動與專業更新。
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-primary-400/60 px-5 py-2 text-sm font-semibold text-primary-200 transition hover:bg-primary-500/20"
          >
            前往預約
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur"
            >
              <time
                dateTime={item.date}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-200"
              >
                {new Date(item.date).toLocaleDateString("zh-TW", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </time>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                {item.excerpt}
              </p>
              <a
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-primary-100"
                href={item.url}
              >
                詳細內容
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
