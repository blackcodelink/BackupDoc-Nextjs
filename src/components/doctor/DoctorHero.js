import Image from 'next/image'
import Rectangle2109 from '@/images/Rectangle2109.jpg'
import Group from '@/images/Group.jpg'
import { NavbarPill } from '@/components/header/NavbarPill'
import { Container } from '@/components/shared/Container'
import { ContentPill } from '@/components/shared/ContentPill'
import ico1 from '@/images/ICO1.jpg'
import imaged1 from '@/images/image-d-1.jpg'
import imagecllp from '@/images/image-cllp.jpg'
import group880 from '@/images/Group880.jpg'
import Rectangle2139 from '@/images/Rectangle2139.jpg'
import ImageNew from '@/images/image-new.jpg'
import ImageLop from '@/images/image-lop.jpg'
import Group852 from '@/images/Group852.jpg'
import Group834 from '@/images/Group834.jpg'
import { PricingHero } from '@/components/pricing/PricingHero'
import { PricingCard } from '@/components/pricing/PricingCard'
import VedioTestimonial from '@/components/doctor/VedioTestimonial'
import { Footer } from '@/components/shared/Footer'
const DoctorHero = () => {
  return (
    <div className='min-h-screen'>
      {/* Navbar Component */}
      {/* <NavbarPill /> */}

      <Container className='gap-16 pb-16 pt-20 sm:pb-20 lg:pt-28'>
        {/* Text Content */}
        {/* <div className='relative z-10 flex flex-col items-center'>
          <ContentPill />
        </div> */}

        {/* Main Content Section */}
        <main className='container mx-auto mb-5 px-4 py-4'>
          {/* Header Section */}
          <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <div className='space-y-4'>
              <h1 className='text-3xl font-bold text-white'>
                Transform Your Dental Practice with BackupDoc.ai
              </h1>
              <h4 className='text-xl text-gray-300'>
                Get Color-Coded X-rays to Improve Diagnostics and Patient
                Understanding
              </h4>
            </div>

            {/* Card Section */}
            <div className='w-full overflow-hidden rounded-lg bg-gray-900 shadow-md'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Left Side Image and Content */}
                <div className='flex flex-col items-start space-y-3 p-6'>
                  {' '}
                  {/* Removed h-96 to allow content to dictate height */}
                  <Image
                    src={Group}
                    alt='Enhanced Diagnostic'
                    className='h-12 w-12 rounded-md bg-blue-400 object-cover'
                  />
                  <h4 className='text-xl font-semibold text-white'>
                    Enhanced Diagnostic Accuracy
                  </h4>
                  <p className='text-gray-300'>
                    Benefit: AI-driven analysis helps detect small pathologies
                    that might be missed by the naked eye, ensuring
                    comprehensive diagnostics.
                  </p>
                </div>

                {/* Right Side Image */}
                <div className='flex items-center justify-center p-4'>
                  {' '}
                  {/* Center the image vertically */}
                  <Image
                    src={Rectangle2109}
                    alt='Diagnostic Tools'
                    objectFit='cover'
                    width={300}
                    height={350}
                    className='rounded-lg'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='mt-6 flex flex-col gap-4'>
            <div className='flex justify-center gap-4'>
              <div className='mb-3 w-full lg:w-1/2'>
                <div className='flex flex-wrap rounded-lg bg-gray-900 p-4'>
                  <div className='mb-3 w-full lg:w-1/2'>
                    <div className='mb-3'>
                      <Image
                        src={ico1}
                        alt='icon 1'
                        className='h-10 w-10 mix-blend-color-dodge'
                      />
                    </div>
                    <div className='mb-3'>
                      <h5 className='text-lg text-white'>
                        Trust and Satisfaction
                      </h5>
                    </div>
                    <div className='mb-3'>
                      <p className='text-gray-300'>
                        Benefit: Clear, color-coded diagnostics increase patient
                        confidence in their care plan and understanding of their
                        dental health.
                      </p>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <Image
                      src={imaged1}
                      alt='image'
                      className='h-auto w-full rounded-lg'
                    />
                  </div>
                </div>
              </div>

              {/* Second Card */}
              <div className='mb-3 w-full lg:w-1/2'>
                <div className='flex flex-wrap rounded-lg bg-gray-900 p-4'>
                  <div className='mb-3 w-full lg:w-1/2'>
                    <div className='mb-3'>
                      <Image
                        src={group880}
                        alt='icon 2'
                        className='h-12 w-12 bg-blend-lighten md:bg-blend-darken'
                      />
                    </div>
                    <div className='mb-3'>
                      <h5 className='text-lg text-white'>
                        Effective Communication Tool
                      </h5>
                    </div>
                    <div className='mb-3'>
                      <p className='text-gray-300'>
                        Provides visual aids that make it easier for dentists to
                        explain diagnoses and treatment plans to patients.
                      </p>
                    </div>
                  </div>
                  <div className='w-full lg:w-1/2'>
                    <Image
                      src={imagecllp}
                      alt='image'
                      className='h-auto w-full rounded-lg'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className='custom-main container mx-auto p-4'>
          <div className='grid gap-6 lg:grid-cols-3'>
            {/* Card 1 */}
            <div className='overflow-hidden rounded-lg bg-transparent shadow-lg'>
              <Image
                src={Rectangle2139}
                alt='Increased Patient Engagement'
                className='w-full object-cover'
                width={400}
                height={250}
              />
              <div className='p-4'>
                <h5 className='mb-2 text-2xl font-semibold text-white'>
                  Increased Patient Engagement
                </h5>
                <p className='text-base text-white'>
                  Provides visual aids that make it easier for dentists to
                  explain diagnoses and treatment plans to patients.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className='overflow-hidden rounded-lg bg-transparent shadow-lg'>
              <Image
                src={ImageNew}
                alt='Third Party Objective View'
                className='w-full object-cover'
                width={400}
                height={250}
              />
              <div className='p-4'>
                <h5 className='mb-2 text-2xl font-semibold text-white'>
                  Third Party Objective View
                </h5>
                <p className='text-base text-white'>
                  An objective analysis from BackupDoc.ai builds patient trust
                  in your diagnosis, making them more likely to accept and
                  proceed with recommended treatments.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className='overflow-hidden rounded-lg bg-transparent shadow-lg'>
              <Image
                src={ImageLop}
                alt='Successfully provided second opinions to 2000+ clients'
                className='w-full object-cover'
                width={400}
                height={250}
              />
              <div className='p-4'>
                <h3 className='mb-2 flex items-center text-2xl font-semibold text-white'>
                  Successfully provided second opinions to 2000+ clients
                  <span className='ml-2'>
                    <Image src={Group852} alt='icon' width={24} height={24} />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className='bud-bg-3 sec-buds custom-main flex w-full items-center bg-blue-100 p-4'>
          {' '}
          {/* Keep the section background */}
          <div className='container mx-auto'>
            <div className='flex flex-wrap items-center justify-between'>
              {' '}
              {/* Added justify-between to space items evenly */}
              {/* Image Column */}
              <div className='mb-6 w-full bg-transparent lg:w-1/4'>
                {' '}
                {/* Set background to transparent */}
                <Image
                  src={Group834}
                  alt='Discount Image'
                  width={150}
                  height={100}
                  layout='responsive'
                  className='bg-transparent' // Ensure the image itself has no background
                />
              </div>
              {/* Expires Text */}
              <div className='mb-3 w-full lg:w-1/6'>
                <h2 className='text-lg text-black'>Expires in</h2>{' '}
                {/* Changed text color to black for better contrast */}
              </div>
              {/* Timer */}
              <div className='mb-3 w-full lg:w-1/3'>
                <div className='flex justify-between p-3 text-black' id='timer'>
                  {' '}
                  {/* Changed text color to black for better contrast */}
                  {['Days', 'Hours', 'Minutes', 'Seconds'].map(
                    (label, index) => (
                      <div
                        key={label}
                        className='flex flex-col items-center px-2'
                      >
                        <div className='sq-bug flex flex-col items-center justify-center bg-blue-400 p-3'>
                          <span
                            id={label.toLowerCase()}
                            className='mb-2 text-[1.2rem]'
                          >
                            {index === 0 ? '000' : index === 1 ? '24' : '00'}
                          </span>
                          <span className='text-[0.9rem]'>{label}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
              {/* Button */}
              <div className='w-full rounded-full border-r-4 lg:w-1/4'>
                <a
                  href='/pricing'
                  className='btn btn-white w-full text-2xl font-semibold text-[#143360]'
                >
                  20 Percent Off
                  <br />
                  Coupon Code: <span className='text-[#7824f6]'>FIRST20</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Discover Plans Section */}
        {/* <div className='mt-8 text-center'>
          <h1 className='text-4xl text-white md:text-5xl'>
            Discover Our{' '}
            <span className='text-[64px] font-bold text-[#719cdb]'>Plans</span>{' '}
            with <br /> Best{' '}
            <span className='text-[64px] font-bold text-[#719cdb]'>
              Pricing
            </span>
          </h1>
          <p className='mt-4 text-lg text-white'>
            Unlock premium features to boost productivity and streamline your
            workflow. <br />
            Choose the plan that suits you best.
          </p>
          <div className='mx-auto mt-6 w-full max-w-xs'>
            {' '}
          
            <Image
              src={Group834}
              alt='Decorative Image'
              className='h-auto w-full'
              layout='responsive'
              width={80} 
              height={50} 
            />
          </div>
        </div> */}
        <PricingHero />
        <VedioTestimonial />
      </Container>
      <Footer />
    </div>
  )
}

export default DoctorHero
