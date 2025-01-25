import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to the Home Page</h1>
            <h2>Pagina de inicio de la aplicacion</h2>
        </div>
    );
};

export default Home;