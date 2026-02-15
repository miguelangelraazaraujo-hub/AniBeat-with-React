import { useParams, Link } from "react-router-dom";
import { newsData } from "../../data/news-data";

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

    return (
        <div className="news-detail-container">
            <h1>{newsItem.title}</h1>
            <p>{newsItem.date}</p>
            <div>
                <p>{newsItem.content}</p>
            </div>

            <Link to="/news">
                ← Volver a noticias
            </Link>
        </div>
    );
}

export default NewsDetail;