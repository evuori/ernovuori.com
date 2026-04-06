import Image from '@/components/Image'
import ArtGallery from '@/components/ArtGallery'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Art',
  description: 'Visual Art by Erno Vuori',
})

const images = [
  {
    src: '/static/images/art/IMG_2518F4FE-CF27-48EF-AE8A-BE4FD485EE29.jpeg',
    alt: 'Suojaväki (2026)',
    description: 'Suojaväki (2026)',
    width: 1920,
    height: 2561,
  },
  {
    src: '/static/images/art/3F7A9EE6-6591-474D-836B-B9F927C1EBE0.jpg',
    alt: 'Check my Brain (2022)',
    description: 'Check my Brain (2022)',
    width: 1920,
    height: 1559,
  },
  {
    src: '/static/images/art/IMG_3479.jpeg',
    alt: 'Green Peoples (2021)',
    description: 'Green Peoples (2021)',
    width: 1912,
    height: 1920,
  },
  {
    src: '/static/images/art/0DF3E12E-624E-4253-B558-12D1C5F6CE50.jpg',
    alt: 'Raven (2020)',
    description: 'Raven (2020)',
    width: 1429,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_0902.jpeg',
    alt: 'no_name (2026)',
    description: 'no_name (2026)',
    width: 1920,
    height: 1559,
  },
  {
    src: '/static/images/art/IMG_3155.jpeg',
    alt: 'In the beginning (2024)',
    description: 'In the beginning (2024)',
    width: 1561,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_1364.jpeg',
    alt: 'The Chase (2021)',
    description: 'The Chase (2021)',
    width: 1920,
    height: 1060,
  },
  {
    src: '/static/images/art/C7E89C33-3CAF-4C54-911E-F7E09C75EE85.jpg',
    alt: 'Witch and Drum (2022)',
    description: 'Witch and Drum (2022)',
    width: 1536,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_1512.jpeg',
    alt: 'Erotic Nightmare (2022)',
    description: 'Erotic Nightmare (2022)',
    width: 1920,
    height: 1617,
  },
  {
    src: '/static/images/art/E8D6E0FF-FB89-4290-AA5F-57548DDFF9C1.jpg',
    alt: 'The Path (2020)',
    description: 'The Path (2020)',
    width: 1433,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_2877.jpeg',
    alt: 'Two of a Kind (2023)',
    description: 'Two of a Kind (2023)',
    width: 1920,
    height: 1912,
  },
  {
    src: '/static/images/art/IMG_2552copy.jpeg',
    alt: 'The Time (2024)',
    description: 'The Time (2024)',
    width: 1920,
    height: 1506,
  },
  {
    src: '/static/images/art/IMG_1440.jpeg',
    alt: 'Blood in Vains',
    description: 'Blood in Vains (2023)',
    width: 1920,
    height: 1440,
  },
  {
    src: '/static/images/art/IMG_3348.jpeg',
    alt: 'The Story of Me (2022)',
    description: 'The Story of Me (2022)',
    width: 1920,
    height: 1500,
  },
  {
    src: '/static/images/art/IMG_1490.jpeg',
    alt: 'no_name (2023)',
    description: 'no_name (2022)',
    width: 1920,
    height: 1104,
  },
  {
    src: '/static/images/art/IMG_3478.jpeg',
    alt: 'Erotic Daydream (2022)',
    description: 'Erotic Daydream (2022)',
    width: 1920,
    height: 1917,
  },
  {
    src: '/static/images/art/IMG_2880.jpeg',
    alt: 'The Bird (2023)',
    description: 'The Bird (2023)',
    width: 1920,
    height: 1541,
  },
  {
    src: '/static/images/art/IMG_E201CB12-C46D-4DB5-B257-F132F07665F7.jpeg',
    alt: 'no_name (2025)',
    description: 'no_name (2025)',
    width: 1627,
    height: 1920,
  },
]

export default function Art() {
  return (
    <>
      {/* Hero */}
      <div className="-mx-4 sm:-mx-6 xl:-mx-0">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="/static/images/art/IMG_2552copy.jpeg"
            alt="The Wheel — ritual rune compass"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 px-6 py-10 md:px-12 md:py-14">
            <h1 className="font-bebas mb-3 text-7xl tracking-widest text-white md:text-8xl">ART</h1>
            <p className="max-w-lg text-sm leading-relaxed text-gray-300">
              Abstract, dark, and powerful visual art with roots in ancient Scandinavian mythology.
              Exploring the primal forces of nature, the depth of human consciousness, and the
              timeless narratives of the North.
            </p>
            <p className="mt-3 text-xs text-gray-500">
              Contact for availability · Rentals for film and media productions available
            </p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="-mx-4 bg-black px-2 py-3 sm:-mx-6 sm:px-3 md:py-4 xl:-mx-0">
        <ArtGallery images={images} />
      </div>
    </>
  )
}
