import React, { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const ARCHIVE = [
  "Power Trip — 06.08.2026",
  "Common Ground — 02.07.2026",
  "Built Different — 04.06.2026",
  "Upgrade Hard, Raid Harder — 07.05.2026",
  "Spring Clean — 02.04.2026",
  "Shipshape — 05.03.2026",
  "Naval Update — 05.02.2026",
];

export default function Footer() {
  const { t } = useLang();
  const [feed, setFeed] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFeed((f) => f + 1), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <footer id="archive" className="relative bg-obsidian border-t border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-rust mb-4">{t("archive_title")}</div>
            <h3 className="font-heading font-black uppercase text-2xl text-foreground mb-3">
              Rust Updater
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
              {t("footer_desc")}
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.4em] text-teal-rust mb-4">{t("cycle_protocol")}</div>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex justify-between">
                <span>{t("frequency")}</span>
                <span className="text-foreground">{t("monthly")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("day")}</span>
                <span className="text-foreground">{t("thursday")}</span>
              </li>
              <li className="flex justify-between">
                <span>{t("current")}</span>
                <span className="text-rust">Breach and Clear</span>
              </li>
              <li className="flex justify-between">
                <span>{t("next")}</span>
                <span className="text-foreground">Livestock</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.4em] text-teal-rust mb-4">{t("last_feed")}</div>
            <div className="border border-border bg-steel/40 p-3 h-40 overflow-hidden">
              <div className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                {ARCHIVE.slice(0, 5).map((a, i) => (
                  <div
                    key={i}
                    className={`transition-opacity duration-500 ${
                      (feed + i) % 2 === 0 ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    <span className="text-rust">&gt;</span> {a}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] tracking-[0.3em] text-muted-foreground">
          <span>{t("engine")}</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-rust animate-pulse-dot" />
            {t("signal_stable")}
          </span>
        </div>
      </div>
    </footer>
  );
}