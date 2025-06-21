import styles from "./about.module.css";
import { useState } from 'react';

const About = () => {
  // Estados para elementos personalizables
  const [title, _setTitle] = useState('Sobre Nosotros');
  const [mission, _setMission] = useState('Nuestra misión es proporcionar soluciones digitales innovadoras que impulsen el éxito de nuestros clientes.');
  const [vision, _setVision] = useState('Ser líderes en desarrollo tecnológico, reconocidos por nuestra creatividad y excelencia.');
  const [team, _setTeam] = useState([
    { name: 'Juan Pérez', role: 'CEO & Fundador', bio: 'Más de 15 años de experiencia en desarrollo de software.' },
    { name: 'María García', role: 'Diseñadora UX/UI', bio: 'Especialista en experiencia de usuario e interfaces intuitivas.' },
    { name: 'Carlos López', role: 'Desarrollador Senior', bio: 'Experto en React, Node.js y arquitectura de software.' }
  ]);
  const [values, _setValues] = useState([
    'Innovación constante',
    'Calidad en cada producto',
    'Transparencia con nuestros clientes',
    'Pasión por la tecnología'
  ]);

  return (
    <div className={styles.aboutContainer}>
      {/* Sección Hero */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>Conoce más sobre nuestra historia, equipo y valores</p>
      </section>

      {/* Sección Historia */}
      <section className={styles.historySection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <h3>2015</h3>
              <p>Fundación de la empresa con un pequeño equipo de 3 personas.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2018</h3>
              <p>Lanzamiento de nuestra primera plataforma empresarial.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>2021</h3>
              <p>Expansión internacional con clientes en 5 países.</p>
            </div>
            <div className={styles.timelineItem}>
              <h3>Presente</h3>
              <p>Más de 50 empleados y cientos de clientes satisfechos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Misión y Visión */}
      <section className={styles.missionVisionSection}>
        <div className={styles.missionVisionGrid}>
          <div className={styles.missionCard}>
            <h2 className={styles.sectionTitle}>Misión</h2>
            <p>{mission}</p>
          </div>
          <div className={styles.visionCard}>
            <h2 className={styles.sectionTitle}>Visión</h2>
            <p>{vision}</p>
          </div>
        </div>
      </section>

      {/* Sección Equipo */}
      <section className={styles.teamSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Valores */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>✓</div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
