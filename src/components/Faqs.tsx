import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: "What brewing methods does SmartBrew support?",
      answer:
        "SmartBrew is currently optimized for pour-over brewing, allowing you to adjust grind size, water temperature, and brew time for the perfect cup.",
    },
    {
      question: "Can I share my recipes with non-SmartBrew users?",
      answer:
        "Absolutely! You can make your recipes public and share them via unique links, accessible even to those who don’t have a SmartBrew account.",
    },
    {
      question: "How does the flavor analysis feature work?",
      answer:
        "Our AI analyzes your brewing data to identify dominant flavors and suggests adjustments to achieve the perfect balance of acidity, sweetness, and body.",
    },
  ],
  [
    {
      question: "Can I track my brewing history over time?",
      answer:
        "Yes, every brew is logged in your personal brew history, so you can review your recipes, tweak parameters, and refine your technique.",
    },
    {
      question: "What happens after the 7-day free trial?",
      answer:
        "After your trial ends, you can continue using all features for just $9.99/month. Your brew logs, recipes, and settings will be saved.",
    },
    {
      question: "Can I change the app language?",
      answer:
        "Yes, you can switch between multiple languages in the settings. This applies to both the app interface and recipe creation.",
    },
  ],
  [
    {
      question: "How do I get feedback on my brew?",
      answer:
        "Share your recipe with the SmartBrew community to get feedback from other coffee enthusiasts. You can also receive AI-driven insights to optimize your brew.",
    },
    {
      question: "What equipment do I need to use SmartBrew effectively?",
      answer:
        "You’ll need a pour-over coffee maker, a digital scale, a gooseneck kettle, and a timer to get the most accurate brewing data.",
    },
    {
      question: "What if I forget to log a brew?",
      answer:
        "No worries! You can manually add a brew to your history, including key parameters like grind size, water temperature, and brew time.",
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Got questions about brewing with SmartBrew? We’re here to help. If you can’t find what you’re looking for, reach out to our support team and we’ll get back to you as soon as possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
