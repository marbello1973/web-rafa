import React from 'react';
import { usePersonalization } from '../../component/context/personalization.context';
import styles from './home.module.css';
import Card from '../../component/card/card';

const Home: React.FC = () => {
  const { state } = usePersonalization();

  const features = [
    { id: 1, title: 'Diseño moderno y responsive', icon: '📱', description: 'description' },
    { id: 2, title: 'Fácil personalización', icon: '🎨', description: 'description' },
    { id: 3, title: 'Rendimiento optimizado', icon: '⚡', description: 'description' },
    { id: 4, title: 'Soporte técnico 24/7', icon: '🛠️', description: 'description' }
  ];

  return (
    <div
      className={styles.container}
      style={{
        '--primary-color': state.primaryColor,
        '--secondary-color': state.secondaryColor,
        '--bg-image': `url(${state.backgroundImage})`
      } as React.CSSProperties}
    >
      <section className={styles.hero}>
        <h1 className={styles.title}>{state.title}</h1>
        <p className={styles.subtitle}>{state.subtitle}</p>
        <button className={styles.ctaButton}>Explorar Más</button>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Nuestras Características</h2>
        <div className={styles.featuresGrid}>
          {features.map(feature => (
            < Card
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
