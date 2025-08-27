import { NavLink } from "react-router-dom";
import styles from "./navbarmobile.module.css";
import { useState } from "react";
import { CartIcon, CartModal } from "../../../component/Cart";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navHeader}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
          >
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
          <div className={styles.cartWrapperMobile}>
            <CartIcon />
          </div>
        </div>
        {isOpen && (
          <div className={styles.navMenu}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <CartModal />
    </>
  );
};

export default NavbarMobile;
