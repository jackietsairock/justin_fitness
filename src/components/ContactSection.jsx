import React, { useState } from "react";

const ContactSection = ({ contact, socials }) => {
  const [formStatus, setFormStatus] = useState({ state: "idle", message: "" });
  const scriptUrl = import.meta.env.PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  if (!contact) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!scriptUrl) {
      setFormStatus({
        state: "error",
        message: "尚未設定 Google Apps Script 連結，請通知網站管理員。",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("submittedAt", new Date().toISOString());

    setFormStatus({ state: "loading", message: "資料送出中，請稍候…" });

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formData,
      });

      const raw = await response.text();
      let parsed = null;

      try {
        parsed = JSON.parse(raw);
      } catch {
        parsed = null;
      }

      if (!response.ok || (parsed && parsed.status && parsed.status !== "success")) {
        throw new Error(parsed?.message || "Unexpected response from Apps Script");
      }

      form.reset();
      setFormStatus({
        state: "success",
        message: "已成功送出，將在 24 小時內與您聯繫！",
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        state: "error",
        message: "送出失敗，請稍後再試或直接使用電話、Email 聯繫。",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 via-midnight to-midnight py-20"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-500/20 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            預約 Justin，一起打造強大體態
          </h2>
          <p className="mt-4 text-gray-300">
            填寫表單或直接聯繫我們，預約體驗課程可獲得 30 分鐘動作評估與客製化訓練建議。
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary-200">
                聯絡資訊
              </p>
              <div className="mt-3 space-y-2 text-sm text-gray-200">
                <a href={`tel:${contact.phone}`} className="block hover:text-primary-200">
                  電話：{contact.phone}
                </a>
                <a href={`mailto:${contact.email}`} className="block hover:text-primary-200">
                  Email：{contact.email}
                </a>
                <a
                  href={contact.googleMaps}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-primary-200"
                >
                  地址：{contact.address}
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary-200">
                營業時間
              </p>
              <dl className="mt-3 space-y-2 text-sm text-gray-200">
                {contact.businessHours?.map((item) => (
                  <div key={item.label} className="flex justify-between gap-6">
                    <dt className="text-gray-400">{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {socials?.length ? (
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-primary-200">
                  社群媒體
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-gray-200 transition hover:border-primary-400/60 hover:text-primary-100"
                    >
                      <span className="text-xs uppercase tracking-wide text-gray-400 group-hover:text-primary-200">
                        {social.label}
                      </span>
                      <span>{social.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                姓名
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="請輸入您的姓名"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-400"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-gray-200">
                  聯絡電話
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="09xx-xxx-xxx"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-400"
                />
              </div>
            </div>
            <div>
              <label htmlFor="goal" className="text-sm font-medium text-gray-200">
                訓練目標
              </label>
              <select
                id="goal"
                name="goal"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-400"
              >
                <option value="fat-loss">減脂塑形</option>
                <option value="muscle">增肌強化</option>
                <option value="corrective">體態矯正</option>
                <option value="performance">運動表現提升</option>
                <option value="others">其他</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-gray-200">
                想說的話
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="請描述您的訓練歷程、目前狀況或想諮詢的內容"
                className="mt-2 w-full rounded-xl border border-white/10 bg-midnight/80 px-4 py-3 text-sm text-white outline-none transition focus:border-primary-400"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus.state === "loading"}
              className="w-full rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-400 disabled:cursor-not-allowed disabled:bg-primary-500/60"
            >
              {formStatus.state === "loading" ? "送出中…" : "送出預約需求"}
            </button>
            <p className="text-xs text-gray-500">
              送出後 24 小時內會由專人與您聯繫確認體驗時間。
            </p>
            {formStatus.state !== "idle" ? (
              <p
                className={`text-sm ${
                  formStatus.state === "success" ? "text-emerald-300" : "text-red-300"
                }`}
                aria-live="polite"
              >
                {formStatus.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
