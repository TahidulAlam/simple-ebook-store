// eslint-disable-next-line no-unused-vars
import React from 'react'
// import './style.css'
import './style.css'

// eslint-disable-next-line react/prop-types
const Card = ({item,authorName,bookPrice,bookImg,bookTitle,addtocart}) => {
  return (
    <div>
        <div className='Card'>
            <div className="cardUpperContent">
            <img className='cardImg' src={bookImg} alt="" />  
            <span className='cardPrice'>Price: {bookPrice}$</span></div>
            <div className='cardContent'>
            <span className='cardText1'>Author:{authorName}</span>
            <span className='cardText2'>{bookTitle}</span>
            <button className='addBtn' onClick={()=>{addtocart(item)}}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Card