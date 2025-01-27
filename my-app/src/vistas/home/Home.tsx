import React from 'react';
import styles from './Home.module.css';
import Slider from '../../componentes/slider/Slider';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Slider Animado</h1>
            <Slider />
        </div>
    );
};

export default Home;