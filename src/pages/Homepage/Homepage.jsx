import { Link } from "react-router-dom";
import armani from "../../assets/img/armani.webp";
import lacoste from "../../assets/img/croc.webp";
import dior from "../../assets/img/dior.webp";
import dg from "../../assets/img/dolceGabbana.webp";
import hermes from "../../assets/img/hermies.webp";
import parada from "../../assets/img/parada.webp";
import vouge from "../../assets/img/vouge.webp";
import styles from "../Homepage/Homepage.module.css";

function Homepage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Your Style, Your Way</h1>
      <h5 className={styles.describtion}>Click, Giggle, Cart Wiggle</h5>
      <div className={styles.wrapper}>
        <img
          src={armani}
          alt="armani"
          className={`${styles.card} ${styles.card1}`}
        ></img>
        <img
          src={lacoste}
          alt="lacoste"
          className={`${styles.card} ${styles.card2}`}
        ></img>
        <img
          src={dior}
          alt="dior"
          className={`${styles.card} ${styles.card3}`}
        ></img>
        <img
          src={dg}
          alt="Dolce Gabbana"
          className={`${styles.card} ${styles.card4}`}
        ></img>
        <img
          src={hermes}
          alt="Hermes"
          className={`${styles.card} ${styles.card5}`}
        ></img>
        <img
          src={parada}
          alt="Parada"
          className={`${styles.card} ${styles.card6}`}
        ></img>
        <img
          src={vouge}
          alt="vouge"
          className={`${styles.card} ${styles.card7}`}
        ></img>
      </div>
      <Link to="/shop" type="button" className={styles.button}>
        Shop
      </Link>
    </main>
  );
}

export default Homepage;
