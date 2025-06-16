import React from 'react';
import styles from './Product.module.css';

const Product: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Product Component</h1>
            <h2>pagina para mostrar los productos de la empresa..!</h2>
        </div>
    );
};

export default Product;

