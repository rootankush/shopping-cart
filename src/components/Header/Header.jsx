import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";

export default function Header({ indicator }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">
          <li className={styles.li}>Home</li>
        </Link>
        <Link to="/shop">
          <li className={styles.li}>Shop</li>
        </Link>
        <Link to="/cart">
          <li className={styles.li}>Cart</li>
        </Link>
      </nav>
      <button type="button" className={styles.button}>
        <ShoppingCart />
        <p className={styles.indicator}>{indicator}</p>
      </button>
    </header>
  );
}
