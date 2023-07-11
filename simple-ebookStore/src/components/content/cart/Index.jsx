// eslint-disable-next-line no-unused-vars
import React from 'react'
import Order from './order/Index';
// eslint-disable-next-line react/prop-types
const Cart = ({carts}) => {
    let totalprice = 0
    let booktitle = [];
    let bookImg=[];
    let bookPrice=[];
    let bookAuthor=[];
    for (const item of carts) {
        totalprice += item.price ;
        // console.log(totalprice);
        // eslint-disable-next-line no-undef, no-unused-vars
        booktitle.push(item.title);
        bookImg.push(item.imageLink)
        bookPrice.push(item.price)
        bookAuthor.push(item.author)
    }
  return (
    <div>
    <Order 
        // eslint-disable-next-line no-undef
        booktitle={booktitle}
        totalAmount={totalprice}
        imageLinks= {bookImg}
        bookPrice={bookPrice}
        bookAuthor={bookAuthor}
    />
    </div>
  )
}

export default Cart