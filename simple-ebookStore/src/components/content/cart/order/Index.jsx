// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
// eslint-disable-next-line react/prop-types
const Order = ({ totalAmount, booktitle, imageLinks,bookPrice,bookAuthor }) => {

  return (
    <div>
      <div className="bookList">
        <div className="bookList-all">
         {/* eslint-disable-next-line react/prop-types */}
        {imageLinks.map((imageLink, index) => (
          <div className="bookCard" key={index}>
            <img src={imageLink} alt="" />
            <br />
            <div className="BookTitlePrice">
            <h4>{booktitle[index]}</h4>
            <span className="price">Price: {bookPrice[index]}</span>
            <span className="author">Author: {bookAuthor[index]}</span>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className="totalAmount">
        Total Amount: {totalAmount} $
      </div>
    </div>
  );
};

export default Order;
