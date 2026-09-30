import React, { useState } from "react";
import { X, Hammer, Check } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function SettingsPanel({ open, onClose }) {
  const { lang, setLang, t } = useLang();
  const [built, setBuilt] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md border border-border bg-obsidian"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <span className="text-xs tracking-[0.3em] text-teal-rust">{t("settings_title")}</span>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-rust transition-colors"
            aria-label="close"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <div>
            <div className="text-[10px] tracking-[0.3em] text-teal-rust mb-3">{t("language")}</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["en", "ENGLISH"],
                ["ru", "РУССКИЙ"],
              ].map(([code, label]) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`flex items-center justify-between px-3 py-2 border text-xs tracking-wider transition-colors ${
                    lang === code
                      ? "border-rust bg-rust/10 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                  {lang === code && <Check size={13} className="text-rust" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.3em] text-teal-rust mb-3">{t("build_label")}</div>
            <button
              onClick={() => setBuilt(true)}
              className="w-full flex items-center justify-center gap-2 border border-rust bg-rust/10 px-4 py-3 text-sm uppercase tracking-widest text-rust hover:bg-rust hover:text-primary-foreground transition-colors"
            >
              <Hammer size={15} /> {t("build_btn")}
            </button>
            {built && (
              <div className="mt-3 text-center text-sm font-heading font-black tracking-[0.3em] text-rust animate-flicker">
                {t("coming_soon")}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}