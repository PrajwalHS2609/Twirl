import React from 'react'
import "./HomeTreatments.css"
import HomeTreatmentsMain from './HomeTreatmentsMain'

const HomeTreatments = () => {
  return (
    <div className="homeTreatment-container">
      <div className="homeTreatment-heading">
        <h2>Our Popular Treatment</h2>
      </div>
      <HomeTreatmentsMain />
    </div>
  )
}

export default HomeTreatments
