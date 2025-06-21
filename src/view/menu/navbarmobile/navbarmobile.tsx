import { NavLink } from 'react-router-dom';
import styles from './navbarmobile.module.css';
import { useState } from "react";

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={styles.navContainer}>
            <button                 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle Menu"
            >
                {isOpen ? "Close Menu" : "Open Menu"}
            </button>
            {isOpen && (
                <div className={styles.navMenu}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/blog">Blog</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>
                    </ul>
                </div>
            )}           
        </nav>
    );
};

export default NavbarMobile;
