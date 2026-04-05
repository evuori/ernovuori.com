import Image from '@/components/Image'
import ArtGallery from '@/components/ArtGallery'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Vakava',
  description: 'Vakava - Dark Folk Rock and Music for Theater, Film, TV and Games',
})

const images = [
  {
    src: '/static/images/vakava/CZ0A7903.jpg',
    alt: 'The whole tribe gathered on stage',
    description:
      'The whole tribe, gathered. The Live Ritual is a ceremony that needs its full cast to complete the circle.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7516.jpg',
    alt: 'Anne-Kaisa mid-transmission',
    description:
      'The voice opens something in the room. Anne-Kaisa mid-transmission between worlds.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7529.jpg',
    alt: 'The masked shaman at the microphone',
    description:
      'Behind the mask, something older than the performer. The ritual demands full disappearance.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7566.jpg',
    alt: 'Full band in green ritual light',
    description:
      'Green light floods the stage. The ensemble in full momentum — ancient and electric at once.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7652.jpg',
    alt: 'Anne-Kaisa with antler staff in red light',
    description:
      'The priestess calls. Red light, antler staff, paint on skin — the performance reaches its altar.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7698.jpg',
    alt: 'Erno in profile, purple stage light',
    description: 'In profile, in purple — the composer deep inside the sound he built.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7786.jpg',
    alt: 'Anne-Kaisa with skull staff',
    description:
      'The skull-staff speaks. Anne-Kaisa channels something the instruments cannot reach alone.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7789.jpg',
    alt: 'Anne-Kaisa at the edge of silence',
    description:
      'The moment before silence. Every ritual has this edge — where the sound has stopped but the after still reverberates.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7676.jpg',
    alt: 'Fist raised, a declaration',
    description: 'A fist raised against the ceiling. The song is a declaration.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/P1700249.JPG',
    alt: 'Four voices, four ritual costumes',
    description:
      'Four voices. Four costumes assembled from bone, fur, and ceremony. The stage becomes a sacred site.',
    width: 1920,
    height: 1440,
  },
  {
    src: '/static/images/vakava/CZ0A7467.jpg',
    alt: 'The shaman takes the stage',
    description: 'The shaman takes the stage. Before the first note, the ritual has already begun.',
    width: 1920,
    height: 1280,
  },
  {
    src: '/static/images/vakava/CZ0A7491.jpg',
    alt: 'Seven hands raise fire against the dark',
    description: 'Seven hands raise fire against the dark. The crowd holds its breath.',
    width: 1920,
    height: 1280,
  },
]

export default function Vakava() {
  return (
    <>
      {/* Hero */}
      <div className="-mx-4 sm:-mx-6 xl:-mx-0">
        <div className="relative h-[65vh] w-full overflow-hidden">
          <Image
            src="/static/images/vakava/CZ0A7491.jpg"
            alt="Vakava Live Ritual — seven hands raise fire against the dark"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 px-6 py-10 md:px-12 md:py-14">
            <h1 className="font-bebas mb-3 text-7xl tracking-widest text-white md:text-8xl">
              MUSIC
            </h1>
            <p className="max-w-lg text-sm leading-relaxed text-gray-300">
              Vakava creates music for theater, TV, movies and games, while releasing dark folk rock
              under its own name. Founded by Erno Vuori (Composer/Vocals) and Anne-Kaisa Alatalo
              (Vocals/Lyrics) — haunting soundscapes that blur the line between ancient rituals and
              modern storytelling.
            </p>
            <div className="mt-4">
              <a
                href="https://open.spotify.com/artist/6FjaCNZXdbHXaOTpW8UrRd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase transition-colors hover:text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Live Ritual Gallery */}
      <div className="-mx-4 bg-black px-2 py-3 sm:-mx-6 sm:px-3 md:py-4 xl:-mx-0">
        <ArtGallery images={images} />
      </div>
    </>
  )
}
