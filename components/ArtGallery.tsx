'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from '@/components/Image'

interface ArtImage {
  src: string
  alt: string
  description: string
  width: number
  height: number
}

interface ArtGalleryProps {
  images: ArtImage[]
}

export default function ArtGallery({ images }: ArtGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.style.overflow = 'unset'
  }, [])

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0))
  }, [images.length])

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0))
  }, [images.length])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightboxIndex, closeLightbox, goNext, goPrev])

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-2 gap-2 md:columns-3 md:gap-3">
        {images.map((image, index) => (
          <div key={index} className="mb-2 break-inside-avoid md:mb-3">
            <button
              onClick={() => openLightbox(index)}
              className="group relative block w-full cursor-pointer overflow-hidden"
              aria-label={image.alt}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="translate-y-2 p-3 text-xs leading-relaxed text-white transition-transform duration-300 group-hover:translate-y-0 md:p-4 md:text-sm">
                  {image.description}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/96"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          {/* Close */}
          <span
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-hidden="true"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            className="absolute left-3 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Previous"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image + description */}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <div
            className="flex max-h-[90vh] w-full max-w-5xl flex-col items-center px-16"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={images[lightboxIndex].alt}
          >
            <div className="relative h-[72vh] w-full">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 max-w-2xl text-center text-sm leading-relaxed text-gray-400">
              {images[lightboxIndex].description}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            className="absolute right-3 z-50 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
            aria-label="Next"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 text-sm text-white/40">
            {lightboxIndex + 1} / {images.length}
          </div>
        </button>
      )}
    </>
  )
}
