import Link from 'next/link'
import React from 'react'

const FooterServices = () => {
  return (
    <div className="footerList-container">
    <ul>
      <h4>Services</h4>
      <li>
        <Link href="/hair-services">Hair</Link>
      </li>
      <li>
        <Link href="/nails-services">Nails</Link>
      </li>
      <li>
        <Link href="/facial-services">Facials</Link>
      </li>
      <li>
        <Link href="/waxing-services">Waxing</Link>
      </li>
      <li>
        <Link href="/makeup-services">Makeup</Link>
      </li>
    </ul>
  </div>
  )
}

export default FooterServices
