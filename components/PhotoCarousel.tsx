'use client'

import { useState } from 'react'
import Image from './Image'

interface PhotoCarouselProps {
  images: { src: string; alt: string }[]
  thumbnailCount?: number
}

export default function PhotoCarousel({ images, thumbnailCount = 4 }: PhotoCarouselProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeCarousel = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeCarousel()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-4 bg-white md:grid-cols-4 dark:bg-black">
        {images.slice(0, thumbnailCount).map((image, index) => (
          <button
            key={index}
            onClick={() => openCarousel(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-white transition-transform hover:scale-105 dark:bg-black"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-opacity group-hover:opacity-80"
              style={{ backgroundColor: 'transparent' }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <svg
                className="h-12 w-12 text-white opacity-0 transition-opacity group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Carousel */}
      {isOpen && (
        <button
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={closeCarousel}
          onKeyDown={handleKeyDown}
          aria-label="Close carousel"
          type="button"
        >
          {/* Close Button */}
          <button
            onClick={closeCarousel}
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
            aria-label="Close carousel"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 z-50 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Previous image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Image Container */}
          <button
            className="relative mx-auto h-[80vh] w-[90vw] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            type="button"
            aria-label="View image"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 z-50 rounded-full bg-black/50 p-3 text-white transition-colors hover:bg-black/70"
            aria-label="Next image"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </button>
      )}
    </>
  )
}
