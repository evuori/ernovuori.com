import Image from '@/components/Image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 4

export default function Home({ posts }) {
  return (
    <>
      {/* Hero */}
      <div className="-mx-4 sm:-mx-6 xl:-mx-0">
        <div className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/static/images/vakava/CZ0A7467.jpg"
            alt="Erno Vuori"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 px-6 py-12 md:px-12 md:py-16">
            <p className="max-w-2xl text-xl leading-relaxed text-gray-200 md:text-2xl">
              Architecting AI Solutions. Painting ancient darkness. Composing music between worlds.
              Beating Bass Guitar
            </p>
          </div>
        </div>
      </div>

      {/* Creations strip */}
      <div className="-mx-4 mt-8 grid grid-cols-1 gap-px bg-gray-200 sm:-mx-6 sm:grid-cols-3 xl:-mx-0 dark:bg-black">
        <Link href="/art" className="group relative block h-64 overflow-hidden">
          <Image
            src="/static/images/art/IMG_2552copy.jpeg"
            alt="Art"
            fill
            className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/30" />
          <span className="font-bebas absolute bottom-6 left-6 text-5xl tracking-widest text-white">
            ART
          </span>
        </Link>
        <Link href="/vakava" className="group relative block h-64 overflow-hidden">
          <Image
            src="/static/images/vakava/CZ0A7566.jpg"
            alt="Music"
            fill
            className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/30" />
          <span className="font-bebas absolute bottom-6 left-6 text-5xl tracking-widest text-white">
            MUSIC
          </span>
        </Link>
        <Link href="/blog" className="group relative block h-64 overflow-hidden bg-gray-950">
          <Image
            src="/static/images/profile_avatar.jpeg"
            alt="Erno Vuori"
            fill
            className="object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/30" />
          <span className="font-bebas absolute bottom-6 left-6 text-5xl tracking-widest text-white">
            WRITINGS
          </span>
        </Link>
      </div>

      {/* Recent writing */}
      <div className="py-12">
        <h2 className="font-bebas mb-8 text-4xl tracking-widest text-gray-900 dark:text-gray-100">
          RECENT WRITING
        </h2>
        <ul className="divide-y divide-gray-100 dark:divide-gray-800">
          {!posts.length && 'No posts found.'}
          {posts
            .slice(0, MAX_DISPLAY)
            .map((post: { slug: string; date: string; title: string; summary: string }) => {
              const { slug, date, title, summary } = post
              return (
                <li key={slug} className="py-6">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-primary-500 dark:hover:text-primary-400 text-xl font-bold text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                  <p className="mt-1 text-sm text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                    {summary}
                  </p>
                </li>
              )
            })}
        </ul>
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-400 mt-4 inline-block text-sm"
        >
          All writing &rarr;
        </Link>
      </div>
    </>
  )
}
