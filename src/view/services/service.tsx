import { useState } from 'react';
import styles from './service.module.css';
import { NavLink } from 'react-router-dom';

const Services = () => {
  // Estados para elementos personalizables
  const [title, _setTitle] = useState('Nuestros Servicios');
  const [subtitle, _setSubtitle] = useState('Soluciones profesionales diseñadas para impulsar tu negocio');
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: 'Diseño Web',
      icon: '💻',
      description: 'Creamos sitios web modernos, responsive y optimizados para SEO que destacan tu marca.',
      features: [
        'Diseño responsive',
        'Optimización SEO',
        'UI/UX profesional',
        'Integración con redes sociales'
      ],
      price: 'Desde $999'
    },
    {
      title: 'Desarrollo de Apps',
      icon: '📱',
      description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.',
      features: [
        'Apps iOS y Android',
        'Desarrollo nativo/híbrido',
        'Integración con APIs',
        'Pruebas exhaustivas'
      ],
      price: 'Desde $2,500'
    },
    {
      title: 'Marketing Digital',
      icon: '📢',
      description: 'Estrategias de marketing digital para aumentar tu presencia online y generar leads.',
      features: [
        'SEO y SEM',
        'Redes sociales',
        'Email marketing',
        'Analítica web'
      ],
      price: 'Desde $750/mes'
    },
    {
      title: 'Branding',
      icon: '🎨',
      description: 'Desarrollamos identidades de marca memorables que conectan con tu audiencia.',
      features: [
        'Diseño de logo',
        'Manual de marca',
        'Identidad visual',
        'Diseño de packaging'
      ],
      price: 'Desde $1,200'
    }
  ];

  const testimonials = [
    {
      name: 'Ana Martínez',
      company: 'EcoFood',
      text: 'Increíble trabajo con nuestro sitio web. El tráfico orgánico aumentó un 200% en 3 meses.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      company: 'TechSolutions',
      text: 'La app que desarrollaron superó nuestras expectativas. Muy profesionales.',
      rating: 5
    },
    {
      name: 'María González',
      company: 'Belleza Natural',
      text: 'Nueva imagen de marca espectacular. Nuestras ventas han crecido significativamente.',
      rating: 4
    }
  ];

  return (
    <div className={styles.servicesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </section>

      {/* Services Tabs */}
      <section className={styles.servicesSection}>
        <div className={styles.tabsHeader}>
          {services.map((service, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className={styles.tabIcon}>{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        <div className={styles.tabContent}>
          <div className={styles.serviceDetails}>
            <h2>{services[activeTab].title}</h2>
            <p className={styles.serviceDescription}>{services[activeTab].description}</p>

            <div className={styles.featuresGrid}>
              {services[activeTab].features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </div>
              ))}
            </div>

            <div className={styles.priceBox}>
              <span className={styles.priceLabel}>Inversión:</span>
              <span className={styles.priceValue}>{services[activeTab].price}</span>
            </div>

            <button className={styles.ctaButton}>Solicitar este servicio</button>
          </div>

          <div className={styles.serviceImage}>
            <div className={styles.imagePlaceholder}>
              {services[activeTab].icon}
              <span>Imagen ilustrativa de {services[activeTab].title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className={styles.allServicesSection}>
        <h2 className={styles.sectionTitle}>Todos Nuestros Servicios</h2>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.cardIcon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className={styles.cardFeatures}>
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                className={styles.cardButton}
                onClick={() => setActiveTab(index)}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.sectionTitle}>Lo que dicen nuestros clientes</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className={styles.testimonialText}>"{testimonial.text}"</p>
              <div className={styles.clientInfo}>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <h2>¿Listo para comenzar tu proyecto?</h2>
        <p>Contáctanos hoy mismo y recibe una consultoría gratuita</p>
        <button className={styles.ctaButton}><NavLink to="/Contact" className={styles.navlink}>Contactar ahora</NavLink></button>
      </section>
    </div>
  );
};

export default Services;
