import React from "react";

const BlogPosts = ({ posts }) => {
  if (!posts?.length) return null;

  return (
    <section id="articles" className="relative py-20">
      <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-primary-500/20 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              專業文章
            </h2>
            <p className="mt-2 text-gray-300">
              Justin 與團隊分享訓練、營養與生活管理的第一手見解。
            </p>
          </div>
          <a
            href="https://instagram.com/justinfitness"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-500/70"
          >
            追蹤更多內容
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col rounded-2xl border border-white/10 bg-charcoal/60 p-7 transition hover:border-primary-400/80 hover:shadow-glow"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary-200">
                {post.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                {post.description}
              </p>
              <div className="mt-6 flex items-center justify-between text-xs text-gray-400">
                <span>
                  {new Date(post.date).toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span>{post.readingTime}</span>
              </div>
              <a
                href={post.url}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary-200 hover:text-primary-100"
              >
                繼續閱讀
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
