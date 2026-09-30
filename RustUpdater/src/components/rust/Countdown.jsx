import React, { useState, useEffect } from "react";
import UpdateAvatar from "./UpdateAvatar";
import { useLang } from "@/lib/i18n";

function getRemaining(target) {
  const now = Date.now();
  let diff = target - now;
  const expired = diff <= 0;
  if (expired) diff = 0;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    expired,
  };
}

export default function Countdown({ target, name = null, revealNameOnLastDay = false }) {
  const { t, lang } = useLang();
  const [rem, setRem] = useState(() => getRemaining(target));
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRem(getRemaining(target));
    const id = setInterval(() => setRem(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  useEffect(() => {
    if (revealNameOnLastDay && name && rem.days <= 0 && !rem.expired) {
      setRevealed(true);
    }
  }, [rem.days, rem.expired, revealNameOnLastDay, name]);

  const showAvatar = !name || (revealNameOnLastDay && !revealed);

  const blocks = [
    { v: rem.days, l: t("days") },
    { v: rem.hours, l: t("hrs") },
    { v: rem.minutes, l: t("min") },
    { v: rem.seconds, l: t("sec") },
  ];

  const dateStr = new Date(target).toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="text-center">
      {/* Name / "?" avatar */}
      <div className="mb-10 flex justify-center">
        {showAvatar ? (
          <UpdateAvatar label={t("update_name")} />
        ) : (
          <h2 className="font-heading font-black uppercase text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight">
            {name}
          </h2>
        )}
      </div>

      {/* Nixie-style clock */}
      <div className="flex justify-center gap-2 sm:gap-4">
        {blocks.map((b, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="relative w-16 sm:w-28 h-24 sm:h-40 border border-border bg-steel/60 overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 grid-lines opacity-40" />
              <span className="relative font-heading font-black text-4xl sm:text-7xl text-rust tabular-nums">
                {String(b.v).padStart(2, "0")}
              </span>
              <div className="absolute top-1 left-1 text-[8px] text-teal-rust/60">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <span className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] text-teal-rust">{b.l}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center gap-4 text-[10px] tracking-[0.3em] text-muted-foreground">
        <span className="h-px w-12 bg-border" />
        <span>
          {t("target")} // {dateStr} / THU
        </span>
        <span className="h-px w-12 bg-border" />
      </div>
    </div>
  );
}