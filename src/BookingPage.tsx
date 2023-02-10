import React from 'react'
import BookingForm from './components/BookingForm'
import './components/css/booking.css'
import { FormProvider } from './components/utils/Context'
export default function BookingPage() {
  return (
    <>
    <FormProvider>
      <section className="flex">
        <BookingForm/>
    </section>
    </FormProvider>
    
    </>
  )
}
