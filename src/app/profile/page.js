'use client'
import React, { useState } from 'react'
import { TextField } from '@/components/forms/TextField'
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'
import { ContainerOutline } from '@/components/shared/ContainerOutline'

import { Footer } from '@/components/shared/Footer'
import Image from 'next/image'
import imageProfile from '@/images/836.jpg' // Use the actual import here

export default function Profile() {
  const [file, setFile] = useState(null)
  const [photo, setPhoto] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Uploaded File:', file)
    console.log('Uploaded Photo:', photo)
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    console.log('Password reset requested')
  }

  return (
    <Container className='max-w-4xl py-10 sm:max-w-6xl lg:max-w-7xl'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-36'>
        {/* Left Column (Name, Email, and Bio Fields) */}
        <div className='space-y-8'>
          <form
            onSubmit={handleSubmit}
            action='#'
            method='POST'
            className='mt-9 px-6 pb-10 sm:px-10'
          >
            <div className='space-y-8'>
              {/* First Name and Last Name Fields */}
              <div className='space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0'>
                <TextField
                  label='First name'
                  name='first-name'
                  autoComplete='given-name'
                  placeholder='Johnny'
                  required
                />
                <TextField
                  label='Last name'
                  name='last-name'
                  autoComplete='family-name'
                  placeholder='Bravo'
                  required
                />
              </div>

              {/* Email Field */}
              <TextField
                label='Email'
                name='email'
                type='email'
                autoComplete='email'
                placeholder='johnnybravo@gmail.com'
                required
              />

              {/* Tour Bio Field */}
              <TextField
                label='Tour Bio'
                name='bio'
                autoComplete='off'
                placeholder='Bio'
                required
              />

              {/* Submit Button */}
              <div className='mt-6'>
                <Button size='sm' className='overflow-hidden'>
                  Save Changes
                </Button>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column (Profile Photo and File Upload) */}
        <div className='flex flex-col items-center space-y-6'>
          <div className='col-lg-6 mb-3 pt-4 text-center'>
            <Image
              id='profile-pic-upload'
              src={photo ? URL.createObjectURL(photo) : imageProfile} // Use the actual imported image for default
              width={200}
              height={200}
              alt='Profile Preview'
              className='rounded-full'
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Profile Photo Upload */}
          <label
            htmlFor='fileUpload'
            className='block text-sm font-medium text-gray-700'
          >
            Upload File
          </label>
          <input
            type='file'
            id='fileUpload'
            onChange={(e) => {
              handleFileChange(e)
              handlePhotoChange(e) // This function updates the photo preview
            }}
            className='mt-1 block w-full rounded-md border border-gray-300 text-sm text-gray-500 focus:outline-none focus:ring focus:ring-blue-500'
            required
          />
        </div>
      </div>

      {/* Password Reset Container (Below Main Form) */}
      <div className='relative z-10 mt-10 flex flex-col shadow-inner-blur'>
        <ContainerOutline />
        <form
          onSubmit={handlePasswordSubmit}
          action='#'
          method='POST'
          className='mt-9 px-6 pb-10 sm:px-10'
        >
          <div className='space-y-8'>
            <TextField
              label='New Password'
              name='new-password'
              type='password'
              autoComplete='new-password'
              placeholder='New Password'
              required
            />
            <TextField
              label='Confirm Password'
              name='confirm-password'
              type='password'
              autoComplete='new-password'
              placeholder='Confirm Password'
              required
            />
          </div>

          {/* Submit Button */}
          <div className='mt-6'>
            <Button size='sm' className='overflow-hidden'>
              Reset
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </Container>
  )
}
