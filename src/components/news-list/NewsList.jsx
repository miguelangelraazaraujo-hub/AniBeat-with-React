import React from 'react';
import './NewsList.css';
import news from '../../data/news.json';

function NewsList() {
    return (
        <div className="news-list">
            {news.map((item) => (
                <div key={item.id} className="news-item">
                    <a href={`/news/${item.id}`} className="news-image">
                        <div
                            className="news-image"
                            style={{ backgroundImage: `url(${item.image})` }}
                            role="img"
                            aria-label={item.title}
                        />
                    </a>
                    <div className="news-content">
                        {/* Fecha */}
                        <div className="news-date-block">
                            <span className="news-day">{new Date(item.date).getDate()}</span>
                            <span className="news-month-year">
                                {new Date(item.date).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                            </span>
                        </div>

                        {/* Título y Descripción*/}
                        <div className='news-post-right'>
                            {/* Título */}
                            <a href={`/news/${item.id}`} className="news-title">{item.title}</a>

                            {/* Descripción */}
                            <div className='news-description-container'>
                                <p className="news-description">{item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;