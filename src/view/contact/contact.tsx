import { useState } from 'react';
import styles from './contact.module.css';

type FormFields = 'name' | 'email' | 'phone' | 'subject' | 'message';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = Partial<Record<FormFields, string>>;

const Contact = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user types
    if (errors[name as FormFields]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/;

    if (!formData.name.trim()) newErrors.name = 'Nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Email es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Teléfono no válido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Asunto es requerido';
    if (!formData.message.trim()) newErrors.message = 'Mensaje es requerido';
    else if (formData.message.length < 10) newErrors.message = 'Mensaje muy corto (mínimo 10 caracteres)';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simular envío a una API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.mainTitle}>Contáctanos</h1>
        <p className={styles.subtitle}>Estamos aquí para ayudarte. Envíanos tu consulta y te responderemos pronto.</p>
      </section>

      {/* Contact Content */}
      <div className={styles.contactContent}>
        {/* Contact Form */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>Envía un mensaje</h2>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className={styles.errorMessage}>
              Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre completo*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? styles.errorInput : ''}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? styles.errorInput : ''}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? styles.errorInput : ''}
                placeholder="+1234567890"
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Asunto*</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={errors.subject ? styles.errorInput : ''}
              >
                <option value="">Selecciona un asunto</option>
                <option value="Consulta general">Consulta general</option>
                <option value="Soporte técnico">Soporte técnico</option>
                <option value="Información de productos">Información de productos</option>
                <option value="Trabaja con nosotros">Trabaja con nosotros</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? styles.errorInput : ''}
              ></textarea>
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Información de contacto</h2>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3>Dirección</h3>
                <p>Calle Principal 123, Ciudad</p>
                <p>Edificio Corporativo, Piso 5</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@empresa.com</p>
                <p>soporte@empresa.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h3>Teléfonos</h3>
                <p>+1 (123) 456-7890</p>
                <p>+1 (987) 654-3210</p>
              </div>
            </div>
          </div>

          <div className={styles.businessHours}>
            <h3>Horario de atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p>Sábados: 10:00 AM - 2:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
