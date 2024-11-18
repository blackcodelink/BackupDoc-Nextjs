'use client'

import React, { useState } from 'react'
import { TextField } from '@/components/forms/TextField'
import { Button } from '@/components/shared/Button'
import { Container } from '@/components/shared/Container'

export default function Payment() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false)
  const [cartItems] = useState([
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 15 },
  ]) // Example cart items
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handlePayment = () => {
    setIsPaymentSuccessful(true)
  }

  return (
    <Container className='max-w-4xl py-10 sm:max-w-6xl lg:max-w-7xl'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-36'>
        {/* Left Column (Form Fields) */}
        <form className='space-y-8'>
          <TextField
            label='Full Name'
            name='first-name'
            autoComplete='given-name'
            placeholder='Johnny'
            required
          />
          <TextField
            label='Email Address'
            name='email'
            autoComplete='email'
            placeholder='www@email.com'
            required
          />
          <TextField
            label='Phone Number'
            name='Phone'
            type='number'
            autoComplete='Phone'
            placeholder='johnnybravo@gmail.com'
            required
          />
          <div className='space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0'>
            <TextField
              label='Country'
              name='Country'
              autoComplete='off'
              placeholder='Country'
              required
            />
            <TextField
              label='ZipCode'
              name='Country'
              autoComplete='off'
              placeholder='Country'
              required
            />
          </div>
          <div className='space-y-8 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0'>
            <TextField
              label='Status'
              name='Country'
              autoComplete='off'
              placeholder='Country'
              required
            />
            <TextField
              label='Additional Field'
              name='Country'
              autoComplete='off'
              placeholder='Country'
              required
            />
          </div>
        </form>

        {/* Right Column: Cart Review Section */}
        {isPaymentSuccessful ? (
          <div className='mt-6 rounded-lg p-6 text-center shadow-md'>
            <h2 className='text-2xl font-bold'>Payment Successful!</h2>
            <p className='mt-4 text-lg text-gray-700'>
              Thank you for your purchase.
            </p>
            <div className='mt-6 rounded-lg border bg-white p-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Order Summary
              </h3>
              <ul className='mt-3'>
                {cartItems.map((item) => (
                  <li
                    key={item.name}
                    className='mb-2 flex justify-between text-gray-700'
                  >
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-3 flex justify-between border-t pt-3 font-semibold text-gray-800'>
                <span>Total Amount</span>
                <span>${totalAmount}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className='rounded-lg border bg-white p-4 shadow-sm'>
            <h2 className='mb-3 text-xl font-bold text-gray-800'>
              Review Your Cart
            </h2>
            <ul className='space-y-1'>
              {cartItems.map((item) => (
                <li
                  key={item.name}
                  className='flex justify-between text-gray-800'
                >
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </li>
              ))}
            </ul>

            <div className='mt-3 flex justify-between border-t pt-3 font-semibold text-gray-800'>
              <p>Total</p>
              <p>${totalAmount}</p>
            </div>

            <div className='mt-3'>
              <TextField
                label='Coupon Code'
                name='couponCode'
                placeholder='Enter coupon code'
                labelClassName='text-gray-700' // Label color change
                className='rounded-md border border-gray-300 p-2'
              />
              <Button className='mt-2 w-full rounded-md bg-blue-500 py-2 text-white'>
                Apply Coupon
              </Button>
            </div>
          </div>
        )}

        {/* Button to Proceed with Payment */}
        {!isPaymentSuccessful && (
          <div className='mt-6 flex justify-end'>
            <Button
              onClick={handlePayment}
              className='rounded-md px-6 py-2 text-white'
            >
              Proceed to Payment
            </Button>
          </div>
        )}
      </div>
    </Container>
  )
}
