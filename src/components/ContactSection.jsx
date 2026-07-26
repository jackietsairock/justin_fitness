import React from "react";

const ContactSection = ({ contact, socials }) => {
  if (!contact) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const goal = formData.get("goal")?.toString() ?? "";
    const message = formData.get("message")?.toString().trim() ?? "";
    const goalLabels = {
      "fat-loss": "減脂塑形",
      muscle: "增肌強化",
      corrective: "體態矯正",
      performance: "運動表現提升",
      others: "其他",
    };
    const goalLabel = goalLabels[goal] ?? "未指定";
    const subject = `[網站諮詢] ${name}－${goalLabel}`;
    const body = [
      "諮詢報名資料",
      "",
      `姓名：${name}`,
      `聯絡電話：${phone}`,
      `Email：${email || "未填寫"}`,
      `訓練目標：${goalLabel}`,
      "",
      "想說的話：",
      message || "未填寫",
    ].join("\n");

    window.location.href = `mailto:justine120404@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-gradient-to-br from-primary-500/20 via-midnight to-midnight py-20"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent-500/20 blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 lg:grid-cols-2">
        <div>
          <h2 id="contact-title" className="font-display text-3xl text-white sm:text-4xl">
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
              <address className="mt-3 space-y-2 text-sm not-italic text-gray-200">
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
              </address>
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
              className="w-full rounded-full bg-primary-500 px-6 py-3 font-semibold text-white transition hover:bg-primary-400"
            >
              開啟 Email 送出預約
            </button>
            <p className="text-xs text-gray-500">
              點擊後會開啟您的郵件程式，請確認內容並按下寄出。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
