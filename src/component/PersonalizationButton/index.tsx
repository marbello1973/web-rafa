import React from 'react';
import { FaCog } from 'react-icons/fa';
import { usePersonalization } from '../context/personalization.context';
import styles from './styles.module.css';

export const PersonalizationButton: React.FC = () => {
  const { state, setIsPanelOpen, isPanelOpen } = usePersonalization();

  return (
    <button
      className={`${styles.button} ${isPanelOpen ? styles.hidden : ''}`}
      onClick={() => setIsPanelOpen(true)}
      style={{
        backgroundColor: state.primaryColor,
        color: getContrastColor(state.primaryColor)
      }}
      aria-label="Abrir panel de personalización"
    >
      <FaCog className={styles.icon} />
      <span className={styles.tooltip}>Personalizar</span>
    </button>
  );
};

// Función auxiliar para determinar color de texto contrastante
function getContrastColor(hexColor: string): string {
  const r = parseInt(hexColor.substr(1, 2), 16);
  const g = parseInt(hexColor.substr(3, 2), 16);
  const b = parseInt(hexColor.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#FFFFFF';
}
/*import React from 'react';
import { FaCog } from 'react-icons/fa';
import { usePersonalization } from '../context/personalization.context';
import styles from './styles.module.css';

export const PersonalizationButton: React.FC = () => {
  const { state, isPanelOpen, setIsPanelOpen } = usePersonalization();

  return (
    <button
      className={`${styles.button} ${isPanelOpen ? styles.hidden : ''}`}
      onClick={() => setIsPanelOpen(true)}
      style={{ backgroundColor: state.primaryColor }}
      aria-label="Abrir panel de personalización"
    >
      <FaCog className={styles.icon} />
    </button>
  );
};*/
