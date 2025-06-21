import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');

  // Categorías del blog
  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'diseno', name: 'Diseño' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'negocios', name: 'Negocios' }
  ];

  // Artículos del blog
  const articles = [
    {
      id: 1,
      title: 'Las últimas tendencias en desarrollo web para 2023',
      excerpt: 'Exploramos las tecnologías y metodologías que dominarán el desarrollo web este año.',
      category: 'tecnologia',
      date: '15 Marzo 2023',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166',
      featured: true
    },
    {
      id: 2,
      title: 'Cómo mejorar la experiencia de usuario en tus proyectos',
      excerpt: '10 principios fundamentales de UX que todo diseñador debería conocer.',
      category: 'diseno',
      date: '10 Marzo 2023',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      featured: false
    },
    {
      id: 3,
      title: 'Estrategias de SEO para posicionar tu sitio web',
      excerpt: 'Guía completa con las técnicas más efectivas de optimización para motores de búsqueda.',
      category: 'marketing',
      date: '5 Marzo 2023',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      featured: false
    },
    {
      id: 4,
      title: 'React vs Vue: ¿Cuál elegir en 2023?',
      excerpt: 'Comparativa detallada entre los dos frameworks más populares de JavaScript.',
      category: 'tecnologia',
      date: '28 Febrero 2023',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
      featured: false
    },
    {
      id: 5,
      title: 'Transformación digital para pequeñas empresas',
      excerpt: 'Cómo las PYMES pueden beneficiarse de la digitalización en tiempos de cambio.',
      category: 'negocios',
      date: '20 Febrero 2023',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
      featured: false
    },
    {
      id: 6,
      title: 'Diseño de interfaces accesibles: guía práctica',
      excerpt: 'Consejos y herramientas para crear productos digitales inclusivos.',
      category: 'diseno',
      date: '15 Febrero 2023',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      featured: false
    }
  ];

  // Filtrar artículos por categoría y búsqueda
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'todos' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Obtener artículo destacado
  const featuredArticle = articles.find(article => article.featured);

  return (
    <div className={styles.blogContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Blog</h1>
        <p className={styles.subtitle}>Aprende, descubre y mantente actualizado con nuestros artículos</p>
      </section>

      {/* Contenido principal */}
      <div className={styles.blogContent}>
        {/* Barra lateral */}
        <aside className={styles.sidebar}>
          {/* Buscador */}
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchButton}>🔍</button>
          </div>

          {/* Categorías */}
          <div className={styles.categories}>
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

          {/* Artículos populares */}
          <div className={styles.popularPosts}>
            <h3>Artículos Populares</h3>
            <ul>
              {articles.slice(0, 3).map(article => (
                <li key={article.id}>
                  <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  <span>{article.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h3>Suscríbete al newsletter</h3>
            <p>Recibe los últimos artículos directamente en tu correo</p>
            <form>
              <input type="email" placeholder="Tu correo electrónico" required />
              <button type="submit">Suscribirse</button>
            </form>
          </div>
        </aside>

        {/* Artículos */}
        <main className={styles.articles}>
          {/* Artículo destacado */}
          {featuredArticle && activeCategory === 'todos' && searchQuery === '' && (
            <div className={styles.featuredArticle}>
              <div className={styles.featuredImage}>
                <img src={featuredArticle.image} alt={featuredArticle.title} />
                <div className={styles.featuredBadge}>Destacado</div>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.meta}>
                  <span className={styles.category}>{featuredArticle.category}</span>
                  <span>{featuredArticle.date}</span>
                  <span>{featuredArticle.readTime} de lectura</span>
                </div>
                <h2>{featuredArticle.title}</h2>
                <p>{featuredArticle.excerpt}</p>
                <Link to={`/blog/${featuredArticle.id}`} className={styles.readMore}>Leer más →</Link>
              </div>
            </div>
          )}

          {/* Listado de artículos */}
          <div className={styles.articlesGrid}>
            {filteredArticles.map(article => (
              <article key={article.id} className={styles.articleCard}>
                <div className={styles.articleImage}>
                  <img src={article.image} alt={article.title} />
                </div>
                <div className={styles.articleContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{article.category}</span>
                    <span>{article.date}</span>
                    <span>{article.readTime} de lectura</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <Link to={`/blog/${article.id}`} className={styles.readMore}>Leer más →</Link>
                </div>
              </article>
            ))}
          </div>

          {/* Paginación */}
          {filteredArticles.length > 0 && (
            <div className={styles.pagination}>
              <button disabled>← Anterior</button>
              <span>Página 1 de 2</span>
              <button>Siguiente →</button>
            </div>
          )}

          {/* Mensaje si no hay resultados */}
          {filteredArticles.length === 0 && (
            <div className={styles.noResults}>
              <h3>No se encontraron artículos</h3>
              <p>Intenta con otros términos de búsqueda o selecciona una categoría diferente</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Blog;