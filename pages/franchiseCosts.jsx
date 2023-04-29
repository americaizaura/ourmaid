import Hero from '@/components/franchiseCosts/Hero'
import TextSection from '@/components/franchiseCosts/TextSection'
import MainHead from '@/components/MainHead'
import React from 'react'

const FranchiseCosts = () => {
  return (
    <div>
      <MainHead
        metaTitle="Put Title here for franchisecosts page"
        metaKeywords="Put Keywords here for franchisecosts page"
        metaDesc="Put description here for franchisecosts page"
      />
      <Hero />
      <TextSection />
    </div>
  )
}

export default FranchiseCosts