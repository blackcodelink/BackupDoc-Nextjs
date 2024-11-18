import Image from 'next/image'
import { NavbarPill } from '@/components/header/NavbarPill'
import { Container } from '@/components/shared/Container'
import { ContentPill } from '@/components/shared/ContentPill'
import Ractangle2112 from '@/images/Rectangle2112.jpg'
import Ractangle2113 from '@/images/Rectangle2113.jpg'
import ImiImage from '@/images/imi-image.jpg'
import FullAnnaImage from '@/images/full-ana-image.jpg'
import specificity from '@/images/specificity.jpg'
import Group846 from '@/images/Group846.jpg'
import Group from '@/images/Group.jpg'
import { Footer } from '@/components/shared/Footer'

const InsuranceHero = () => {
  return (
    <div className='min-h-screen'>
      {/* <NavbarPill /> */}
      <div>
        <Container className='gap-16 pb-16 pt-20 sm:pb-20 lg:pt-28'>
          {/* Text Content */}
          {/* <div className='relative z-10 flex flex-col items-center'>
          <ContentPill />
        </div> */}
          <main className='container mb-20 px-4'>
            <div className='pt-20 text-center'>
              <div className='inline-block rounded-full border-2 border-gray-200 p-6'>
                {' '}
                <span className='whitespace-nowrap text-4xl font-bold text-gray-200'>
                  Benefits for Insurers
                </span>
              </div>
            </div>
          </main>

          <section className='container px-4 py-8'>
            <div className='flex flex-wrap lg:flex-nowrap'>
              {/* Left Column */}
              <div className='mb-8 lg:mb-0 lg:w-1/2 lg:pr-8'>
                <div className='mb-3'>
                  <h2 className='text-4xl font-semibold text-gray-300'>
                    Experience the Savings Firsthand
                  </h2>
                </div>
                <p className='mb-4 text-3xl text-gray-300 lg:pr-20'>
                  Ready to see how BackupDoc.ai can transform your claims
                  verification process and save you millions? Schedule a
                  personalized demo today to experience the power of AI-driven
                  solutions.
                </p>
                <div className='mt-4 flex justify-end lg:mr-16'>
                  <a
                    href='https://calendly.com/epikdoc-support/30min'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn btn-lg rounded-full bg-white px-10 py-3 font-medium text-blue-900'
                  >
                    Book a Demo
                  </a>
                </div>
              </div>

              {/* Right Column with Images */}
              <div className='relative text-center lg:w-1/2'>
                <Image
                  src={Ractangle2112}
                  alt='Primary Image'
                  className='mx-auto h-auto w-4/5'
                />
                {/* <Image
                  src={Ractangle2113}
                  alt='Overlay Image'
                  className='hover:drop-shadow-image absolute left-1/2 top-0 h-full w-3/4 -translate-x-1/2 mix-blend-multiply'
                /> */}
              </div>
            </div>
          </section>
          <section className='container px-4 py-8'>
            {/* Benefits Title */}
            <div className='relative mb-12 text-left'>
              <span
                className='inline-block rounded-lg border-2 border-white bg-green-600 px-8 py-4 font-bold text-white' // Increased padding
              >
                Benefits
              </span>
            </div>

            {/* First Row */}
            <div className='mb-12 flex flex-wrap items-center lg:flex-nowrap'>
              <div className='mb-6 lg:mb-0 lg:w-1/2'>
                <ul className='list-disc space-y-4 pl-5 text-lg text-white'>
                  {' '}
                  {/* Added list-disc for bullet points and padding */}
                  <li className='text-3xl'>
                    AI-driven analysis of dental radiographs.
                  </li>
                  <li className='text-3xl'>
                    Visual representation of dental issues for patient
                    education.
                  </li>
                  <li className='text-3xl'>
                    Regulatory Compliance and Better Relationships:
                  </li>
                </ul>
              </div>
              <div className='text-center lg:mt-[-30px] lg:w-1/2'>
                <div className='p-2'>
                  {' '}
                  <Image
                    src={ImiImage}
                    alt='Benefits Image'
                    className='mx-auto max-w-md'
                  />
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className='flex flex-wrap items-center lg:flex-nowrap'>
              <div className='mb-6 lg:mb-0 lg:w-1/2'>
                <ul className='list-disc space-y-4 pl-5 text-lg text-white'>
                  {' '}
                  <li className='text-3xl'>
                    Enhance the precision of claims verification, reducing human
                    error.
                  </li>
                  <li className='text-3xl'>
                    Minimize financial losses from fraudulent claims and
                    operational costs.
                  </li>
                  <li className='text-3xl'>
                    Accuracy and documented claims processing, improved
                    collaboration and trust with dental providers through
                    transparent and consistent claim assessments.
                  </li>
                </ul>
              </div>
              <div className='text-center lg:mt-[-2px] lg:w-1/2'>
                <Image
                  src={FullAnnaImage}
                  alt='Full Analysis Image'
                  className='mx-auto w-full max-w-md'
                />
              </div>
            </div>
          </section>
          <div className='container mx-auto mb-28'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
              {/* Card 1 */}
              <div className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <div className='mb-4 flex justify-center'>
                  <Image
                    src={specificity}
                    alt='Improved Accuracy'
                    className='h-20 w-20'
                  />
                </div>
                <div className='text-center text-white'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    Improved Accuracy
                  </h3>
                  <p>
                    Enhance the precision of claims verification, reducing human
                    error.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <div className='mb-4 flex justify-center'>
                  <Image
                    src={Group846}
                    alt='Cost Reduction'
                    className='h-20 w-20'
                  />
                </div>
                <div className='text-center text-white'>
                  <h3 className='mb-2 text-xl font-semibold'>Cost Reduction</h3>
                  <p>
                    Minimize financial losses from fraudulent claims and
                    operational costs.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <div className='mb-4 flex justify-center'>
                  <Image
                    src={Group}
                    alt='Efficiency Gains'
                    className='h-20 w-20'
                  />
                </div>
                <div className='text-center text-white'>
                  <h3 className='mb-2 text-xl font-semibold'>
                    Efficiency Gains
                  </h3>
                  <p>
                    Streamline claims processing with AI-driven insights and
                    workflows.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className='rounded-lg bg-gray-800 p-6 shadow-lg'>
                <div className='mb-4 flex justify-center'>
                  <Image
                    src={Group}
                    alt='Enhanced Trust'
                    className='h-20 w-20'
                  />
                </div>
                <div className='text-center text-white'>
                  <h3 className='mb-2 text-xl font-semibold'>Enhanced Trust</h3>
                  <p>
                    Foster better relationships with dental providers through
                    transparent and consistent claim assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
export default InsuranceHero
