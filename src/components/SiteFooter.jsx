import React from "react";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-midnight/95 py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 text-sm text-gray-400 sm:px-10 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold text-white">Justin Fitness</p>
          <p className="mt-2 max-w-xs text-sm text-gray-400">
            以專業、一致性與陪伴，協助每位學員建立可長期維持的健康體態。
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200">快速導覽</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#news" className="hover:text-primary-200">
                最新消息
              </a>
            </li>
            <li>
              <a href="#programs" className="hover:text-primary-200">
                訓練方案
              </a>
            </li>
            <li>
              <a href="#articles" className="hover:text-primary-200">
                專業文章
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary-200">
                聯絡我們
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200">聲明</p>
          <p className="mt-3 text-xs leading-relaxed text-gray-500">
            本網站提供的資訊僅供教育用途，實際訓練請遵從 Justin 教練專業指導，並在任何有疾病或受傷狀況下先行諮詢專業醫師。
          </p>
        </div>
      </div>
      <div className="mt-8 border-t border-white/5 pt-6">
        <p className="text-center text-xs text-gray-600">
          © {year} <a href="https://jackiedesign.tw">Jackie設計</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
