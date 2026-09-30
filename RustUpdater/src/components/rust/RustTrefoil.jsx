import React from "react";

const pt = (r, deg) => {
  const rad = (deg * Math.PI) / 180;
  return [50 + r * Math.cos(rad), 50 + r * Math.sin(rad)];
};

const blade = (centerDeg) => {
  const r1 = 15;
  const r2 = 42;
  const h = 30;
  const [ax, ay] = pt(r1, centerDeg - h);
  const [bx, by] = pt(r2, centerDeg - h);
  const [cx, cy] = pt(r2, centerDeg + h);
  const [dx, dy] = pt(r1, centerDeg + h);
  return `M ${ax} ${ay} L ${bx} ${by} A ${r2} ${r2} 0 0 1 ${cx} ${cy} L ${dx} ${dy} A ${r1} ${r1} 0 0 0 ${ax} ${ay} Z`;
};

export default function RustTrefoil({ className = "", size = 20 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d={blade(-90)} />
      <path d={blade(30)} />
      <path d={blade(150)} />
      <circle cx="50" cy="50" r="9" />
    </svg>
  );
}