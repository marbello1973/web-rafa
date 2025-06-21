
import { useState, useEffect } from 'react';
import NavbarMobile from './navbarmobile/navbarmobile';
import NavbarPc from './navbarpc/navbarpc';
const Menu = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        handleResize(); 
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isMobile ? <NavbarMobile /> : <NavbarPc />;
};

export default Menu;