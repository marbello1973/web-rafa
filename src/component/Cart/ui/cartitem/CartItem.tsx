import { useCart } from "../../hooks/useCart";
import type { CartItem as CartItemType } from "../../types/cart.types";
import styles from "./CartItem.module.css";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.itemImage}>
        {item.image ? (
          <img src={item.image} alt={item.name} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>📦</div>
        )}
      </div>

      <div className={styles.itemDetails}>
        <h4 className={styles.itemName}>{item.name}</h4>
        <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
      </div>

      <div className={styles.quantitySection}>
        <div className={styles.quantityControls}>
          <button
            className={styles.quantityButton}
            onClick={() => handleQuantityChange(item.quantity - 1)}
            aria-label="Reducir cantidad"
          >
            −
          </button>

          <span className={styles.quantity}>{item.quantity}</span>

          <button
            className={styles.quantityButton}
            onClick={() => handleQuantityChange(item.quantity + 1)}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <div className={styles.itemTotal}>
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>

      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
        aria-label="Eliminar producto"
      >
        ×
      </button>
    </div>
  );
}
