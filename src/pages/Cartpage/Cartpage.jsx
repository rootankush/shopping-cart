import CartCard from "../../components/CartCard/CartCard";
import styles from "../Cartpage/Cartpage.module.css";

function Cartpage({ selectedItems, handleRemove }) {
  return (
    <div className={styles.container}>
      {selectedItems.map((selectedItem) => (
        <CartCard
          key={selectedItem.id}
          selectedItem={selectedItem}
          handleRemove={handleRemove}
        ></CartCard>
      ))}
    </div>
  );
}

export default Cartpage;
