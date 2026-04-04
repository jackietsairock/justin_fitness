import React from "react";

const ProgramHighlights = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section
      id="programs"
      aria-labelledby="programs-title"
      className="bg-charcoal/60 py-20 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="programs-title" className="font-display text-3xl text-white sm:text-4xl">
            Justin 為你打造的訓練核心
          </h2>
          <p className="mt-4 text-gray-300">
            每堂課都建立在評估結果與科學化訓練架構上，讓每一次動作都直指目標。
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.name}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 transition hover:border-primary-400/60 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20 text-2xl">
                <span role="img" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <h3 className="mt-6 font-semibold text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
