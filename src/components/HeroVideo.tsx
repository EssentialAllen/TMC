"use client";

import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    const play = () => void video.play().catch(() => undefined);
    play();
    video.addEventListener("canplay", play, { once: true });
    document.addEventListener("visibilitychange", play);
    return () => {
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
    <source src="/hero-construction.mp4" type="video/mp4" />
  </video>;
}
