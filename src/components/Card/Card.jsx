import React from "react";
import styles from "../Card/Card.module.css";

function Card({ titile, price, imgSrc }) {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={titile} />
      <h5>{price}</h5>
      <h5>Quantity:</h5>
      <input type="number" />
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default Card;
