// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
const Header = () => {
  return (
<div>
      <h1 className="headerText">Simple Ebook Store</h1>
      <div className='hedarNav'>
        <ul className='hedarNavUl'>
          <li>New Book</li>
          <li>Upcoming Book</li>
          <li>Tranding Book</li>
          <li>Your Order</li>
        </ul>
      </div>
</div>
  )
}

export default Header