import React from "react";
import "./css/about.css";

import imageA from'../icons_assets/Mario and Adrian A.jpg';
import imageB from'../icons_assets/restaurant chef B.jpg';

export default function About() {
  return (
    <section className="full-screen-view about-section flex">
 
        <article >
          <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
            repellendus fuga atque .
          </p>
      
        </article>
        <article>
            <img src={imageA} className="upper" alt="" />
            <img src={imageB} className="lower" alt="" />

        </article>
     
    </section>
  );
}
