import React, { createContext, useContext, useState, useEffect } from "react";

export const translations = {
  en: {
    live: "LIVE",
    settings: "SETTINGS",
    nav_broadcast: "Current Update",
    nav_horizon: "Next Update // 02",
    nav_anomaly: "Unknown // 03",
    nav_archive: "Terminal Archive",
    cycle: "CYCLE",
    monthly_thu: "MONTHLY / THU",
    build_label: "BUILD",
    current_update: "CURRENT UPDATE",
    sector_broadcast: "SECTOR // 01 — BROADCAST",
    signal_active: "SIGNAL ACTIVE",
    technical_specs: "TECHNICAL SPECS",
    core_features: "WHAT'S IN THE PATCH",
    scroll_horizon: "SCROLL TO NEXT UPDATE",
    day_thursday: "THURSDAY",
    status_deployed: "DEPLOYED",
    f1: "Monument Blockers",
    f2: "Breakable Attack Heli Armour",
    f3: "HQM Nodes",
    f4: "Upkeep Group Scaling",
    f5: "The Honey Bandage",
    f6: "Item buffs, QoL and balance changes",
    horizon_desc: "Updates ship once a month, on Thursday. The next one is Livestock — time left until release:",
    status_calm: "STATUS: LIVESTOCK INCOMING",
    next_update_label: "NEXT UPDATE",
    next_features: "Expected: new livestock animals, critters and swimmers.",
    update_name: "UPDATE NAME",
    anomaly_desc: "The update after Livestock is unknown. Nothing has been announced yet.",
    decryption_title: "NO SIGNAL",
    decryption_text: "Facepunch has not revealed anything about this update. Until the name is announced, the [ ? ] indicator is shown.",
    classified: "UNKNOWN",
    archive_title: "TERMINAL // ARCHIVE",
    footer_desc: "A live chronology of Rust updates. Updates ship once a month, on Thursday.",
    cycle_protocol: "CYCLE PROTOCOL",
    frequency: "Frequency",
    monthly: "Once a month",
    day: "Day",
    thursday: "Thursday",
    current: "Current",
    next: "Next",
    last_feed: "PAST UPDATES",
    engine: "RUST UPDATER // CHRONOLOGY ENGINE",
    signal_stable: "SIGNAL STABLE",
    days: "DAYS",
    hrs: "HRS",
    min: "MIN",
    sec: "SEC",
    target: "TARGET",
    settings_title: "SETTINGS",
    language: "LANGUAGE",
    build_btn: "BUILD",
    coming_soon: "COMING SOON...",
  },
  ru: {
    live: "ЭФИР",
    settings: "НАСТРОЙКИ",
    nav_broadcast: "Текущая обнова",
    nav_horizon: "Следующая обнова // 02",
    nav_anomaly: "Неизвестно // 03",
    nav_archive: "Архив терминала",
    cycle: "ЦИКЛ",
    monthly_thu: "РАЗ В МЕСЯЦ / ЧТ",
    build_label: "СБОРКА",
    current_update: "ТЕКУЩАЯ ОБНОВА",
    sector_broadcast: "СЕКТОР // 01 — ЭФИР",
    signal_active: "СИГНАЛ АКТИВЕН",
    technical_specs: "ТЕХ. ХАРАКТЕРИСТИКИ",
    core_features: "ЧТО В ПАТЧЕ",
    scroll_horizon: "ПРОКРУТКА К СЛЕДУЮЩЕЙ ОБНОВЕ",
    day_thursday: "ЧЕТВЕРГ",
    status_deployed: "РАЗВЁРНУТО",
    f1: "Блокировщики монументов",
    f2: "Разрушаемая броня атакующего вертолёта",
    f3: "Узлы HQM",
    f4: "Масштабирование групп апкипа",
    f5: "Медовый бинт",
    f6: "Баффы предметов, QoL и баланс",
    horizon_desc: "Обновления выходят раз в месяц, в четверг. Следующая — Livestock. До релиза осталось:",
    status_calm: "СТАТУС: LIVESTOCK СКОРО",
    next_update_label: "СЛЕДУЮЩАЯ ОБНОВА",
    next_features: "Ожидается: новые животные-скот, мелкие зверьки и водные существа.",
    update_name: "НАЗВАНИЕ ОБНОВЫ",
    anomaly_desc: "Обнова после Livestock пока неизвестна. Ничего не анонсировано.",
    decryption_title: "НЕТ СИГНАЛА",
    decryption_text: "Facepunch ещё ничего не раскрыли об этой обнове. Пока название не объявлено, отображается индикатор [ ? ].",
    classified: "НЕИЗВЕСТНО",
    archive_title: "ТЕРМИНАЛ // АРХИВ",
    footer_desc: "Живая хронология обновлений Rust. Обновы выходят раз в месяц, в четверг.",
    cycle_protocol: "ПРОТОКОЛ ЦИКЛА",
    frequency: "Частота",
    monthly: "Раз в месяц",
    day: "День",
    thursday: "Четверг",
    current: "Текущая",
    next: "Следующая",
    last_feed: "ПРОШЛЫЕ ОБНОВЫ",
    engine: "RUST UPDATER // ДВИЖОК ХРОНОЛОГИИ",
    signal_stable: "СИГНАЛ СТАБИЛЕН",
    days: "ДНЕЙ",
    hrs: "ЧАС",
    min: "МИН",
    sec: "СЕК",
    target: "ЦЕЛЬ",
    settings_title: "НАСТРОЙКИ",
    language: "ЯЗЫК",
    build_btn: "BUILD",
    coming_soon: "COMING SOON...",
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("rust_lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("rust_lang", lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key) => translations[lang]?.[key] ?? translations.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { lang: "en", setLang: () => {}, t: (k) => translations.en[k] ?? k };
  }
  return ctx;
}