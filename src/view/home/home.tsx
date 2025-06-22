import React from 'react';
import { usePersonalization } from '../../component/context/personalization.context';
import styles from './home.module.css';

const Home: React.FC = () => {
  const { state } = usePersonalization();

  const features = [
    { id: 1, text: 'Diseño moderno y responsive', icon: '📱' },
    { id: 2, text: 'Fácil personalización', icon: '🎨' },
    { id: 3, text: 'Rendimiento optimizado', icon: '⚡' },
    { id: 4, text: 'Soporte técnico 24/7', icon: '🛠️' }
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
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <p className={styles.featureText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
