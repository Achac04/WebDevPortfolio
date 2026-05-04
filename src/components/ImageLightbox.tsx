"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type ImageLightboxProps = {
  src: string;
  alt: string;
  sizes: string;
  unoptimized?: boolean;
  priority?: boolean;
  /** Thumbnail wrapper, e.g. relative aspect-[16/10] overflow-hidden bg-off-white */
  frameClassName: string;
  /** Extra classes on the thumbnail Image (e.g. object-cover object-top) */
  imageClassName?: string;
};

export default function ImageLightbox({
  src,
  alt,
  sizes,
  unoptimized = false,
  priority = false,
  frameClassName,
  imageClassName = "object-cover",
}: ImageLightboxProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;
    const onClose = () => {
      setOpen(false);
      queueMicrotask(() => triggerRef.current?.focus());
    };
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  return (
    <>
      <div className={frameClassName}>
        <button
          type="button"
          ref={triggerRef}
          onClick={openDialog}
          className="group absolute inset-0 z-10 cursor-zoom-in border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={`Open full size: ${alt}`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            unoptimized={unoptimized}
            className={`pointer-events-none transition duration-300 ease-out group-hover:scale-[1.02] ${imageClassName}`}
          />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="m-0 h-full max-h-full w-full max-w-full border-0 bg-transparent p-0 text-paper [&::backdrop]:bg-[rgb(10_10_10/0.88)]"
        aria-labelledby={titleId}
      >
        <div className="flex h-full w-full items-center justify-center p-4 md:p-8" onClick={close}>
          <div
            className="relative flex max-h-full max-w-full flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p id={titleId} className="sr-only">
              {alt}
            </p>
            <button
              type="button"
              onClick={close}
              className="shrink-0 rounded border border-paper/30 bg-charcoal/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-paper hover:text-charcoal"
            >
              Close
            </button>
            {/* Native img keeps correct aspect in modal without guessing dimensions */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[min(85dvh,calc(100vh-8rem))] max-w-[min(95vw,calc(100vw-2rem))] object-contain shadow-2xl"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
