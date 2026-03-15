import "./Rss.css"
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"

function RSS() {
    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="rss-page">
                <h1>Feed RSS del proyecto</h1>
                <p>
                    En esta página puedes acceder a los canales RSS de AniBeat y suscribirte fácilmente para recibir nuestras últimas publicaciones, noticias y contenidos directamente en tu lector de RSS o aplicación de noticias.
                </p>
                <p>
                    Gracias a la tecnología RSS (Really Simple Syndication), podrás mantenerte informado automáticamente cada vez que publiquemos nuevo contenido en la web, sin necesidad de visitarla constantemente.
                </p>
                <p>
                    Los feeds RSS distribuyen los titulares y resúmenes de nuestras publicaciones en formato XML, permitiendo que lectores de noticias, navegadores o aplicaciones especializadas muestren las actualizaciones en un único lugar.
                </p>
                <p>
                    Puedes suscribirte a las noticias del proyecto usando el siguiente enlace:
                </p>
                <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
                    Ver RSS
                </a>
            </div>
            <Footer />
        </>
    );
}

export default RSS;