'use client'
import Link from 'next/link'
import Image from 'next/image'
import { NavbarPill } from '@/components/header/NavbarPill'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { Menu } from '@headlessui/react'
import logo from '@/images/logo.jpeg'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import userprofile from '@/images/profile-user.png'

export const Header = () => {
  return (
    <header className='relative h-20'>
      <Container className='flex h-full items-center'>
        <nav className='relative z-50 flex w-full items-center justify-between'>
          {/* Logo */}
          <div className='relative z-10 hidden shrink-0 items-center md:flex'>
            <Link href='/' aria-label='Home' className='flex items-center'>
              <Image
                src={logo}
                alt='Company logo'
                className='h-7 w-auto lg:h-8'
              />
            </Link>
          </div>

          {/* Navbar Pills */}
          <NavbarPill />

          {/* Right Side Buttons and Dropdown */}
          <div className='hidden items-center md:flex lg:space-x-3 xl:space-x-4'>
            <Button
              href='/signin'
              variant='tertiary'
              size='sm'
              className='overflow-hidden'
            >
              Sign in
            </Button>
            <Button href='/signup' size='sm'>
              Sign up
            </Button>

            {/* Dashboard Dropdown Menu */}
            <Menu as='div' className='relative inline-block text-left'>
              <Menu.Button className='flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100'>
                <Image
                  src={userprofile}
                  alt='User Profile Icon'
                  width={30}
                  height={30}
                  className='h-7 w-auto lg:h-8'
                />
              </Menu.Button>
              <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/profile'
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        UserProfile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/dashboard'
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        Dashboard
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href='/dashboard/profile'
                        className={`block px-4 py-2 text-sm ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        }`}
                      >
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </nav>
        <hr className='absolute inset-x-0 bottom-0 h-px border-0 bg-gradient-to-r from-transparent via-violet-200/15 to-transparent' />
      </Container>
    </header>
  )
}
