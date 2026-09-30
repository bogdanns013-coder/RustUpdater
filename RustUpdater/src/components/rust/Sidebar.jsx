import React, { useState, useEffect } from "react";
import { Menu, X, Radio, Settings } from "lucide-react";
import { useLang } from "@/lib/i18n";
import SettingsPanel from "./SettingsPanel";
import RustTrefoil from "./RustTrefoil";

const SECTIONS = [
  { id: "broadcast", key: "nav_broadcast", code: "01", status: "live" },
  { id: "horizon", key: "nav_horizon", code: "02", status: "active" },
  { id: "anomaly", key: "nav_anomaly", code: "03", status: "standby" },
  { id: "archive", key: "nav_archive", code: "04", status: "standby" },
];

export default function Sidebar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [active, setActive] = useState("broadcast");

  useEffect(() => {
    const onScroll = () => {
      const ids = SECTIONS.map((s) => s.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Hydraulic trigger */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-2">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 border border-border bg-obsidian/90 backdrop-blur px-3 py-2 text-xs uppercase tracking-widest text-foreground hover:border-rust transition-colors"
          aria-label="menu"
        >
          {open ? <X size={14} /> : <Menu size={14} />}
          <RustTrefoil size={13} className="text-rust hidden sm:block" />
          <span className="hidden sm:inline">RUST UPDATER</span>
          <span className="flex items-center gap-1 text-rust">
            <Radio size={11} className="animate-flicker" />
            {t("live")}
          </span>
        </button>
        <button
          onClick={() => setSettingsOpen(true)}
          className="flex items-center gap-2 border border-border bg-obsidian/90 backdrop-blur px-3 py-2 text-xs uppercase tracking-widest text-muted-foreground hover:border-rust hover:text-foreground transition-colors"
          aria-label="settings"
        >
          <Settings size={14} />
          <span className="hidden sm:inline">{t("settings")}</span>
        </button>
      </div>

      {/* Sliding hydraulic door */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-72 max-w-[85vw] bg-obsidian border-r border-border transform transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.7,0,0.2,1)" }}
      >
        <div className="h-16 border-b border-border flex items-center gap-3 px-6">
          <RustTrefoil size={20} className="text-rust" />
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.3em] text-teal-rust">SYS // CHRONOLOGY</span>
            <span className="text-sm font-heading font-black tracking-tight">RUST UPDATER</span>
          </div>
        </div>

        <nav className="flex flex-col p-4 gap-1">
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={`group flex items-center gap-3 px-3 py-3 border text-left transition-all ${
                  isActive
                    ? "border-rust bg-rust/10 text-foreground"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    s.status === "live"
                      ? "bg-rust animate-pulse-dot"
                      : s.status === "active"
                      ? "bg-teal-rust"
                      : "bg-border"
                  }`}
                />
                <span className="text-[10px] text-teal-rust">{s.code}</span>
                <span className="text-xs uppercase tracking-wider flex-1">{t(s.key)}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border text-[10px] text-muted-foreground leading-relaxed">
          <button
            onClick={() => {
              setOpen(false);
              setSettingsOpen(true);
            }}
            className="w-full flex items-center gap-2 mb-3 text-muted-foreground hover:text-rust transition-colors"
          >
            <Settings size={12} /> {t("settings")}
          </button>
          <div className="flex justify-between mb-1">
            <span>{t("cycle")}</span>
            <span className="text-teal-rust">{t("monthly_thu")}</span>
          </div>
          <div className="flex justify-between">
            <span>{t("build_label")}</span>
            <span className="text-rust">v3.0.1</span>
          </div>
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-30 bg-black/60" onClick={() => setOpen(false)} />
      )}

      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}