import { CircleMinus, CirclePlus } from "lucide-react";
import React, { useState } from "react";
import styles from "../CartCard/CartCard.module.css";

function CartCard({ selectedItem, handleRemove }) {
  const [quantity, setQuantity] = useState(selectedItem.quantity);

  return (
    <div className={styles.card}>
      <div className={styles.details}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={selectedItem.image} alt="" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>Title: {selectedItem.title}</h2>
          <h3 className={styles.price}>Price: ${selectedItem.price}</h3>
        </div>
      </div>
      <div className={styles.btnBar}>
        <button
          type="button"
          className={styles.button}
          onClick={() => setQuantity(quantity + 1)}
        >
          <CirclePlus />
        </button>
        <input
          type="number"
          className={styles.quantity}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          type="button"
          className={styles.button}
          onClick={() => setQuantity(quantity - 1)}
        >
          <CircleMinus></CircleMinus>
        </button>
        <button
          type="button"
          className={styles.remove}
          onClick={() => handleRemove(selectedItem)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;
