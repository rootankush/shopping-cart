import React, { useState } from "react";
import styles from "../Card/Card.module.css";

function Card({ item, handleQuantity }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt={item.title} />
      </div>
      <div className={styles.details}>
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.price}>${item.price.toFixed(2)}</p>
        <span className={styles.category}>{item.category}</span>
      </div>

      <div className={styles.actionContainer}>
        <div className={styles.quantityWrapper}>
          <label htmlFor={`qty-${item.id}`}>Qty:</label>
          <input
            id={`qty-${item.id}`}
            className={styles.input}
            type="number"
            min="0"
          />
        </div>
        <button className={styles.button} type="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
