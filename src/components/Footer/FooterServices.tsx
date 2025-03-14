import Link from 'next/link'
import React from 'react'

const FooterServices = () => {
  return (
    <div className="footerList-container">
    <ul>
      <h4>Services</h4>
      <li>
        <Link href="/hair-salon-in-mangaluru">Hair</Link>
      </li>
      <li>
        <Link href="/nail-salon-in-mangaluru">Nails</Link>
      </li>
      <li>
        <Link href="/facials-in-mangaluru">Facials</Link>
      </li>
      <li>
        <Link href="/waxing-in-mangaluru">Waxing</Link>
      </li>
      <li>
        <Link href="/makeup-in-mangaluru">Makeup</Link>
      </li>
    </ul>
  </div>
  )
}

export default FooterServices
