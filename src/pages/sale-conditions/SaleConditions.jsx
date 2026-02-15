import React, { useEffect, useRef } from 'react';
import './SaleConditions.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const SaleConditions = () => {
  const sectionsRef = useRef({});
  const tocLinksRef = useRef({});

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
      { rootMargin: '-20% 0px -80% 0px' }
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
    { id: 'informacion-general', label: 'Información general' },
    { id: 'usuarios', label: 'Usuarios' },
    { id: 'proceso-compra', label: 'Proceso de compra' },
    { id: 'disponibilidad', label: 'Disponibilidad' },
    { id: 'precios-pago', label: 'Precios y pago' },
    { id: 'desistimiento-devoluciones', label: 'Derecho de desistimiento y devoluciones' },
    { id: 'garantias', label: 'Garantías y productos defectuosos' },
    { id: 'exoneracion', label: 'Exoneración de responsabilidad' },
    { id: 'comunicaciones', label: 'Comunicaciones y notificaciones' },
    { id: 'proteccion-datos', label: 'Protección de datos' },
    { id: 'ley-jurisdiccion', label: 'Ley aplicable y jurisdicción' },
  ];

  return (
    <>
      <Header />
      <div className="sale-conditions-container">
        {/* Sidebar: Índice */}
        <aside className="sale-conditions-sidebar">
          <h2 className="sale-conditions-sidebar-title">Contenidos</h2>
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
        <main className="sale-conditions-main-content">
          <h1 className="page-title">Condiciones Generales de Venta de AniBeat</h1>
          <div className="page-meta">
            Última actualización: <strong>16 de febrero de 2026</strong>
            <br />
            URL:{' '}
            <a href="/home" target="_blank" rel="noopener noreferrer">
              https://www.anibeat.com
            </a>
          </div>

          <section id="informacion-general" ref={(el) => (sectionsRef.current['informacion-general'] = el)} className="section">
            <h2>1. Información general</h2>
            <p>
              El sitio web <a href="https://www.anibeat.com" target="_blank" rel="noopener noreferrer">https://www.anibeat.com</a> (en adelante, el “Sitio Web”) es titularidad de AniBeat S.L., con NIF [tu NIF], domicilio social en [tu dirección completa], correo electrónico de contacto [tu email] y teléfono [tu teléfono]. Las presentes condiciones regulan la compra de productos y/o servicios a través del Sitio Web.
            </p>
            <p>
              El acceso, navegación y uso del Sitio Web y la compra de productos implican que el usuario reconoce haber leído, entendido y aceptado estas Condiciones Generales de Venta y demás términos aplicables del Sitio Web.
            </p>
          </section>

          <section id="usuarios" ref={(el) => (sectionsRef.current.usuarios = el)} className="section">
            <h2>2. Usuarios</h2>
            <p>
              El acceso y uso del Sitio Web atribuye la condición de usuario al visitante (en adelante, el “Usuario”). El Usuario declara ser mayor de 18 años y tener la capacidad legal para contratar. El Sitio Web está orientado principalmente a Usuarios residentes en España.
            </p>
          </section>

          <section id="proceso-compra" ref={(el) => (sectionsRef.current['proceso-compra'] = el)} className="section">
            <h2>3. Proceso de compra</h2>
            <p>
              La compra se realiza seleccionando uno o varios productos, añadiéndolos al carrito y completando el formulario de compra conforme se solicita. Antes del pago, el Usuario podrá revisar y modificar los datos de la compra.
            </p>
            <p>
              Tras la finalización del pedido se enviará al Usuario un correo electrónico de confirmación que acredite la recepción del pedido por parte de AniBeat. La aceptación del pedido por parte de AniBeat se producirá con el envío de una confirmación por correo electrónico.
            </p>
          </section>

          <section id="disponibilidad" ref={(el) => (sectionsRef.current.disponibilidad = el)} className="section">
            <h2>4. Disponibilidad</h2>
            <p>
              Los productos ofertados están sujetos a disponibilidad. Si por causas de fuerza mayor o falta de stock no fuese posible servir un pedido, AniBeat se compromete a notificarlo y proceder al reembolso de cualquier importe abonado.
            </p>
          </section>

          <section id="precios-pago" ref={(el) => (sectionsRef.current['precios-pago'] = el)} className="section">
            <h2>5. Precios y pago</h2>
            <p>
              Los precios de los productos están indicados en euros (€) e incluyen los impuestos legalmente aplicables, salvo que se indique lo contrario. Los gastos de envío no están incluidos salvo que se señale expresamente.
            </p>
            <p>
              Los medios de pago aceptados se detallan en el Sitio Web y pueden incluir tarjetas de crédito/débito, transferencias bancarias u otros métodos electrónicos. El pago se realizará de forma segura mediante sistemas de pago con cifrado SSL u otros métodos equivalentes.
            </p>
          </section>

          <section id="desistimiento-devoluciones" ref={(el) => (sectionsRef.current['desistimiento-devoluciones'] = el)} className="section">
            <h2>6. Derecho de desistimiento y devoluciones</h2>
            <p>
              El Usuario, en tanto que consumidor, tiene derecho a desistir del contrato en un plazo de 14 días naturales desde la recepción del producto sin necesidad de justificar su decisión. Para ejercer este derecho, el Usuario deberá notificarlo a AniBeat mediante el formulario de desistimiento o por escrito.
            </p>
            <p>
              Los productos deberán devolverse en su estado original, con sus envoltorios y accesorios, a la dirección que AniBeat indique, sin demoras indebidas y, en todo caso, dentro de los 14 días naturales siguientes a la comunicación del desistimiento. El coste directo de la devolución podrá ser asumido por el Usuario salvo que AniBeat acuerde lo contrario.
            </p>
            <p>
              No procederá el reembolso cuando el producto haya sido usado más allá de lo necesario para comprobar su naturaleza, características o funcionamiento.
            </p>
          </section>

          <section id="garantias" ref={(el) => (sectionsRef.current.garantias = el)} className="section">
            <h2>7. Garantías y productos defectuosos</h2>
            <p>
              Los productos adquiridos cuentan con las garantías legales establecidas en el ordenamiento jurídico español. Si el producto no se ajusta al contrato, el Usuario podrá solicitar la reparación, sustitución, rebaja del precio o resolución del contrato conforme a la legislación vigente.
            </p>
          </section>

          <section id="exoneracion" ref={(el) => (sectionsRef.current.exoneracion = el)} className="section">
            <h2>8. Exoneración de responsabilidad</h2>
            <p>
              AniBeat no será responsable por daños derivados de causas ajenas a su control razonable, como fallos técnicos, falta de disponibilidad de internet, retrasos en transporte por fuerza mayor, ni por el mal uso de los productos por parte del Usuario.
            </p>
          </section>

          <section id="comunicaciones" ref={(el) => (sectionsRef.current.comunicaciones = el)} className="section">
            <h2>9. Comunicaciones y notificaciones</h2>
            <p>
              El Usuario acepta que las comunicaciones con AniBeat se realicen por medios electrónicos, incluidos correos electrónicos o avisos en el Sitio Web, considerándose válidas a efectos legales.
            </p>
          </section>

          <section id="proteccion-datos" ref={(el) => (sectionsRef.current['proteccion-datos'] = el)} className="section">
            <h2>10. Protección de datos</h2>
            <p>
              Los datos personales facilitados por el Usuario serán tratados conforme a la Política de Privacidad y protección de datos del Sitio Web y de acuerdo con el Reglamento (UE) 2016/679 (RGPD) y demás normativa aplicable.
            </p>
          </section>

          <section id="ley-jurisdiccion" ref={(el) => (sectionsRef.current['ley-jurisdiccion'] = el)} className="section">
            <h2>11. Ley aplicable y jurisdicción</h2>
            <p>
              Estas Condiciones Generales se regirán por la legislación española. Para cualquier controversia derivada de la interpretación o cumplimiento de las presentes, ambas partes se someten a los Juzgados y Tribunales del domicilio del Usuario, siempre que éste sea consumidor.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SaleConditions;