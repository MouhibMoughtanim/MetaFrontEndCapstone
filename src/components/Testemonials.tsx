import React from 'react'
import './css/testemonials.css'
export default function Testemonials() {
  return (
    <section className="full-screen-view testemonial-section flex">
    <article className='flex highlight-header'>
        <h2>Testemonials </h2>
    </article>
    <article className='testemonials-content flex'>
       <div className='rating-card'>
       <h6>Rating</h6>
       <div>loremip</div>
       <p>lorem ipsum </p>
       </div>
       <div className='rating-card'>
       <h6>Rating</h6>
       <div>loremip</div>
       <p>lorem ipsum </p>
       </div> 
       <div className='rating-card'>
       <h6>Rating</h6>
       <div>loremip</div>
       <p>lorem ipsum </p>
       </div>
    </article>
   </section>
  )
}
