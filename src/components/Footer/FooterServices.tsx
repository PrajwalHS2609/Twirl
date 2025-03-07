import Link from 'next/link'
import React from 'react'

const FooterServices = () => {
  return (
    <div className="footerList-container">
    <ul>
      <h4>Services</h4>
      <li>
        <Link href="/">Hair</Link>
      </li>
      <li>
        <Link href="/">Nails</Link>
      </li>
      <li>
        <Link href="/">Facials</Link>
      </li>
      <li>
        <Link href="/">Spa</Link>
      </li>
      <li>
        <Link href="/">Makeup</Link>
      </li>
    </ul>
  </div>
  )
}

export default FooterServices
