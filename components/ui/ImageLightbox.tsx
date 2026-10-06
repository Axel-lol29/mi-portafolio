"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  sizes = "(max-width: 800px) 92vw, (max-width: 1200px) 50vw, 46vw",
  priority = false,
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`image-lightbox-trigger ${className}`}
        onClick={() => setOpen(true)}
        aria-label={`View larger: ${caption ?? alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} priority={priority} quality={95} sizes={sizes} />
        <span className="image-lightbox-hint" aria-hidden="true"><Maximize2 size={13} /> View screen</span>
      </button>

      {open && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={caption ? `${caption} screenshot` : "Expanded screenshot"}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div className="image-lightbox__content">
            <button ref={closeRef} type="button" className="image-lightbox__close" onClick={() => setOpen(false)} aria-label="Close enlarged screenshot">
              <X size={20} />
            </button>
            <Image className="image-lightbox__image" src={src} alt={alt} width={width} height={height} quality={95} sizes="(max-width: 800px) 94vw, min(1200px, 88vw)" />
            {caption && <p className="image-lightbox__caption">{caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}
