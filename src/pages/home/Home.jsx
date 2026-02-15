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

    return (
        <>
            <Header />
            <HeaderMobile />
            <p>Welcome page to the project AniBeat</p>
            <button onClick={handClick}>Go to Contacts</button>
            <div className="home-page">
                {/* Columna principal */}
                <main className="home-main">
                    <section className="home-section">
                        <h2 className="section-title">Novedades</h2>
                        <NewsList news={news} />
                    </section>
                </main>

                {/* Columna lateral derecha */}
                <aside className="home-sidebar">
                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Canción del desafío diario</h3>
                        <SidebarItems item={dailyChallenge} />
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Nuevas canciones clasificadas</h3>
                        <div className="sidebar-item-list">
                            {newBeatmaps.map(item => (
                                <SidebarItems key={item.id} item={item} />
                            ))}
                            <a href="">
                                ver más
                            </a>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h3 className="sidebar-title">Canciones populares</h3>
                        <div className="sidebar-item-list">
                            {popularBeatmaps.map(item => (
                                <SidebarItems key={item.id} item={item} />
                            ))}
                            <a href="">
                                ver más
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