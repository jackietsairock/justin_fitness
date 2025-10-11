import React, { useState } from "react";

const navigation = [
  { label: "首頁", href: "#hero" },
  { label: "最新消息", href: "#news" },
  { label: "訓練服務", href: "#programs" },
  { label: "相片圖集", href: "#gallery" },
  { label: "網站文章", href: "#articles" },
  { label: "評論推薦", href: "#reviews" },
  { label: "聯絡方式", href: "#contact" },
];

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-midnight/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#hero" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/30 font-display text-xl text-primary-200">
            <img src="/favicon.svg" alt="Logo" className="w-full h-full" />
          </span>
          <div className="leading-tight">
            <span className="block text-sm font-semibold">
              Justin Fitness
            </span>
            <span className="block text-xs text-gray-400">
              Personal Training Studio
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-300 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-primary-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-400"
          >
            預約體驗
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-200 transition hover:border-primary-400 hover:text-primary-200 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
              }
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/5 bg-midnight/95 px-6 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-gray-200">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 transition hover:bg-white/5 hover:text-primary-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
            onClick={() => setIsMenuOpen(false)}
          >
            預約體驗
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
