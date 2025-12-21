import { Container } from '@/components/Container'

const highlights = [
  {
    title: 'Your first personalized recipe',
    description:
      'Answer quick questions and get a pour-over recipe tailored to your beans and gear.',
  },
  {
    title: 'Adjustments after feedback',
    description:
      'Tell us how it tasted and get a revised recipe that dials in the next brew.',
  },
  {
    title: 'Saved recipes',
    description:
      'Keep every recipe you generate so you can repeat the ones you love.',
  },
  {
    title: 'Brew log with notes',
    description:
      'Track what worked, what did not, and how each adjustment changed the cup.',
  },
  {
    title: 'Shareable recipe links',
    description:
      'Send a recipe to a friend or barista with one clean link.',
  },
]

export function TrialHighlights() {
  return (
    <section id="trial" aria-label="What you get in 7 days" className="py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0575e6]">
            What you get in 7 days
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to dial in fast
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Start with a personalized recipe, then iterate based on your taste.
            7-day free trial (card required).
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg text-slate-900">
                {highlight.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
