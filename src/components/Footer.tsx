import React from "react";
import './css/footer.css'
import image from '../icons_assets/restaurant.jpg'
export default function Footer(): JSX.Element {
  return (
    <footer className="flex">
      <img src={image} alt="restaurant image" />
      <nav>
        <h4>Navigation</h4>
        <ul>
          <li>Home </li>
          <li>About </li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
      <nav>
        <h4>Contact</h4>
        <ul>
          <li>Adress </li>
          <li>Phone number</li>
          <li>email </li>
        </ul>
      </nav>
      <nav>
        <h4>Social Media Links</h4>
        <ul>
          <li>Adress</li>
          <li>Phone number</li>
          <li>email </li>
        </ul>
      </nav>
    </footer>
  );
}
