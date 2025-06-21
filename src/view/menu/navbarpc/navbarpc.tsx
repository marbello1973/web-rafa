import { NavLink } from 'react-router-dom';
import styles from './navbarpc.module.css';
import { useState, useEffect } from "react";

const NavbarPc = () => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        // En la parte superior de la página
        setScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll hacia abajo después de 100px
        setScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll hacia arriba
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`${styles.navContainer} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>        
        <ul className={styles.navList}>
          <li className={styles.navItem}><NavLink to="/">Home</NavLink></li>
          <li className={styles.navItem}><NavLink to="/about">About</NavLink></li>
          <li className={styles.navItem}><NavLink to="/contact">Contact</NavLink></li>
          <li className={styles.navItem}><NavLink to="/services">Services</NavLink></li>
          <li className={styles.navItem}><NavLink to="/blog">Blog</NavLink></li>
          <li className={styles.navItem}><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li className={styles.navItem}><NavLink to="/faq">FAQ</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPc;