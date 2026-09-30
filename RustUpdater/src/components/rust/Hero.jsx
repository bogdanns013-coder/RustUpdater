import React from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import RustTrefoil from "./RustTrefoil";

export default function Hero() {
  const { t } = useLang();

  const SPECS = [
    { k: "PATCH", v: "BREACH AND CLEAR" },
    { k: "DATE", v: "03.09.2026" },
    { k: "DAY", v: t("day_thursday") },
    { k: "TIME", v: "19:00 BST" },
    { k: "STATUS", v: t("status_deployed") },
  ];

  const FEATURES = [t("f1"), t("f2"), t("f3"), t("f4"), t("f5"), t("f6")];

  return (
    <section id="broadcast" className="relative min-h-screen w-full overflow-hidden bg-obsidian grid-lines">
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border text-[10px] tracking-[0.25em] text-teal-rust">
        <span className="ml-32 sm:ml-64 flex items-center gap-2">
          <RustTrefoil size={12} className="text-rust" />
          {t("sector_broadcast")}
        </span>
        <span className="hidden md:flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-rust animate-pulse-dot" />
          {t("signal_active")}
        </span>
      </div>

      <div className="relative z-10 pt-28 px-4 sm:px-8 lg:px-16 max-w-[1600px] mx-auto pb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] tracking-[0.4em] text-rust">{t("current_update")}</span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] tracking-[0.3em] text-teal-rust">01 / 03</span>
        </div>

        <h1 className="font-heading font-black uppercase leading-[0.85] tracking-tight text-foreground text-[15vw] sm:text-[11vw] lg:text-[9rem]">
          <span className="block">Breach</span>
          <span className="block">
            <span className="block h-px w-full bg-rust my-1 sm:my-2" />
            & Clear
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-7">
            <div className="text-[10px] tracking-[0.3em] text-teal-rust mb-4">{t("core_features")}</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {FEATURES.map((f, i) => (
                <li key={i} className="flex items-center gap-4 bg-obsidian px-4 py-5">
                  <span className="text-[10px] text-rust">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm text-foreground/90 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-border bg-steel/40">
              <div className="px-4 py-2 border-b border-border flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] text-teal-rust">{t("technical_specs")}</span>
                <span className="text-[10px] text-rust">[{t("status_deployed")}]</span>
              </div>
              <dl className="divide-y divide-border">
                {SPECS.map((s) => (
                  <div key={s.k} className="flex justify-between px-4 py-3 text-xs">
                    <dt className="text-muted-foreground tracking-wider">{s.k}</dt>
                    <dd className="text-foreground font-medium">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-[10px] tracking-[0.3em] text-muted-foreground">
          <ArrowDown size={12} className="text-rust animate-bounce" />
          {t("scroll_horizon")}
        </div>
      </div>
    </section>
  );
}