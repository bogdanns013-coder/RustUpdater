import React from "react";

export default function UpdateAvatar({ label }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {label && <span className="text-[10px] tracking-[0.4em] text-teal-rust">{label}</span>}
      <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full border border-rust/60 bg-steel/60 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full grid-lines opacity-40" />
        <span className="relative font-heading font-black text-6xl sm:text-7xl text-rust glitch-text animate-glitch select-none">
          ?
        </span>
        <div className="absolute inset-2 rounded-full border border-dashed border-teal-rust/30 animate-spin-slow" />
        <div className="absolute -inset-1 rounded-full border border-rust/20" />
      </div>
    </div>
  );
}