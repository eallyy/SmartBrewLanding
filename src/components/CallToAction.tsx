import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import LeadCTAButton from '@/components/LeadCTAButton'

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
            Start Brewing Better Coffee Today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Take your coffee game to the next level. Create, optimize, and share your perfect recipes with SmartBrew – free for 7 days!
          </p>
          <LeadCTAButton />
        </div>
      </Container>
    </section>
  )
}
