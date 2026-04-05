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
    alt: 'Vegvisir',
    description:
      "Odin's gaze above the Vegvisir — the Norse compass that guides through storms unseen. Ancient, vast, and watching.",
    width: 1920,
    height: 2561,
  },
  {
    src: '/static/images/art/3F7A9EE6-6591-474D-836B-B9F927C1EBE0.jpg',
    alt: 'Ragnarök',
    description:
      'Paint falls like fire through collapsing worlds. Every color rains down at once — destruction and creation indistinguishable in the chaos of the fall.',
    width: 1920,
    height: 1559,
  },
  {
    src: '/static/images/art/IMG_3479.jpeg',
    alt: 'Return',
    description:
      'A pale figure reaches toward a turning light. Swallowed by green, the body barely holds its form — spirit mid-transformation, or arriving from somewhere very far.',
    width: 1912,
    height: 1920,
  },
  {
    src: '/static/images/art/0DF3E12E-624E-4253-B558-12D1C5F6CE50.jpg',
    alt: 'The Bleeding Rune',
    description:
      'A primordial rune bleeds crimson through ash and shadow. At its base, a silent forest watches — witness to something ancient and irreversible.',
    width: 1429,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_0902.jpeg',
    alt: 'The Three',
    description:
      'Three faces open their mouths simultaneously. Raw, mask-like, unignorable — they speak in a register older than language.',
    width: 1920,
    height: 1559,
  },
  {
    src: '/static/images/art/IMG_3155.jpeg',
    alt: 'The Burst',
    description:
      'An explosion caught at its absolute peak. Whether destruction or flowering depends entirely on what the viewer brings to the moment.',
    width: 1561,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_1364.jpeg',
    alt: 'Battle Horizon',
    description:
      'A storm of marks tears across the dark. White and red trace the path of something that moved too fast to be anything but fury.',
    width: 1920,
    height: 1060,
  },
  {
    src: '/static/images/art/C7E89C33-3CAF-4C54-911E-F7E09C75EE85.jpg',
    alt: 'Cave Mind',
    description:
      'Ancient marks crowd a darkened skull. These are not letters but impulses — the deep grammar the unconscious speaks before language takes over.',
    width: 1536,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_1512.jpeg',
    alt: 'Shamanic Memory',
    description:
      'A dreamscape built from earth and amber. Totems, eyes, and half-remembered tools surface from the warm dark — archaeology of the unconscious.',
    width: 1920,
    height: 1617,
  },
  {
    src: '/static/images/art/E8D6E0FF-FB89-4290-AA5F-57548DDFF9C1.jpg',
    alt: 'The Living Knot',
    description:
      'Black lines breathe through gold in long, unbroken arcs. Neither plant nor beast nor human — something older that contains all three.',
    width: 1433,
    height: 1920,
  },
  {
    src: '/static/images/art/IMG_2877.jpeg',
    alt: 'The Red Center',
    description:
      'Two forces flank a bleeding line. The red streak refuses composition — it is sacrifice, wound, and presence at once.',
    width: 1920,
    height: 1912,
  },
  {
    src: '/static/images/art/IMG_2552copy.jpeg',
    alt: 'The Wheel',
    description:
      'A ring of runes glows at the center of the dark. Part compass, part ritual seal — the symbols resist translation, asking instead to be felt.',
    width: 1920,
    height: 1506,
  },
  {
    src: '/static/images/art/IMG_1440.jpeg',
    alt: 'One Cut',
    description:
      'Black scatters across silence while a single red line divides everything. The most is said with the least.',
    width: 1920,
    height: 1440,
  },
  {
    src: '/static/images/art/IMG_3348.jpeg',
    alt: 'Through the Forest',
    description:
      'Copper verticals rain down, punctuated by scattered color. A forest seen from the inside — or from very far above. Both distances hold.',
    width: 1920,
    height: 1500,
  },
  {
    src: '/static/images/art/IMG_1490.jpeg',
    alt: 'Ember Storm',
    description:
      'Fire becomes texture. Orange and gold flare in dense vertical strands against black — the moment a bonfire crosses into something uncontrollable.',
    width: 1920,
    height: 1104,
  },
  {
    src: '/static/images/art/IMG_3478.jpeg',
    alt: 'Confrontation',
    description:
      'Figures emerge from blue-black in fragments of yellow and red. A visual argument between forces, unresolved — the painting refuses to settle.',
    width: 1920,
    height: 1917,
  },
  {
    src: '/static/images/art/IMG_2880.jpeg',
    alt: 'Jazz',
    description:
      "Instruments dissolve into pure yellow energy. Keys, strings, brass — the painting doesn't depict music so much as become it.",
    width: 1920,
    height: 1541,
  },
  {
    src: '/static/images/art/IMG_E201CB12-C46D-4DB5-B257-F132F07665F7.jpeg',
    alt: 'The Banquet',
    description:
      'A plague doctor dines with ceremony. The staging — chains, rope, a severed head as centerpiece — turns dark absurdism into something genuinely unsettling.',
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
