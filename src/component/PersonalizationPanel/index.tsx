import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { usePersonalization } from '../context/personalization.context';
import styles from './styles.module.css';

export const PersonalizationPanel: React.FC = () => {
  const { state, setState, isPanelOpen, setIsPanelOpen } = usePersonalization();

  const handleChange = (key: keyof typeof state, value: string) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`${styles.panel} ${isPanelOpen ? styles.visible : ''}`}>
      <div className={styles.header}>
        <h3>Personalización</h3>
        <button className={styles.closeButton} onClick={() => setIsPanelOpen(false)}>
          <FaTimes />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h4>Contenido</h4>
          <div className={styles.formGroup}>
            <label>Título:</label>
            <input
              value={state.title}
              onChange={(e) => handleChange('title', e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Subtítulo:</label>
            <input
              value={state.subtitle}
              onChange={(e) => handleChange('subtitle', e.target.value)}
            />
          </div>
        </div>

        <div className={styles.section}>
          <h4>Diseño</h4>
          <div className={styles.formGroup}>
            <label>Color Primario:</label>
            <input
              type="color"
              value={state.primaryColor}
              onChange={(e) => handleChange('primaryColor', e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Color Secundario:</label>
            <input
              type="color"
              value={state.secondaryColor}
              onChange={(e) => handleChange('secondaryColor', e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Imagen de Fondo:</label>
            <input
              value={state.backgroundImage}
              onChange={(e) => handleChange('backgroundImage', e.target.value)}
              placeholder="URL de la imagen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
