import { useState } from 'react';
import styles from './faq.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Datos de las preguntas frecuentes
  const faqItems = [
    {
      question: '¿Cómo puedo crear una cuenta en su plataforma?',
      answer: 'Para crear una cuenta, haz clic en el botón "Registrarse" en la esquina superior derecha de nuestra página de inicio. Completa el formulario con tu información básica y sigue las instrucciones para verificar tu correo electrónico.',
      category: 'cuenta'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos todas las tarjetas de crédito y débito principales (Visa, MasterCard, American Express), PayPal y transferencias bancarias. También ofrecemos opciones de pago en efectivo en puntos autorizados.',
      category: 'pagos'
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, puedes cancelar tu suscripción en cualquier momento desde la sección "Configuración de cuenta". La cancelación será efectiva al final de tu ciclo de facturación actual y no habrá cargos adicionales.',
      category: 'suscripcion'
    },
    {
      question: '¿Cómo restablezco mi contraseña?',
      answer: 'Haz clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión. Ingresa tu dirección de correo electrónico y te enviaremos un enlace para restablecer tu contraseña. El enlace expirará en 24 horas por seguridad.',
      category: 'cuenta'
    },
    {
      question: '¿Cuánto tiempo tardan en responder las solicitudes de soporte?',
      answer: 'Nuestro equipo de soporte responde a la mayoría de las consultas dentro de las 24 horas hábiles. Las solicitudes urgentes suelen recibir respuesta en menos de 4 horas durante nuestro horario laboral (9 AM - 6 PM, de lunes a viernes).',
      category: 'soporte'
    },
    {
      question: '¿Ofrecen garantía en sus productos/servicios?',
      answer: 'Sí, ofrecemos una garantía de satisfacción de 30 días en todos nuestros productos y servicios. Si no estás satisfecho, puedes solicitar un reembolso completo dentro de este período sin hacer preguntas.',
      category: 'garantia'
    }
  ];

  // Categorías únicas para los filtros
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'cuenta', name: 'Cuenta' },
    { id: 'pagos', name: 'Pagos' },
    { id: 'suscripcion', name: 'Suscripción' },
    { id: 'soporte', name: 'Soporte' },
    { id: 'garantia', name: 'Garantía' }
  ];

  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar preguntas por categoría y búsqueda
  const filteredItems = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number): void => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Preguntas Frecuentes</h1>
        <p className={styles.subtitle}>Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios</p>
      </section>

      {/* Contenido principal */}
      <div className={styles.faqContent}>
        {/* Barra lateral de filtros */}
        <aside className={styles.sidebar}>
          {/* Buscador */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Buscar preguntas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className={styles.searchIcon}>🔍</span>
          </div>

          {/* Filtros por categoría */}
          <div className={styles.categoryFilter}>
            <h3>Categorías</h3>
            <ul>
              {categories.map(category => (
                <li
                  key={category.id}
                  className={activeCategory === category.id ? styles.active : ''}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div className={styles.contactPrompt}>
            <h3>¿No encuentras tu respuesta?</h3>
            <p>Nuestro equipo de soporte está listo para ayudarte</p>
            <button className={styles.contactButton}>Contactar Soporte</button>
          </div>
        </aside>

        {/* Listado de preguntas */}
        <main className={styles.questionsSection}>
          {/* Resultados de búsqueda */}
          <div className={styles.resultsHeader}>
            <h2>
              {activeCategory === 'todos' ? 'Todas las preguntas' : `Categoría: ${categories.find(c => c.id === activeCategory)?.name}`}
            </h2>
            <span>{filteredItems.length} {filteredItems.length === 1 ? 'resultado' : 'resultados'}</span>
          </div>

          {/* Lista de preguntas */}
          {filteredItems.length > 0 ? (
            <div className={styles.accordion}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
                >
                  <div
                    className={styles.accordionQuestion}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3>{item.question}</h3>
                    <span className={styles.accordionIcon}>
                      {activeIndex === index ? '−' : '+'}
                    </span>
                  </div>
                  <div className={styles.accordionAnswer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No se encontraron preguntas</h3>
              <p>Intenta con otros términos de búsqueda o selecciona una categoría diferente</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FAQ;
