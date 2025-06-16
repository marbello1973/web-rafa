import React from 'react';
import { FaRocket, FaShieldAlt, FaChartLine, FaLightbulb, FaRegHeart } from 'react-icons/fa';
import { FiCoffee, FiGlobe} from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Transforma tu negocio con soluciones digitales</h1>
          <p>Innovación y tecnología para llevar tu empresa al siguiente nivel</p>
          <div className={styles.heroButtons}>
            <button className={styles.primaryButton}>Comenzar ahora</button>
            <button className={styles.secondaryButton}>Ver demo</button>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Por qué elegirnos</h2>
          <p>Ofrecemos las mejores soluciones del mercado</p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <FaRocket className={styles.featureIcon} />
            <h3>Rápida implementación</h3>
            <p>Nuestras soluciones están listas para usar en tiempo récord.</p>
          </div>
          <div className={styles.featureCard}>
            <FaShieldAlt className={styles.featureIcon} />
            <h3>Seguridad garantizada</h3>
            <p>Protegemos tus datos con los más altos estándares de seguridad.</p>
          </div>
          <div className={styles.featureCard}>
            <FaChartLine className={styles.featureIcon} />
            <h3>Resultados medibles</h3>
            <p>Métricas claras que muestran el crecimiento de tu negocio.</p>
          </div>
          <div className={styles.featureCard}>
            <FaLightbulb className={styles.featureIcon} />
            <h3>Innovación constante</h3>
            <p>Siempre a la vanguardia con las últimas tecnologías.</p>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section className={styles.products}>
        <div className={styles.sectionHeader}>
          <h2>Nuestros productos</h2>
          <p>Soluciones diseñadas para tus necesidades</p>
        </div>
        <div className={styles.productsGrid}>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <FiCoffee />
            </div>
            <h3>Plan Básico</h3>
            <p className={styles.price}>$99<span>/mes</span></p>
            <ul className={styles.featuresList}>
              <li>5 usuarios incluidos</li>
              <li>10GB de almacenamiento</li>
              <li>Soporte prioritario</li>
              <li>Actualizaciones mensuales</li>
            </ul>
            <button className={styles.productButton}>Seleccionar</button>
          </div>
          <div className={`${styles.productCard} ${styles.popular}`}>
            <div className={styles.popularTag}>Popular</div>
            <div className={styles.productIcon}>
              <IoMdTrendingUp />
            </div>
            <h3>Plan Empresarial</h3>
            <p className={styles.price}>$299<span>/mes</span></p>
            <ul className={styles.featuresList}>
              <li>Usuarios ilimitados</li>
              <li>100GB de almacenamiento</li>
              <li>Soporte 24/7</li>
              <li>Actualizaciones semanales</li>
              <li>Analíticas avanzadas</li>
            </ul>
            <button className={styles.productButton}>Seleccionar</button>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productIcon}>
              <FiGlobe />
            </div>
            <h3>Plan Global</h3>
            <p className={styles.price}>$499<span>/mes</span></p>
            <ul className={styles.featuresList}>
              <li>Usuarios ilimitados</li>
              <li>Almacenamiento ilimitado</li>
              <li>Soporte dedicado</li>
              <li>Actualizaciones diarias</li>
              <li>Multiplataforma</li>
            </ul>
            <button className={styles.productButton}>Seleccionar</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2>Lo que dicen nuestros clientes</h2>
          <p>Experiencias reales de empresas que confiaron en nosotros</p>
        </div>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <FaRegHeart className={styles.quoteIcon} />
              <p>"Increíble servicio. Desde que implementamos sus soluciones, nuestra productividad aumentó en un 40%."</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente" />
              <div>
                <h4>María González</h4>
                <p>CEO, TechSolutions</p>
              </div>
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialContent}>
              <FaRegHeart className={styles.quoteIcon} />
              <p>"El soporte técnico es excepcional. Siempre están disponibles cuando los necesitamos."</p>
            </div>
            <div className={styles.testimonialAuthor}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" />
              <div>
                <h4>Carlos Mendoza</h4>
                <p>Director, Innovatech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={styles.partners}>
        <div className={styles.sectionHeader}>
          <h2>Confían en nosotros</h2>
          <p>Empresas líderes en sus industrias</p>
        </div>
        <div className={styles.partnersGrid}>
          <div className={styles.partnerLogo}><img src="https://via.placeholder.com/150x60?text=TechCorp" alt="TechCorp" /></div>
          <div className={styles.partnerLogo}><img src="https://via.placeholder.com/150x60?text=GlobalSoft" alt="GlobalSoft" /></div>
          <div className={styles.partnerLogo}><img src="https://via.placeholder.com/150x60?text=Innova" alt="Innova" /></div>
          <div className={styles.partnerLogo}><img src="https://via.placeholder.com/150x60?text=DigitalX" alt="DigitalX" /></div>
          <div className={styles.partnerLogo}><img src="https://via.placeholder.com/150x60?text=FutureNow" alt="FutureNow" /></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para transformar tu negocio?</h2>
          <p>Comienza hoy mismo con una prueba gratuita de 14 días</p>
          <button className={styles.ctaButton}>Comenzar prueba gratuita</button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>Nuestra empresa</h3>
            <p>Líderes en soluciones digitales desde 2010, ayudando a empresas a alcanzar su máximo potencial.</p>
            <div className={styles.socialIcons}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Precios</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Servicios</h3>
            <ul>
              <li><a href="#">Desarrollo web</a></li>
              <li><a href="#">Aplicaciones móviles</a></li>
              <li><a href="#">Marketing digital</a></li>
              <li><a href="#">Consultoría TI</a></li>
              <li><a href="#">Soporte 24/7</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contacto</h3>
            <ul className={styles.contactInfo}>
              <li><i className="fas fa-map-marker-alt"></i> Av. Principal 123, Ciudad</li>
              <li><i className="fas fa-phone"></i> +1 234 567 890</li>
              <li><i className="fas fa-envelope"></i> info@empresa.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} NombreEmpresa. Todos los derechos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;