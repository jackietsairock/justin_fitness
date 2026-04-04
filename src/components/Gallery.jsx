import React from "react";

const Gallery = ({ images }) => {
  if (!images?.length) return null;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-charcoal/80 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="gallery-title" className="font-display text-3xl text-white sm:text-4xl">
              訓練現場與成果
            </h2>
            <p className="mt-3 text-sm text-gray-300">
              紀錄每一次突破與蜕變，讓努力的瞬間被看見。
            </p>
          </div>
          <p className="text-xs uppercase tracking-[0.28em] text-primary-200">
            #justinfitness #強大體態
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 via-midnight/50 to-transparent px-4 py-4 text-sm text-gray-200 opacity-0 transition group-hover:opacity-100">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
