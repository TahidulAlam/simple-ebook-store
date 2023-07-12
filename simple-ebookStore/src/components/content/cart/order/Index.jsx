// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.css";
// eslint-disable-next-line react/prop-types
const Order = ({totalAmount,booktitle,imageLinks,bookPrice,bookAuthor,deleteCard,
}) => {
  return (
    <div>
      <div className="bookList">
        <div className="bookList-all">
          {/* eslint-disable-next-line react/prop-types */}
          {imageLinks.map((imageLink, index) => (
            <div className="bookCard" key={index}>
              <div className="card-details">
                <img src={imageLink} alt="" />
                <br />
                <div className="BookTitlePrice">
                  <h4>{booktitle[index]}</h4>
                  <span className="price">Price: {bookPrice[index]} $</span>
                  <span className="author">Author: {bookAuthor[index]}</span>
                </div>
              </div>
              <div className="dltBtn" onClick={() => deleteCard(index)}>
                <div className="dltBtnSign">
                  <span className="horizontal"></span>
                  <span className="vertical"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="totalAmount">
        {/* <span>vat: 4%</span> */}
        <p>Total Amount: {totalAmount} $</p>
      </div>
    </div>
  );
};

export default Order;
