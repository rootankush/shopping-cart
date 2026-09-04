import React from "react";
import styles from "../Card/Card.module.css";

function Card({ title, price, image, category }) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={image} alt={title} />
      <h5>{title}</h5>
      <h5>${price}</h5>
      <h5>{category}</h5>
      <h5>Quantity:</h5>
      <input type="number" />
      <button type="button">Add to Cart</button>
    </div>
  );
}

export default Card;
