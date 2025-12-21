import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import LeadHeroButton from '@/components/LeadHeroButton'
import screenshotRecipeCreator from '@/images/screenshots/brew-analysis.png'

const frictionReducers = [
  'Takes about 60 seconds',
  'No equipment knowledge needed',
  'Cancel anytime',
]

const recipeFields = [
  'Brew ratio',
  'Grind size range',
  'Water temperature',
  'Pour schedule',
  'Total brew time',
]

export function Hero() {
  return (
    <Container className="pt-20 pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0575e6]">
            Personalized recipe in seconds
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-6xl">
            Dial in pour-over faster, waste fewer beans.
          </h1>
          <p className="mt-6 max-w-xl text-lg tracking-tight text-slate-700">
            Answer a few quick questions about your beans and setup, then get a
            personalized pour-over recipe in seconds. See the exact output
            format before you sign up.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <LeadHeroButton />
            <Button href="#example-recipe" variant="outline" color="slate">
              See example recipe
            </Button>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            7-day free trial (card required).
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            {frictionReducers.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            id="example-recipe"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xl shadow-slate-900/10"
          >
            <div className="border-b border-slate-100 px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                See your first recipe
              </p>
              <h2 className="text-lg font-semibold text-slate-900">
                Example output format
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                This is the same layout you get after signup.
              </p>
            </div>
            <div className="p-6">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <Image
                  src={screenshotRecipeCreator}
                  alt="Example SmartBrew recipe output preview"
                  priority
                />
              </div>
              <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {recipeFields.map((field) => (
                  <li key={field} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0575e6]" />
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
