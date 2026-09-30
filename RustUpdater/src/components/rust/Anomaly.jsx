import React from "react";
import Countdown from "./Countdown";
import { useLang } from "@/lib/i18n";

export default function Anomaly({ target }) {
  const { t } = useLang();

  return (
    <section
      id="anomaly"
      className="relative min-h-screen w-full overflow-hidden py-24 px-4 sm:px-8 bg-obsidian"
    >
      <div className="absolute inset-0 grid-lines opacity-40" />

      <div className="relative z-10 max-w-[1600px] mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] tracking-[0.4em] text-rust">SECTOR // 03</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] tracking-[0.3em] text-teal-rust">{t("classified")}</span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t("anomaly_desc")}
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <Countdown target={target} />

        <div className="mt-12 border border-border bg-steel/40 p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-rust animate-pulse-dot" />
            <span className="text-[10px] tracking-[0.3em] text-rust">{t("decryption_title")}</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{t("decryption_text")}</p>
        </div>
      </div>
    </section>
  );
}