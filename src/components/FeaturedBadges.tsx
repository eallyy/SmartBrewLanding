import { Container } from '@/components/Container'

const badges = [
  {
    href: 'https://www.producthunt.com/products/smartbrew?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-smartbrew',
    src: 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1052649&theme=neutral&t=1766284216505',
    alt: 'SmartBrew - Precision AI Pour-over Coffee Brewing Recipes | Product Hunt',
    width: 250,
    height: 54,
  },
]

export function FeaturedBadges() {
  return (
    <section aria-labelledby="featured-badges">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-slate-200/80 bg-white/90 px-6 py-6 shadow-sm backdrop-blur sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p
              id="featured-badges"
              className="text-sm font-semibold uppercase tracking-wide text-slate-900"
            >
              Featured On
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Social proof from the Product Hunt community.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
            {badges.map((badge) => (
              <a
                key={badge.href}
                href={badge.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:scale-[1.01]"
              >
                <img
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  src={badge.src}
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
