import React from 'react';
import './NewsList.css';
import news from '../../data/news.json';
import { useTranslation } from 'react-i18next';


function NewsList() {

    const { t } = useTranslation();

    return (
        <div className="news-list-component">
            {news.map((item) => (
                <div key={item.id} className="news-list-item">
                    <a href={`/news/${item.id}`} className="news-list-image">
                        <div
                            className="news-list-image"
                            style={{ backgroundImage: `url(${item.image})` }}
                            role="img"
                            aria-label={item.title}
                        />
                    </a>
                    <div className="news-list-content">
                        {/* Fecha */}
                        <div className="news-list-date-block">
                            <span className="news-list-day">{new Date(item.date).getDate()}</span>
                            <span className="news-list-month-year">
                                {new Date(item.date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                            </span>
                        </div>

                        {/* Título y Descripción*/}
                        <div className='news-list-post-right'>
                            {/* Título */}
                            <a href={`/news/${item.id}`} className="news-list-title">{t(item.title)}</a>

                            {/* Descripción */}
                            <div className='news-list-description-container'>
                                <p className="news-list-description">{t(item.description)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;