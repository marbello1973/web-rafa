import { useState } from 'react';
import styles from './portfolio.module.css';
import { NavLink } from 'react-router-dom';

const Portfolio = () => {
  // Estados para elementos personalizables
  const [title, setTitle] = useState('Nuestro Portfolio');
  const [subtitle, setSubtitle] = useState('Trabajos destacados que muestran nuestra experiencia');
  const [activeFilter, setActiveFilter] = useState('todos');
  
  // Proyectos del portfolio
  const projects = [
    {
      id: 1,
      title: 'Sitio Web Corporativo',
      category: 'web',
      client: 'Empresa XYZ',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      tags: ['Diseño', 'Desarrollo', 'SEO']
    },
    {
      id: 2,
      title: 'App Móvil de Productividad',
      category: 'mobile',
      client: 'Startup ABC',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6',
      tags: ['iOS', 'Android', 'UX']
    },
    {
      id: 3,
      title: 'Tienda E-commerce',
      category: 'web',
      client: 'Moda Online',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a',
      tags: ['E-commerce', 'WordPress', 'Pagos']
    },
    {
      id: 4,
      title: 'Plataforma Educativa',
      category: 'web',
      client: 'Academia Digital',
      year: '2022',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350',
      tags: ['LMS', 'Cursos', 'Video']
    },
    {
      id: 5,
      title: 'Red Social Especializada',
      category: 'web',
      client: 'Comunidad Tech',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['Social', 'Foros', 'Grupos']
    },
    {
      id: 6,
      title: 'App de Fitness',
      category: 'mobile',
      client: 'Vida Saludable',
      year: '2021',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      tags: ['Salud', 'Tracking', 'Retos']
    }
  ];

  // Filtros disponibles
  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' }
  ];

  // Filtrar proyectos
  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className={styles.portfolioContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </section>

      {/* Portfolio Content */}
      <div className={styles.portfolioContent}>
        {/* Filtros */}
        <div className={styles.filterButtons}>
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.image}
                />
                <div className={styles.overlay}>
                  <button className={styles.viewButton}>Ver Detalles</button>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <div className={styles.meta}>
                  <span>{project.client}</span>
                  <span>{project.year}</span>
                </div>
                <div className={styles.tags}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Contáctanos y hablemos sobre cómo podemos ayudarte</p>
        <button className={styles.ctaButton}><NavLink to="/contact" className={styles.navlink}>Contactar ahora</NavLink></button>
      </section>
    </div>
  );
};

export default Portfolio;