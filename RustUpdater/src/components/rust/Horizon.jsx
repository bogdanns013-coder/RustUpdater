import React from "react";
import Countdown from "./Countdown";
import { useLang } from "@/lib/i18n";

export default function Horizon({ target, icon }) {
  const { t } = useLang();

  return (
    <section
      id="horizon"
      className="relative min-h-screen w-full overflow-hidden py-24 px-4 sm:px-8"
      style={{ background: "linear-gradient(180deg, #0A0B0C 0%, #0E1517 50%, #0A0B0C 100%)" }}
    >
      <div className="absolute inset-0 grid-lines opacity-50" />

      <div className="relative z-10 max-w-[1600px] mx-auto mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] tracking-[0.4em] text-rust">SECTOR // 02</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] tracking-[0.3em] text-teal-rust">{t("next_update_label")}</span>
        </div>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t("horizon_desc")}
        </p>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="flex justify-center mb-6">
          <img
            src={icon}
            alt="Livestock"
            className="h-20 w-20 rounded-full border border-rust object-cover"
          />
        </div>
        <Countdown target={target} name="Livestock" />
        <p className="mt-8 text-center text-xs text-muted-foreground">{t("next_features")}</p>
      </div>

      <div className="relative z-10 mt-16 max-w-[1600px] mx-auto flex items-center gap-4 text-[10px] tracking-[0.3em] text-teal-rust">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-rust animate-pulse-dot" />
        {t("status_calm")}
      </div>
    </section>
  );
}