import React, { useEffect, useRef } from 'react';
import './Cookies.css';
import Header from '../../components/header/Header'
import HeaderMobile from '../../components/header-mobile/HeaderMobile'
import Footer from '../../components/footer/Footer'


const Cookies = () => {
    const sectionsRef = useRef({});
    const tocLinksRef = useRef({});

    // Observador para resaltar la sección activa
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.getAttribute('id');
                    if (tocLinksRef.current[id]) {
                        if (entry.isIntersecting) {
                            tocLinksRef.current[id].classList.add('active');
                        } else {
                            tocLinksRef.current[id].classList.remove('active');
                        }
                    }
                });
            },
            { rootMargin: '-20% 0px -80% 0px' } // Ajusta el umbral de visibilidad
        );

        Object.values(sectionsRef.current).forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            Object.values(sectionsRef.current).forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const tocItems = [
        { id: 'introduccion', label: 'Introducción' },
        { id: 'que-son-cookies', label: '¿Qué son las cookies?' },
        { id: 'por-que-utilizamos', label: '¿Por qué utilizamos cookies?' },
        { id: 'tipos-cookies', label: 'Tipos de cookies que utilizamos' },
        { id: 'control-cookies', label: '¿Cómo puedes controlar las cookies?' },
        { id: 'consentimiento', label: 'Consentimiento previo' },
        { id: 'cookies-terceros', label: 'Cookies de terceros' },
        { id: 'cambios-politica', label: 'Cambios en esta política' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="cookies-container">
                {/* Sidebar: Índice */}
                <aside className="cookies-sidebar">
                    <h2 className="cookies-sidebar-title">Contenidos</h2>
                    <ul className="toc-list">
                        {tocItems.map((item) => (
                            <li key={item.id} className="toc-item">
                                <a
                                    href={`#${item.id}`}
                                    ref={(el) => (tocLinksRef.current[item.id] = el)}
                                    className="toc-link"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="cookies-main-content">
                    <h1 className="page-title">Política de Cookies de AniBeat</h1>
                    <div className="page-meta">
                        Última actualización: <strong>10 de febrero de 2026</strong>
                        <br />
                        URL:{' '}
                        <a href="/home" target="_blank" rel="noopener noreferrer">
                            https://www.anibeat.com
                        </a>
                    </div>

                    <section id="introduccion" ref={(el) => (sectionsRef.current.introduccion = el)} className="section">
                        <h2>Introducción</h2>
                        <p>
                            Esta Política de Cookies explica cómo <span className="highlight">AniBeat</span> (“AniBeat”, “nosotros”, “nuestro”) utiliza cookies y tecnologías similares para reconocerte cuando visitas nuestro sitio web. Explica qué son estas tecnologías, por qué las usamos y tus derechos para controlar su uso.
                        </p>
                    </section>

                    <section id="que-son-cookies" ref={(el) => (sectionsRef.current['que-son-cookies'] = el)} className="section">
                        <h2>¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Su objetivo puede ser hacer que el sitio funcione correctamente o mejorar la experiencia del usuario (por ejemplo, recordar preferencias o proporcionar estadísticas de uso). Las cookies propias son las que coloca directamente AniBeat, y las de terceros son las que se cargan por servicios externos (por ejemplo, analíticas o publicidad).
                        </p>
                    </section>

                    <section id="por-que-utilizamos" ref={(el) => (sectionsRef.current['por-que-utilizamos'] = el)} className="section">
                        <h2>¿Por qué utilizamos cookies?</h2>
                        <p>Utilizamos cookies por varias razones:</p>
                        <ul>
                            <li>Cookies estrictamente necesarias para el funcionamiento básico del sitio.</li>
                            <li>Cookies de rendimiento y funcionalidad para mejorar la experiencia de usuario.</li>
                            <li>Cookies analíticas para entender cómo se usa el sitio y medir el rendimiento.</li>
                            <li>Cookies publicitarias o de redes sociales, si aplican.</li>
                        </ul>
                        <p>
                            Las cookies de terceros pueden recopilar información sobre tu actividad fuera de nuestro sitio web. Si no aceptas ciertas categorías de cookies, algunas funciones o servicios del sitio pueden no estar disponibles.
                        </p>
                    </section>

                    <section id="tipos-cookies" ref={(el) => (sectionsRef.current['tipos-cookies'] = el)} className="section">
                        <h2>Tipos de cookies que utilizamos</h2>
                        <ul>
                            <li>
                                <strong>Cookies esenciales del sitio</strong>: necesarias para que el sitio funcione (por ejemplo, mantener tu sesión activa).
                            </li>
                            <li>
                                <strong>Cookies de rendimiento y funcionalidad</strong>: mejoran el rendimiento del sitio web (por ejemplo, recordar tus preferencias).
                            </li>
                            <li>
                                <strong>Cookies analíticas y de personalización</strong>: nos ayudan a comprender cómo se usa el sitio y personalizar contenido.
                            </li>
                            <li>
                                <strong>Cookies publicitarias/de redes sociales</strong>: utilizadas por terceros para mostrar anuncios relevantes o permitir funciones de redes sociales.
                            </li>
                        </ul>
                        <p>(Debajo de cada tipo puedes incluir una tabla con ejemplos concretos si los tienes.)</p>
                    </section>

                    <section id="control-cookies" ref={(el) => (sectionsRef.current['control-cookies'] = el)} className="section">
                        <h2>¿Cómo puedes controlar las cookies?</h2>
                        <p>
                            Tienes derecho a decidir si aceptas o rechazas las cookies. Puedes ajustar tus preferencias de cookies mediante nuestro Gestor de consentimiento de cookies (si lo implementas en el sitio) o modificando la configuración de tu navegador para aceptar o rechazar cookies. Las cookies esenciales no pueden rechazarse si son necesarias para que el sitio funcione.
                        </p>
                        <p>
                            Cada navegador (Chrome, Firefox, Safari, etc.) permite controlar las cookies. Consulta las instrucciones de tu navegador para aprender cómo cambiar estos ajustes.
                        </p>
                    </section>

                    <section id="consentimiento" ref={(el) => (sectionsRef.current.consentimiento = el)} className="section">
                        <h2>Consentimiento previo</h2>
                        <p>
                            Si la ley lo exige (por ejemplo, RGPD), solicitamos tu consentimiento previo para activar cookies no esenciales antes de que se almacenen en tu dispositivo. Puedes cambiar tus preferencias de cookies en cualquier momento mediante el Gestor de consentimiento.
                        </p>
                    </section>

                    <section id="cookies-terceros" ref={(el) => (sectionsRef.current['cookies-terceros'] = el)} className="section">
                        <h2>Cookies de terceros</h2>
                        <p>
                            Nuestro sitio puede incluir cookies de servicios externos como Google Analytics, proveedores de publicidad o redes sociales. Estos servicios pueden recopilar datos sobre tu navegación con fines de análisis o publicidad. Revisa las políticas de privacidad de esos servicios para comprender cómo tratan tus datos.
                        </p>
                    </section>

                    <section id="cambios-politica" ref={(el) => (sectionsRef.current['cambios-politica'] = el)} className="section">
                        <h2>Cambios en esta política</h2>
                        <p>
                            Podemos actualizar esta política de cookies en función de cambios en la legislación o en nuestras prácticas de cookies. La versión más reciente siempre estará disponible en nuestro sitio web.
                        </p>
                    </section>

                    <section id="contacto" ref={(el) => (sectionsRef.current.contacto = el)} className="section">
                        <h2>Contacto</h2>
                        <p>
                            Si tienes preguntas sobre esta política, puedes contactar con nosotros en:
                        </p>
                        <p>
                            Email: <a href="mailto:info@anibeat.com">info@anibeat.com</a>
                            <br />
                            Dirección: [tu dirección legal, si aplica]
                        </p>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Cookies;