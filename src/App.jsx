import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cartpage from "./pages/Cartpage/Cartpage";
import Homepage from "./pages/Homepage/Homepage";
import Shoppage from "./pages/Shoppage/Shoppage";

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shoppage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
