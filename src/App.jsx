import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cartpage from "./pages/Cartpage/Cartpage";
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleAddToCart(obj, numberOfItems) {
    const exists = selectedItems.find((item) => item.id === obj.id);
    if (!exists) {
      setSelectedItems([
        ...selectedItems,
        { ...obj, quantity: Number(numberOfItems) },
      ]);
    } else {
      setSelectedItems(
        selectedItems.map((item) =>
          item.id === obj.id
            ? { ...item, quantity: item.quantity + Number(numberOfItems) }
            : item,
        ),
      );
    }
  }

  console.log(selectedItems);

  function handleRemove(obj) {
    setSelectedItems(selectedItems.filter((item) => item !== obj));
  }

  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/shop"
            element={<Shoppage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cartpage
                selectedItems={selectedItems}
                handleRemove={handleRemove}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
