import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import LeadCTAButton from '@/components/LeadCTAButton'

const frictionReducers = [
  'Takes about 60 seconds',
  'No equipment knowledge needed',
  'Cancel anytime',
]

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get your first recipe in seconds
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Answer a few questions, see your personalized pour-over recipe
            instantly, and iterate with feedback. 7-day free trial (card
            required).
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LeadCTAButton />
            <Button href="#example-recipe" variant="outline" color="white">
              See example recipe
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-blue-100">
            {frictionReducers.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/30 px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
