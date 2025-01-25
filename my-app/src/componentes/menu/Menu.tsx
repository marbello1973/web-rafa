import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

interface Item {
  id: number;
  inicio: string;
  acerca: string;
  contacto: string;
  productos: string;  
} 

interface MenuProps {
  items: Item[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.menuButton} onClick={() => toggleMenu()}>
        {
          isOpen ?  
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
                      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                  </span> 
                 : 
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666">
                      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                  </span> 
        }       
      </div>
      <ul className={`${styles.list} ${isOpen ? styles.show : ''}`}>
        {items.map(item => (
          <React.Fragment key={item.id}>
            <li className={styles.listItem}>
              <Link to="/inicio" className={styles.link}>{item.inicio}</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/acerca" className={styles.link}>{item.acerca}</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/contacto" className={styles.link}>{item.contacto}</Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/productos" className={styles.link}>{item.productos}</Link>
            </li>              
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;

