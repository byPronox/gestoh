'use client';

import { useEffect, useRef } from 'react';

const VIDEO_START_TIME = 1; // seconds (0:01)
const VIDEO_END_TIME = 142; // seconds (2:22)
const VIDEO_SRC = '/videos/video_homepage.webm';

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      video.currentTime = VIDEO_START_TIME;
      video.muted = true;
      video.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= VIDEO_END_TIME) {
        video.currentTime = VIDEO_START_TIME;
        video.play().catch(() => {});
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full rounded-2xl block"
      src={VIDEO_SRC}
      muted
      autoPlay
      playsInline
    />
  );
}

