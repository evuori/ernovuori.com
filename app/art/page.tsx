import PhotoCarousel from '@/components/PhotoCarousel'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Art',
  description: 'Visual Art by Erno Vuori',
})

export default function Art() {
  const images = [
    { src: '/static/images/art/0DF3E12E-624E-4253-B558-12D1C5F6CE50.jpg', alt: 'Art work' },
    { src: '/static/images/art/3F7A9EE6-6591-474D-836B-B9F927C1EBE0.jpg', alt: 'Art work' },
    { src: '/static/images/art/C7E89C33-3CAF-4C54-911E-F7E09C75EE85.jpg', alt: 'Art work' },
    { src: '/static/images/art/E8D6E0FF-FB89-4290-AA5F-57548DDFF9C1.jpg', alt: 'Art work' },
    { src: '/static/images/art/IMG_1364.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_1440.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_1490.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_1512.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_2552copy.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_2877.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_2880.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_3155.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_3348.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_3478.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_3479.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_0902.jpeg', alt: 'Art work' },
    { src: '/static/images/art/IMG_E201CB12-C46D-4DB5-B257-F132F07665F7.jpeg', alt: 'Art work' },
  ]

  return (
    <>
      <div className="relative min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-black dark:to-gray-950">
        {/* Info Section */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16">
          <h1 className="mb-12 text-center text-5xl font-black tracking-wider text-gray-900 md:text-6xl dark:text-white">
            ART
          </h1>
          <div className="space-y-12 p-8 md:p-12">
            <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Abstract, dark, and powerful visual art with roots in ancient Scandinavian
                mythology. These works explore the primal forces of nature, the depth of human
                consciousness, and the timeless narratives of the North.
              </p>
              <p>
                Contact for availability. Rentals for movies and other media productions available.
              </p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white px-4 py-12 dark:bg-black">
          <div className="mx-auto max-w-6xl bg-white dark:bg-black">
            <h2 className="mb-3 text-center text-3xl font-bold tracking-wide text-gray-900 dark:text-white">
              Gallery
            </h2>
            <p className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Click any image to view in full screen
            </p>
            <PhotoCarousel images={images} thumbnailCount={images.length} />
          </div>
        </div>
      </div>
    </>
  )
}
