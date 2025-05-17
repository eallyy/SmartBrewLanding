'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotPublicShare from '@/images/screenshots/public-share.png'
import screenshotMultilingual from '@/images/screenshots/multilingual.png'
import screenshotFavourites from '@/images/screenshots/favourites.png'

interface Feature {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: 'Favorites Library',
    summary: 'Save Your Best Brews, Access Anytime',
    description:
      'Keep all your favorite recipes in one place. Revisit your top brews, adjust variables, and create the perfect cup every time.',
    image: screenshotFavourites,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <svg aria-hidden="true" className="h-9 w-9 p-1.5" fill="none" viewBox="0 0 24 24" 
    preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path
          d="M23.836 8.794a3.179 3.179 0 0 0-3.067-2.226H16.4l-1.327-4.136a3.227 3.227 0 0 0-6.146 0L7.6 6.568H3.231a3.227 3.227 0 0 0-1.9 5.832L4.887 15l-1.352 4.187A3.178 3.178 0 0 0 4.719 22.8a3.177 3.177 0 0 0 3.8-.019L12 20.219l3.482 2.559a3.227 3.227 0 0 0 4.983-3.591L19.113 15l3.56-2.6a3.177 3.177 0 0 0 1.163-3.606Zm-2.343 1.991-4.144 3.029a1 1 0 0 0-.362 1.116l1.575 4.87a1.227 1.227 0 0 1-1.895 1.365l-4.075-3a1 1 0 0 0-1.184 0l-4.075 3a1.227 1.227 0 0 1-1.9-1.365l1.58-4.87a1 1 0 0 0-.362-1.116l-4.144-3.029a1.227 1.227 0 0 1 .724-2.217h5.1a1 1 0 0 0 .952-.694l1.55-4.831a1.227 1.227 0 0 1 2.336 0l1.55 4.831a1 1 0 0 0 .952.694h5.1a1.227 1.227 0 0 1 .724 2.217Z"
          fill={`url(#${id})`}
        />
        </svg>
      )
    },
  },
  {
    name: 'Multilingual Support',
    summary:
      'Brew in Any Language',
    description:
      'SmartBrew speaks your language. Switch to your preferred language and create recipes using localized ingredients and brewing terms.',
    image: screenshotMultilingual,
    icon: function InventoryIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </svg>
      )
    },
  },
  {
    name: 'Public Recipe Sharing',
    summary:
      'Share Your Brews with the World',
    description:
      'Make your recipes public and share them with fellow coffee enthusiasts – even those who aren’t SmartBrew members. Inspire others and get feedback on your unique creations.',
    image: screenshotPublicShare,
    icon: function ContactsIcon() {
      return (
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </svg>
      )
    },
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'flex items-center justify-center w-9 rounded-lg',
          isActive ? 'bg-[#0575e6]' : 'bg-slate-500',
        )}
      >
        <feature.icon />
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-[#0575e6]' : 'text-slate-600',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.summary}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.summary}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-211 overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Advanced Features to Elevate Your Brewing Experience
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Unlock powerful tools to save, share, and customize your coffee recipes – all in one place.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
