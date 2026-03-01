"use client";

import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LAT = 41.6938;
const LNG = 44.8015;
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function ContactMap() {
  // live clock
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Tbilisi",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = document.getElementById("contact-map") as HTMLElement & {
      _leaflet_id?: number;
    };
    if (container._leaflet_id) return;

    setTimeout(() => {
      map.flyTo([LAT, LNG], 3, {
        duration: 1.5,
        easeLinearity: 0.1,
      });
    }, 100);

    const map = L.map("contact-map", {
      center: [LAT, LNG],
      zoom: 1,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer(
      `https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      { tileSize: 512, zoomOffset: -1 },
    ).addTo(map);

    const glowIcon = L.divIcon({
      className: "",

      html: `
        <div style="
          width: 20px; height: 20px;
          background: rgba(33,150,243,0.25);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 5px rgba(33,150,243,0.5);
        ">
          <div style="
            width: 8px; height: 8px;
            background: #2196F3;
            border-radius: 50%;
            box-shadow: 0 0 6px #2196F3;
          "></div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    L.marker([LAT, LNG], { icon: glowIcon }).addTo(map);
  }, []);

  return (
    <div className="relative w-full h-52 rounded-xl overflow-hidden mb-6 border-2 border-white/10">
      <div id="contact-map" className="w-full h-full" />

      {/*  clock */}
      <div className="absolute top-3 right-3 z-1000 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-white/10">
        <span className="text-white  text-sm tracking-wide">{time} GET</span>
      </div>

      {/* location */}
      <div className="absolute bottom-3 left-3 z-1000 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2196F3]" />
        <span className="text-white/70 text-xs">Tbilisi, Georgia</span>
      </div>
    </div>
  );
}
