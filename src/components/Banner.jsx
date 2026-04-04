import React from "react";

const Banner = ({ content }) => {
  if (!content) return null;

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-charcoal/70 via-midnight to-midnight py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/justin-hero.svg"
        >
          <source src={content.backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/70" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/60 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary-200">
            {content.eyebrow}
          </span>
          <h1 id="hero-title" className="mt-6 font-display text-5xl text-white sm:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            {content.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={content.primaryCta?.href}
              className="rounded-full bg-primary-500 px-6 py-3 font-medium text-white shadow-glow transition hover:bg-primary-400"
            >
              {content.primaryCta?.label}
            </a>
            <a
              href={content.secondaryCta?.href}
              className="rounded-full border border-gray-600/60 px-6 py-3 font-medium text-gray-200 transition hover:border-primary-400 hover:text-primary-200"
            >
              {content.secondaryCta?.label}
            </a>
          </div>
        </div>

        <dl className="grid gap-6 sm:grid-cols-3">
          {content.stats?.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg"
            >
              <dt className="text-sm uppercase tracking-[0.28em] text-primary-200">
                {stat.label}
              </dt>
              <dd className="mt-2 font-display text-4xl text-white">
                <span>{stat.value}</span>
                <span className="ml-1 text-xl text-primary-300">
                  {stat.suffix}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Banner;
