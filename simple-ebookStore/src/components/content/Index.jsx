// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Card from './card/Index'
import './style.css'
import Cart from './cart/Index'
const Content = () => {
    // eslint-disable-next-line no-undef, no-unused-vars
    const [data, setData] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [carts, setCarts] =useState([])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("books.json");
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchData();
    }, []);

    //Unknown keword remove er jonno ->

    // eslint-disable-next-line no-undef
    const unknownKeyword = "Unknown"
    const filteredData = data.filter((item) =>
        item.author && item.author.toLowerCase() !== unknownKeyword.toLowerCase()
    );


    //New ekta array create korechi jate ager arraay er product gula
    
    // eslint-disable-next-line no-unused-vars
    const addtocart =(pd) =>{
      const newcart =[...carts, pd]
            setCarts(newcart)
    }
  return (
    <div>
        <div className='content-body'>
            <div className='contentBody-left'>
            <div className="contentBodyLeft-content">
            {
                filteredData.map((item,index)=><Card item={item} key={index} authorName={item.author} bookPrice={item.price} bookImg={item.imageLink}
                bookTitle={item.title} addtocart={addtocart}
                ></Card>)
            }
            {/* eslint-disable-next-line no-undef */}
            
            </div>
            </div>
            <div className="contenBody-right">
            <h1 className='contenBodyRight-h1'>Your carts</h1>
            <hr />
            <Cart carts={carts} />
            {/* <Order /> */}
            </div>
        </div>
    </div>
  )
}

export default Content