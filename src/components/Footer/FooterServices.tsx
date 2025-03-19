import Link from 'next/link'
import React from 'react'

const FooterServices = () => {
  return (
    <div className="footerList-container">
    <ul>
      <h4>Services</h4>
      <li>
        <Link href="/hair-salon-in-mangalore">Hair</Link>
      </li>
      <li>
        <Link href="/nail-salon-in-mangalore">Nails</Link>
      </li>
      <li>
        <Link href="/facials-in-mangalore">Facials</Link>
      </li>
      <li>
        <Link href="/waxing-in-mangalore">Waxing</Link>
      </li>
      <li>
        <Link href="/makeup-in-mangalore">Makeup</Link>
      </li>
    </ul>
  </div>
  )
}

export default FooterServices
