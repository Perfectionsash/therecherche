"use client";

import { forwardRef, ImgHTMLAttributes, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CustomImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export const CustomImage = forwardRef<HTMLImageElement, CustomImageProps>(
  ({ src, alt, fill, priority, sizes, className, placeholder = "blur", blurDataURL, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    if (hasError) {
      return (
        <div
          ref={ref}
          className={cn("bg-chalk flex items-center justify-center", className)}
          style={fill ? { width: "100%", height: "100%" } : undefined}
          {...props}
        >
          <svg className="h-12 w-12 text-warm-grey" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      );
    }

    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          ref={ref}
          src={src}
          alt={alt}
          fill={fill}
          priority={priority}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={cn(
            "transition-all duration-500 ease-out",
            isLoading ? "scale-[1.05] blur-[20px] grayscale" : "scale-100 blur-0 grayscale-0",
            fill ? "object-cover" : ""
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          {...props}
        />
      </div>
    );
  }
);

CustomImage.displayName = "CustomImage";

export interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; caption?: string }[];
  initialIndex?: number;
}

export function Lightbox({ isOpen, onClose, images, initialIndex = 0 }: LightboxProps) {
  if (!isOpen || images.length === 0) return null;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        className="absolute top-6 right-6 z-10 p-2 text-chalk hover:text-brass transition-colors"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close lightbox"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-6 z-10 p-2 text-chalk hover:text-brass transition-colors"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); }}
            aria-label="Previous image"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-6 z-10 p-2 text-chalk hover:text-brass transition-colors"
            onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); }}
            aria-label="Next image"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      <div className="relative max-w-[90vw] max-h-[85vh]">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          width={1200}
          height={800}
          className="max-w-full max-h-[85vh] object-contain"
          priority
        />
        {currentImage.caption && (
          <div className="mt-4 text-center text-chalk font-ui text-xs">
            {currentImage.caption}
          </div>
        )}
        <div className="mt-2 text-center text-warm-grey font-ui text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}