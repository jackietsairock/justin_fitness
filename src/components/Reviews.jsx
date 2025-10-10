import React from "react";

const starIcons = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  return Array.from({ length: 5 }, (_, index) => {
    let fill = "none";
    if (index < fullStars) {
      fill = "currentColor";
    } else if (halfStar && index === fullStars) {
      fill = "url(#halfGradient)";
    }

    return (
      <svg
        key={index}
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${
          fill === "currentColor" || fill === "url(#halfGradient)"
            ? "text-primary-300"
            : "text-gray-600"
        }`}
        aria-hidden="true"
      >
        {fill === "url(#halfGradient)" && (
          <defs>
            <linearGradient id="halfGradient">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
        )}
        <path
          fill={fill}
          stroke="currentColor"
          strokeWidth="1.5"
          d="M12 3.25l2.37 4.82 5.31.77-3.84 3.74.91 5.27L12 15.89l-4.75 2.5.91-5.27-3.84-3.74 5.31-.77L12 3.25z"
        />
      </svg>
    );
  });
};

const Reviews = ({ reviews }) => {
  if (!reviews?.length) return null;

  return (
    <section id="reviews" className="bg-charcoal/70 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Google 評論｜看學員怎麼說
            </h2>
            <p className="mt-2 text-gray-300">
              真實學員回饋，見證 Justin 教練的專業與陪伴。
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-gray-200 transition hover:border-primary-400/70 hover:text-primary-200"
          >
            觀看更多評論
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.reviewer}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/10 to-transparent p-7 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/30 text-sm font-semibold text-primary-100">
                  {review.profileInitials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.reviewer}
                  </p>
                  <div className="flex items-center gap-1 text-xs">
                    {starIcons(review.rating)}
                    <span className="text-gray-400">({review.rating})</span>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-gray-200">
                {review.content}
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-gray-500">
                {new Date(review.date).toLocaleDateString("zh-TW", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
