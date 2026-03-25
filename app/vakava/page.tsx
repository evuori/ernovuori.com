import Image from '@/components/Image'
import PhotoCarousel from '@/components/PhotoCarousel'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Vakava',
  description: 'Vakava - Dark Folk Rock and Music for Theater, Film, TV and Games',
})

export default function Vakava() {
  const images = [
    { src: '/static/images/vakava/CZ0A7467.jpg', alt: 'Vakava Live Ritual' },
    { src: '/static/images/vakava/CZ0A7491.jpg', alt: 'Vakava performance' },
    { src: '/static/images/vakava/CZ0A7516.jpg', alt: 'Vakava live' },
    { src: '/static/images/vakava/CZ0A7529.jpg', alt: 'Vakava on stage' },
    { src: '/static/images/vakava/CZ0A7566.jpg', alt: 'Vakava Live Ritual' },
    { src: '/static/images/vakava/CZ0A7652.jpg', alt: 'Vakava performing' },
    { src: '/static/images/vakava/CZ0A7676.jpg', alt: 'Vakava live show' },
    { src: '/static/images/vakava/CZ0A7698.jpg', alt: 'Vakava Live Ritual' },
    { src: '/static/images/vakava/CZ0A7786.jpg', alt: 'Vakava Live Ritual' },
    { src: '/static/images/vakava/CZ0A7789.jpg', alt: 'Vakava on stage' },
    { src: '/static/images/vakava/CZ0A7903.jpg', alt: 'Vakava performance' },
    { src: '/static/images/vakava/P1700249.JPG', alt: 'Vakava' },
  ]

  return (
    <>
      <div className="relative min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-black dark:to-gray-950">
        {/* Info Section */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16">
          <h1 className="mb-12 text-center text-5xl font-black tracking-wider text-gray-900 md:text-6xl dark:text-white">
            VAKAVA
          </h1>
          <div className="space-y-12 p-8 md:p-12">
            <h2 className="text-2xl font-bold tracking-wide text-gray-900 dark:text-white">
              About
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Vakava is an artist name who creates music for theater, TV, movies and games, while
                also releasing dark folk rock music under its name. Founded by Erno Vuori
                (Composer/Vocals) and Anne-Kaisa Alatalo (Vocals/Lyrics), Vakava delivers haunting
                soundscapes that blur the line between ancient rituals and modern storytelling.
              </p>
              <p>
                The live performances, known as "Live Ritual", are dark, shamanistic experiences
                combining strong visuals with hard hitting percussions. These haunting rituals
                create an immersive atmosphere that transcends traditional concert formats.
              </p>
            </div>

            {/* Founders */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Founders</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/static/images/vakava/CZ0A7467.jpg"
                      alt="Erno Vuori"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Erno Vuori</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Composer / Vocals</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/static/images/vakava/CZ0A7676.jpg"
                      alt="Anne-Kaisa Alatalo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Anne-Kaisa Alatalo</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vocals / Lyrics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Releases */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Listen</h3>
              <div className="overflow-hidden rounded-lg">
                <iframe
                  data-testid="embed-iframe"
                  title="Vakava on Spotify"
                  style={{ borderRadius: '12px' }}
                  src="https://open.spotify.com/embed/artist/6FjaCNZXdbHXaOTpW8UrRd?utm_source=generator&theme=0"
                  width="100%"
                  height="600"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="bg-white px-4 py-12 dark:bg-black">
          <div className="mx-auto max-w-6xl bg-white dark:bg-black">
            <h2 className="mb-3 text-center text-3xl font-bold tracking-wide text-gray-900 dark:text-white">
              Live Ritual
            </h2>
            <p className="mb-8 text-center text-sm text-gray-600 dark:text-gray-400">
              Haunting, dark, shamanistic rituals combined with strong visuals and hard hitting
              percussions
            </p>
            <PhotoCarousel images={images} thumbnailCount={images.length} />
          </div>
        </div>
      </div>
    </>
  )
}
