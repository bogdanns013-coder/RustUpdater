const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import Sidebar from "@/components/rust/Sidebar";
import Hero from "@/components/rust/Hero";
import Horizon from "@/components/rust/Horizon";
import Anomaly from "@/components/rust/Anomaly";
import Footer from "@/components/rust/Footer";

const IMG_ICON = "https://media.db.com/images/public/6abcc1e1f0d65c3df395170a/4bfa2a3fa_mqdefault.jpg";

// Livestock: Thursday 1 Oct 2026, 19:00 BST. Third update: first Thursday of November.
const UPDATE_2_TARGET = new Date("2026-10-01T18:00:00Z").getTime();
const UPDATE_3_TARGET = new Date("2026-11-05T19:00:00Z").getTime();

export default function Home() {
  return (
    <div className="relative bg-obsidian min-h-screen">
      <Sidebar />
      <main>
        <Hero />
        <Horizon target={UPDATE_2_TARGET} icon={IMG_ICON} />
        <Anomaly target={UPDATE_3_TARGET} />
        <Footer />
      </main>
    </div>
  );
}