import styles from './home.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { FaCog, FaTimes } from 'react-icons/fa'; // Importamos iconos de react-icons
import Footer from '../footer/footer';

const Home = () => {
  // Estados para los elementos personalizables
  const [title, setTitle] = useState('Bienvenido a Nuestra Plataforma');
  const [subtitle, setSubtitle] = useState('Soluciones innovadoras para tus necesidades');
  const [features, _setFeatures] = useState([
    'Diseño moderno y responsive',
    'Fácil personalización',
    'Rendimiento optimizado',
    'Soporte técnico 24/7'
  ]);
  const [primaryColor, setPrimaryColor] = useState('#3498db');
  const [secondaryColor, setSecondaryColor] = useState('#2c3e50');
  const [backgroundImage, setBackgroundImage] = useState('https://images.unsplash.com/photo-1497366754035-f200968a6e72');

  // Estado para controlar la visibilidad del panel
  const [showPanel, setShowPanel] = useState(false);

  // lazy loading o carga diferida
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isBgLoaded) {
          const img = new Image();
          img.src = backgroundImage;
          img.onload = () => {
            setIsBgLoaded(true)
          };
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, [backgroundImage, isBgLoaded])

  return (
    <div
      className={styles.homeContainer}
      style={{
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
        '--bg-image': `url(${backgroundImage})`
      } as React.CSSProperties}
    >
      <button
        className={`${styles.togglePanelButton} ${showPanel ? styles.hidden : ''}`}
        onClick={() => setShowPanel(!showPanel)}
        style={{ backgroundColor: primaryColor }}
      >
        {showPanel ? <FaTimes /> : <FaCog />}
      </button>

      {/* Panel de personalización con animación */}
      <div className={`${styles.customizationPanel} ${showPanel ? styles.visible : ''}`}>
        <div className={styles.panelHeader}>
          <h3>Personalización</h3>
          <button
            className={styles.closeButton}
            onClick={() => setShowPanel(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.formGroup}>
            <label>Título:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Subtítulo:</label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Color Primario:</label>
            <input
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Color Secundario:</label>
            <input
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Imagen de Fondo:</label>
            <input
              type="text"
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
              placeholder="URL de la imagen"
            />
          </div>
        </div>
      </div>

      {/* Resto del contenido... */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <button className={styles.ctaButton}>Explorar Más</button>
      </section>

      <section className={styles.featuresSection}>
        <h2 className={styles.sectionTitle}>Nuestras Características</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>📌</div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>
      {/*
      <section className={styles.aboutSection}>
        <h2 className={styles.sectionTitle}>Sobre Nosotros</h2>
        <p className={styles.aboutText}>
          Somos un equipo dedicado a crear soluciones digitales innovadoras que
          ayudan a nuestros clientes a alcanzar sus objetivos empresariales.
        </p>
      </section>
      */}

    </div>
  );
};

export default Home;

