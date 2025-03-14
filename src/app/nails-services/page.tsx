import HomeInspire from '@/components/HomePage/HomeInspire/HomeInspire'
import HomeInterior from '@/components/HomePage/HomeInterior/HomeInterior'
import HomeTestimonial from '@/components/HomePage/HomeTestimonial/HomeTestimonial'
import HomeTreatments from '@/components/HomePage/HomeTreatments/HomeTreatments'
import NailsServices from '@/components/NailPage/NailsServices'
import NailsServicesHead from '@/components/NailPage/NailsServicesHead'
import React from 'react'

export default function NailServices() {
  return (
    <div className="main-container">
    <NailsServicesHead/>
    <NailsServices/>
    <HomeTreatments />
    <HomeInterior />
    <HomeTestimonial />
    <HomeInspire />
  </div>
  )
}

