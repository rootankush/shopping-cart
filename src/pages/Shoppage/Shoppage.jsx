import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "../Shoppage/Shoppage.module.css";

function Shoppage() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const initializedItems = res.data.map((item) => ({
          ...item,
          quantity: 0,
        }));
        setItems(initializedItems);
        setDataIsLoaded(true);
      })
      .catch((error) => setError(error));
  }, []);

  if (!dataIsLoaded) {
    return (
      <>
        <h1 className={styles.waiting}>Please wait some time.....</h1>
      </>
    );
  }

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </div>
  );
}

export default Shoppage;
