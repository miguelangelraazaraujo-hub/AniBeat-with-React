import "./Home.css"
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import NewsList from '../../components/news-list/NewsList';
import SidebarItems from '../../components/sidebar-items/SidebarItems';
import dailyChallenge from '../../data/daily-challege.js';
import newBeatmaps from '../../data/new-songs.js';
import popularBeatmaps from '../../data/popular-songs.js';
import { useTranslation } from 'react-i18next';

function Home() {
    const navigate = useNavigate();

    const handClick = () => {
        navigate("/Contact");
    }

    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/data/news.json')
            .then(res => res.json())
            .then(data => setNews(data));
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <HeaderMobile />
            <p>{t('welcome-message')}</p>
            <button onClick={handClick}>{t('go-to-contacts')}</button>
            <div className="home-page">
                {/* Columna principal */}
                <main className="home-main">
                    <section className="home-section">
                        <h2 className="section-title">{t('Novedades')}</h2>
                        <NewsList news={news} />
                    </section>
                </main>

                {/* Columna lateral derecha */}
                <aside className="home-sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">{t('cancion-desafio-diario')}</h3>
                        <SidebarItems item={dailyChallenge} />
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">{t('nuevas-canciones-clasificadas')}</h3>
                        <div className="sidebar-item-list">
                            {newBeatmaps.map(item => (
                                <SidebarItems key={item.id} item={item} />
                            ))}
                            <a href="">
                                {t('ver-mas')}
                            </a>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">{t('canciones-populares')}</h3>
                        <div className="sidebar-item-list">
                            {popularBeatmaps.map(item => (
                                <SidebarItems key={item.id} item={item} />
                            ))}
                            <a href="">
                                {t('ver-mas')}
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
            <Footer />
        </>
    );
}

export default Home