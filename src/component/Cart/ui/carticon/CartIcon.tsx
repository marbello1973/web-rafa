import { useCart } from "../../hooks/useCart";
import styles from "./CartIcon.module.css";

export function CartIcon() {
  const { itemCount, toggleCart } = useCart();

  return (
    <button
      className={styles.cartIcon}
      onClick={toggleCart}
      aria-label="Abrir carrito de compras"
    >
      <span className={styles.icon}>🛒</span>
      {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
    </button>
  );
}
