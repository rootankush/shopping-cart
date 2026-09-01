import "../Header/Header.css";
import { ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header>
      <nav>
        <button type="button" className="nav-btn">
          Home
        </button>
        <button type="button" className="nav-btn">
          Shop
        </button>
        <button type="button" className="nav-btn">
          Cart
        </button>
      </nav>
      <button type="button">
        <ShoppingCart />
      </button>
    </header>
  );
}
