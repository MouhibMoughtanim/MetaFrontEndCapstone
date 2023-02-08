import React from "react";
import "./css/homeSection.css";
import homeImage from "../icons_assets/restauranfood.jpg";
export default function Home() {
  return (
    <section className="full-screen-view home-section flex">
 
        <article >
          <div>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          </div>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
            repellendus fuga atque .
          </p>
          <button>Reseve a table </button>
        </article>
        <article>
          <img src={homeImage} alt="Restaurant Image  " />
        </article>
     
    </section>
  );
}
