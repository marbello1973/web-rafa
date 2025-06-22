import React from 'react';
import styles from './card.module.css';

interface CardProps {
  icon: string | React.ReactNode;
  title: string;
  description?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={styles.card} style={{ borderColor: color }}>
      <div className={styles.iconContainer} style={{ color }}>
        {typeof icon === 'string' ? <span className={styles.icon}>{icon}</span> : icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
