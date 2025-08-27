import { useCart } from "../../hooks/useCart";
import { CartItem } from "../cartitem/CartItem";
import styles from "./CartModal.module.css";

export function CartModal() {
  const { items, total, clearCart, isOpen, toggleCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={toggleCart} />

      <div className={styles.cartModal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Carrito de Compras</h2>
          <button
            className={styles.closeButton}
            onClick={toggleCart}
            aria-label="Cerrar carrito"
          >
            ×
          </button>
        </div>

        <div className={styles.modalContent}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <p>Tu carrito está vacío</p>
              <span>🛒</span>
            </div>
          ) : (
            <>
              <div className={styles.cartItems}>
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className={styles.cartSummary}>
                <div className={styles.totalSection}>
                  <span className={styles.totalLabel}>Total:</span>
                  <span className={styles.totalAmount}>
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className={styles.actionButtons}>
                  <button className={styles.clearButton} onClick={clearCart}>
                    Vaciar Carrito
                  </button>

                  <button
                    className={styles.checkoutButton}
                    onClick={() => alert("Proceso de pago no implementado")}
                  >
                    Finalizar Compra
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
