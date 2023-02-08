import React from 'react'

export type card = {
    image : string,
    title : string,
    price : number,
    text : string

}
import './css/card.css'
export default function Card({image , title, price, text}: card ) {
  return (
    <>
    <div className="card">
        <div className="card-image">
           <img src={image} alt="image" />
        </div>
        <div className="card-content">
              <span className="name-price">
                <h4>{title}</h4>
                <p>${price}</p>
              </span>
              <p>
                {text}
              </p>
              <h2>Order a delivery </h2>
        </div>
    </div>
    </>
  )
}
