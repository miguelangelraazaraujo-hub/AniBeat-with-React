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