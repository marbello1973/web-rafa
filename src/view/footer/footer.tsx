import React from 'react';
import styles from './footer.module.css'; // Asegúrate de crear este archivo CSS
import { NavLink } from 'react-router-dom';

interface FooterProps {
  primaryColor?: string;
  secondaryColor?: string;
}

const Footer: React.FC<FooterProps> = ({ primaryColor = '#3498db', secondaryColor = '#2c3e50' }) => {
  return (
    <footer
      className={styles.footer}
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
      } as React.CSSProperties}
    >
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contacto</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>Email: info@ejemplo.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>

        <div className={styles.footerSection}>
          <h3>Síguenos</h3>
          <div className={styles.socialIcons}>
            <a href="#"><span>Facebook</span></a>
            <a href="#"><span>Twitter</span></a>
            <a href="#"><span>Instagram</span></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
