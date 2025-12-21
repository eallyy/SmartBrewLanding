import Image from 'next/image'

import { Container } from '@/components/Container'
import screenshotRecipeCreator from '@/images/screenshots/recipe-creator.png'
import screenshotOptimize from '@/images/screenshots/optimize.png'
import screenshotRecipeLibrary from '@/images/screenshots/recipe-library.png'
import screenshotBrewAnalysis from '@/images/screenshots/brew-analysis.png'

const ugcSnippets = [
  {
    quote:
      'Got my first recipe in under a minute and the pour schedule finally made sense.',
    source: 'Reel comment',
  },
  {
    quote:
      'The tweaks after feedback helped me stop wasting beans on trial and error.',
    source: 'Reel reply',
  },
  {
    quote:
      'Love that the recipe output is clear and shareable. Sent it to my roommate.',
    source: 'Reel comment',
  },
]

const recipeProof = [
  {
    image: screenshotRecipeCreator,
    label: 'Personalized recipe output',
  },
  {
    image: screenshotOptimize,
    label: 'Adjustment suggestions',
  },
  {
    image: screenshotBrewAnalysis,
    label: 'Brew analysis snapshot',
  },
  {
    image: screenshotRecipeLibrary,
    label: 'Saved recipes library',
  },
]

export function Testimonials() {
  return (
    <section
      id="community"
      aria-label="Community proof"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Real brews, real output
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            UGC snippets from our reels and real recipe screenshots so you know
            exactly what you get.
          </p>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            {ugcSnippets.map((snippet) => (
              <figure
                key={snippet.quote}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm"
              >
                <blockquote className="text-base text-slate-900">
                  "{snippet.quote}"
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {snippet.source}
                </figcaption>
              </figure>
            ))}
            <div className="rounded-2xl border border-slate-200/70 bg-white p-6 text-sm text-slate-600">
              Built by <a href="https://alany.co" className="font-semibold text-slate-900 hover:underline">Emir Alany</a>{' '}
              and the SmartBrew team, pour-over obsessives who care about every
              gram.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {recipeProof.map((item) => (
              <figure
                key={item.label}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <Image src={item.image} alt={item.label} />
                <figcaption className="border-t border-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
