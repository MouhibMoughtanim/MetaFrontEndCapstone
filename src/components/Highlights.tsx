import React, { useState } from 'react'
import '../components/css/highlightSection.css'
import Card from './Card';
import { meals } from './meals';
import { card } from "./Card";

export default function Highlights() {
    const [mealss, setMealss] = useState<card[]>(meals);

  return (
       <section className="full-screen-view highlight-section flex">
        <article className='flex highlight-header'>
            <h2>This week specials! </h2>
            <button> Online Menu</button>
        </article>
        <article className='highlight-content flex'>
            {
                mealss.map((m,index) =>
                    
                    <Card key={index} image={m.image} title={m.title} price={m.price} text={m.text}/>

                
                )
            }
        </article>
       </section>
    )
}
