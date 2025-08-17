import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  images: StaticImageData[];          // rutas o imports
  intervalMs?: number;       // default 5s
  showArrows?: boolean;      // default true
  showDots?: boolean;        // default true
  className?: string;
  imgAlt?: string;           // alt genérico
};

type ImgSrc = string | StaticImageData;

export default function FadeImageCarousel({
  images,
  intervalMs = 2000,
  showArrows = true,
  showDots = true,
  className = "",
  imgAlt = "imagen",
}: Props) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const list = (Array.isArray(images) ? images : [images]).filter(Boolean) as ImgSrc[];

  const go = (n: number) => setIdx(i => (i + n + images.length) % images.length);
  const goTo = (n: number) => setIdx(n);

  useEffect(() => {
    if (paused || list.length <= 1) return;
    timer.current = setInterval(() => go(1), intervalMs);
    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [paused, intervalMs, list.length]);

  if (!list?.length) return null;

  const arrowsClassNames = "bg-white w-8 h-8 rounded-full cursor-pointer shadow-md hover:opacity-50"
  return (
    <div
      className={`h-full relative overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* contenedor con relación de aspecto */}
      <div className={`relative w-full aspect-[16/9] ${list.length > 1 ? "h-[90%]" : "h-full"}`}>
        {list.map((src, i) => (
          <div
            key={`${src}${i}`}
            className={`absolute inset-0 transition-opacity hover:shadow-md duration-700 ease-in-out ${i === idx ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={src}
              alt={imgAlt}
              fill
              className="object-cover rounded-3xl"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* dots */}
        {showDots && list.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === idx ? "bg-zinc-900" : "bg-zinc-300 hover:bg-zinc-400"
                  }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* flechas */}
      {showArrows && list.length > 1 && (
        <div className="flex justify-center items-center h-[10%] gap-5 text-black">
          <button
            aria-label="Anterior"
            onClick={() => go(-1)}
            className={arrowsClassNames}
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => go(1)}
            className={arrowsClassNames}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
