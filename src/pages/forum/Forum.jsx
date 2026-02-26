import "./Forum.css"
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useTranslation } from 'react-i18next';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, "forum"));
            const data = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post => {
        const matchesCategory =
            selectedCategory === "all" || post.category === selectedCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchText.toLowerCase()) ||
            post.content.toLowerCase().includes(searchText.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="forum-page">
                <h2>foro</h2>

                <div className="filters">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">Todas</option>
                        <option value="anime">Anime</option>
                        <option value="musica">Música</option>
                        <option value="comunidad">Comunidad</option>
                        <option value="eventos">Eventos</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <div className="forum-grid">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="forum-card">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <span>{post.category}</span>
                        </div>
                    ))}
                    {filteredPosts.length === 0 && <p>No se encontraron resultados</p>}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Forum;