'use client';

import FsLightbox from 'fslightbox-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const videoUrl = '/videos/video_homepage.webm';
const VIDEO_START_TIME = 1; // seconds (0:01)
const VIDEO_END_TIME = 142; // seconds (2:22)

export function IntroVideo({ label = 'Watch intro' }: { label?: string }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const setupVideo = () => {
      const video = document.querySelector<HTMLVideoElement>(
        '.fslightbox-flex-centered video'
      );

      if (!video) return false;

      // 1. Forzamos el salto al segundo 1 inmediatamente al encontrar el video
      // Esto evita que se alcance a ver el frame del segundo 0:00
      if (video.currentTime < VIDEO_START_TIME) {
        video.currentTime = VIDEO_START_TIME;
      }

      video.muted = true; // Nota: Si quieres que tu video tenga sonido, borra esta línea.

      const handleLoadedMetadata = () => {
        video.currentTime = VIDEO_START_TIME;
        video.play().catch(() => {});
      };

      const handleTimeUpdate = () => {
        // 2. Cuando llega al segundo 142, lo regresamos al segundo 1 (bucle)
        if (video.currentTime >= VIDEO_END_TIME) {
          video.currentTime = VIDEO_START_TIME;
          video.play().catch(() => {});
        }
      };

      // 3. Si el video ya había cargado su metadata antes de que el código llegara aquí, lo ejecutamos
      if (video.readyState >= 1) {
        handleLoadedMetadata();
      } else {
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }
      
      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    };

    let cleanup: (() => void) | undefined;

    const interval = setInterval(() => {
      const result = setupVideo();
      
      // 4. AQUÍ ESTÁ EL FIX DEL ERROR:
      // Verificamos que 'result' sea una función antes de asignarlo a 'cleanup'.
      // Así TypeScript sabe que jamás le asignaremos el 'false'.
      if (typeof result === 'function') {
        cleanup = result;
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (cleanup) cleanup();
    };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full video-popup flex h-12 gap-3 items-center text-sm border bg-white dark:bg-white/10 dark:border-white/[0.05] dark:text-white border-gray-100 p-1.5 pr-6"
      >
        <span className="size-9 rounded-full gradient-bg-two inline-flex items-center justify-center text-sm font-medium">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3.71077L3.5 12.3482C3.5 13.5211 4.78545 14.2402 5.78489 13.6265L12.8183 9.30776C13.7717 8.7223 13.7717 7.33672 12.8183 6.75125L5.7849 2.43251C4.78545 1.81882 3.5 2.53795 3.5 3.71077Z"
              fill="white"
            />
          </svg>
        </span>
        {label}
      </button>

      {isMounted &&
        createPortal(
          <FsLightbox toggler={isOpen} sources={[videoUrl]} types={['video']} />,
          document.body
        )}
    </>
  );
}