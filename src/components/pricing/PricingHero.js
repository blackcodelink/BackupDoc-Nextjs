'use client'

import Image from 'next/image'
import { PricingCard } from './PricingCard'
import { InvestorTestimonials } from './InvestorTestimonials'
import { Container } from '@/components/shared/Container'
import { ContentPill } from '@/components/shared/ContentPill'
import { StarField } from '@/components/shared/StarField'
import { useState } from 'react'
import { cn } from '@/lib/utils'

import cosmicButterfly from '@/images/cosmic-butterfly.png'
import TagsStackIcon from '@/icons/nucleo/tags-stack-16.svg'

const pricingPlans = [
  {
    title: 'Free',
    price: {
      monthly: 'Free',
      annually: 'Free',
    },
    description:
      'Ideal for individual professionals and small teams just beginning their journey looking for a streamlined solution.',
    popular: false,
  },
  {
    title: 'Starter',
    price: {
      monthly: '999',
      annually: '9590',
    },
    description:
      'Ideal for individual professionals and small teams just beginning their journey looking for a streamlined solution.',
    popular: false,
  },
  {
    title: 'Pro',
    price: {
      monthly: '1999',
      annually: '19190',
    },
    description:
      'Designed for growing teams and businesses seeking to enhance their productivity.',
    popular: true,
  },
  {
    title: 'Enterprise',
    price: {
      monthly: 'Custom',
      annually: 'Custom',
    },
    description:
      'Tailored for large organizations requiring a comprehensive solution that evolves with your enterprise.',
    popular: false,
  },
]

export function PricingHero() {
  const [billingType, setBillingType] = useState('monthly')

  return (
    <div className='pb-12 pt-20 md:pb-20 lg:py-28'>
      <div className='relative'>
        {/* Stars */}
        <div className='absolute inset-0 -z-10' aria-hidden='true'>
          <StarField />
        </div>

        <Container className='max-w-4xl gap-16 lg:max-w-screen-xl'>
          {/* Text content */}
          <div className='relative z-10 flex flex-col items-center'>
            <ContentPill
              Icon={TagsStackIcon}
              iconClassName='h-3.5 w-3.5'
              text='BackupDoc pricing'
            />

            <h1 className='mt-5 max-w-4xl text-center text-[2.75rem] font-bold leading-[1.125] text-violet-100 sm:text-5xl sm:leading-[1.125] md:text-6xl md:leading-[1.125] lg:text-[64px]'>
              Flexible plans tailored to your needs
            </h1>
            <p className='mt-5 max-w-xl text-center text-[17px] leading-8 text-zinc-200 sm:text-lg sm:leading-8'>
              Discover the perfect plan that aligns with your ambitions and
              scale, and experience the freedom to grow on your terms.
            </p>
          </div>

          {/* Pricing cards */}
          <div className='mx-auto mt-12 flex max-w-lg flex-col items-center sm:mt-16 sm:max-w-xl lg:mx-0 lg:mt-20 lg:max-w-none'>
            {/* Monthly/Annual toggle */}
            <div className='flex items-center rounded-full bg-zinc-950/[.01] shadow-inner-blur'>
              <div className='flex h-full w-full items-center space-x-2 rounded-full border border-violet-200/[.06] px-1 py-1'>
                <button
                  onClick={() => setBillingType('monthly')}
                  className={cn(
                    'group relative inline-flex items-center overflow-hidden rounded-full px-4 py-2 text-sm font-semibold leading-4 antialiased',
                    billingType === 'monthly'
                      ? 'bg-btn-primary text-violet-50 shadow-btn-primary'
                      : 'text-violet-50 hover:text-white'
                  )}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingType('annually')}
                  className={cn(
                    'group relative inline-flex items-center overflow-hidden rounded-full px-4 py-2 text-sm font-semibold leading-4 antialiased',
                    billingType === 'annually'
                      ? 'bg-btn-primary text-violet-50 shadow-btn-primary'
                      : 'text-violet-50 hover:text-white'
                  )}
                >
                  Annually
                </button>
              </div>
            </div>

            {/* Plans */}
            <div className='relative'>
              <div className='absolute -bottom-64 -left-96 -right-96 top-0 -z-10'>
                <Image
                  src={cosmicButterfly}
                  alt=''
                  className='h-full w-full object-fill opacity-10'
                  sizes='(max-width: 1024px) 100vw, 1024px'
                />
              </div>
              <div className='mt-10 flex w-full flex-wrap space-y-10 lg:grid lg:grid-cols-4 lg:gap-5 lg:space-y-0 xl:gap-12'>
                {pricingPlans.map((plan) => (
                  <div
                    key={`pricing-plans-mobile-${plan.title}`}
                    className='flex flex-1 flex-col space-y-8 lg:space-y-0'
                  >
                    {/* Pricing card */}
                    <PricingCard
                      plan={plan}
                      price={plan.price[billingType]}
                      billingType={billingType}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* <InvestorTestimonials /> */}
    </div>
  )
}
