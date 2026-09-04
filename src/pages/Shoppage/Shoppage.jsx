import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "../Shoppage/Shoppage.module.css";

function Shoppage() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setItems(res.data);
      setDataIsLoaded(true);
    });
  });

  if (!dataIsLoaded) {
    return (
      <>
        <h1>Please wait some time.....</h1>
      </>
    );
  }

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          category={item.category}
        ></Card>
      ))}
    </div>
  );
}

export default Shoppage;
