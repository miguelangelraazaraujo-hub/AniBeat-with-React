import './News.css'
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../../data/news-data";

const myArray = ['Apple', 'Banana', 'Cherry'];

export default function News() {

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

    return (
        <>
            <Header />
            <HeaderMobile />
            {myArray.map((item, index) => { return <p key={index}>{item}</p> })}
            <div className="news-page">
                <div className="news-section-page">
                    <div className="news-container">
                        <aside className="news-sidebar">
                            <h2 className="sidebar-title">Años</h2>

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
                            <h1 className="news-year-title">
                                Noticias de {selectedYear}
                            </h1>

                            <div className="news-list">
                                {filteredNews.map((news) => (
                                    <div key={news.id} className="news-card">
                                        <h3 className="news-card-title">{news.title}</h3>
                                        <p className="news-card-date">{news.date}</p>
                                        <p className="news-card-excerpt">{news.excerpt}</p>
                                        <Link to={`/news/${news.id}`} className="news-read-more">
                                            Leer más
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}