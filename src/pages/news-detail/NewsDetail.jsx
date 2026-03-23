import { useParams, Link } from "react-router-dom";
import { newsData } from "../../data/news-data";
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"

import { useState, useMemo } from "react";
import { useTranslation } from 'react-i18next';

function NewsDetail() {
    const { id } = useParams();

    const newsItem = newsData.find(
        (news) => news.id === parseInt(id)
    );

    if (!newsItem) {
        return (
            <div className="news-detail-container">
                <h2>Noticia no encontrada</h2>
                <Link to="/news">Volver a noticias</Link>
            </div>
        );
    }

    const getYear = (date) => new Date(date).getFullYear();
    const getMonth = (date) => new Date(date).getMonth();

    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const years = [...new Set(newsData.map((n) => getYear(n.date)))]
        .sort((a, b) => b - a);

    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [openMonths, setOpenMonths] = useState({});

    const filteredNews = useMemo(() => {
        return newsData
            .filter((n) => getYear(n.date) === selectedYear)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [selectedYear]);

    const newsByMonth = useMemo(() => {
        const grouped = {};

        monthNames.forEach((_, index) => {
            grouped[index] = [];
        });

        filteredNews.forEach((news) => {
            const month = getMonth(news.date);
            grouped[month].push(news);
        });

        return grouped;
    }, [filteredNews]);

    const toggleMonth = (monthIndex) => {
        setOpenMonths((prev) => ({
            ...prev,
            [monthIndex]: !prev[monthIndex],
        }));
    };

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="news-detail-container">
                <aside className="news-sidebar">
                    <h2 className="sidebar-title">{t('Años')}</h2>

                    <div className="year-selector">
                        {years.map((year) => (
                            <button
                                key={year}
                                className={`year-button ${selectedYear === year ? "active" : ""
                                    }`}
                                onClick={() => {
                                    setSelectedYear(year);
                                    setOpenMonths({});
                                }}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <h2 className="sidebar-title">{t('Meses')}</h2>
                    <div className="months-section">
                        {monthNames.map((monthName, index) => (
                            <div key={index} className="month-item">
                                <button
                                    className="month-button"
                                    onClick={() => toggleMonth(index)}
                                >
                                    {monthName}
                                </button>

                                {openMonths[index] && (
                                    <div className="month-news-list">
                                        {newsByMonth[index].length > 0 ? (
                                            newsByMonth[index].map((news) => (
                                                <Link
                                                    key={news.id}
                                                    to={`/news/${news.id}`}
                                                    className="month-news-link"
                                                >
                                                    {news.title}
                                                </Link>
                                            ))
                                        ) : (
                                            <p className="no-news">Sin noticias</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </aside>
                <main className="news-content">
                    <div className="new-detail-container">
                        <h1>{newsItem.title}</h1>
                        <p>{newsItem.date}</p>
                        <div>
                            <p>{newsItem.content}</p>
                        </div>

                        <Link to="/news">
                            ← Volver a noticias
                        </Link>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default NewsDetail;