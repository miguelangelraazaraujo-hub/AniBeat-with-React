import "./Forum.css"
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import { serverTimestamp } from "firebase/firestore";
import CreatePostModal from "../../components/create-post-modal/CreatePostModal";
import { useTranslation } from 'react-i18next';

function Forum() {
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchText, setSearchText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        category: "anime",
        author: "",
        img: ""
    });

    const fetchPosts = async () => {
        const q = query(
            collection(db, "forum"),
            orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setPosts(data);
    };

    const handleCreatePost = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "forum"), {
                title: newPost.title,
                content: newPost.content,
                category: newPost.category,
                author: newPost.author,
                img: newPost.img,
                createdAt: serverTimestamp()
            });

            const createdPost = {
                id: docRef.id,
                ...newPost
            };

            setPosts([createdPost, ...posts]);

            setNewPost({
                title: "",
                content: "",
                category: "anime",
                author: "",
                img: ""
            });

            setIsModalOpen(false);

        } catch (error) {
            console.error("Error creando el post:", error);
        }
    };

    const handleDeletePost = async (id) => {
        await deleteDoc(doc(db, "forum", id));
        fetchPosts();
    };

    const handleUpdatePost = async (e) => {
        e.preventDefault();

        try {

            const postRef = doc(db, "forum", editingPost.id);

            await updateDoc(postRef, {
                title: newPost.title,
                content: newPost.content,
                category: newPost.category,
                author: newPost.author,
                img: newPost.img
            });

            setPosts(posts.map(post =>
                post.id === editingPost.id ? { ...post, ...newPost } : post
            ));

            setEditingPost(null);
            setIsModalOpen(false);

        } catch (error) {
            console.error("Error actualizando post:", error);
        }
    };

    useEffect(() => {
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

    const formatDate = (timestamp) => {

        if (!timestamp) return "";

        const date = timestamp.toDate();

        return date.toLocaleDateString("es-ES", {
            day: "numeric",
            month: "short",
            year: "numeric"
        });
    };

    const timeAgo = (timestamp) => {
        if (!timestamp) return "";

        const now = new Date();
        const postDate = timestamp.toDate(); // convertir Firestore timestamp a Date
        const seconds = Math.floor((now - postDate) / 1000);

        if (seconds < 60) return `${seconds} segundos`;
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes} minutos`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours} horas`;
        const days = Math.floor(hours / 24);
        if (days < 30) return `${days} días`;
        const months = Math.floor(days / 30);
        if (months < 12) return `${months} meses`;
        const years = Math.floor(months / 12);
        return `${years} años`;
    };

    const { t } = useTranslation();

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="forum-page">
                <h2>{t('foro')}</h2>

                <div className="filters">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">Todas</option>
                        <option value="anime">Anime</option>
                        <option value="música">Música</option>
                        <option value="comunidad">Comunidad</option>
                        <option value="eventos">Eventos</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="create-post-btn" onClick={() => {
                        setEditingPost(null);
                        setNewPost({
                            title: "",
                            content: "",
                            category: "anime",
                            author: "",
                            img: ""
                        });
                        setIsModalOpen(true);
                    }}>
                        Crear Post
                    </button>
                </div>

                <div className="forum-grid">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="forum-card">
                            <div className="forum-content">

                                {post.img && (
                                    <img src={post.img} alt={post.title} className="forum-image" />
                                )}
                                <h3>{post.title}</h3>
                                <small className="forum-date">
                                    hace {timeAgo(post.createdAt)}
                                </small>
                                <p>{post.content}</p>
                                <span>{post.category}</span>
                            </div>
                            <div className="forum-actions">

                                <button onClick={() => {
                                    setEditingPost(post);
                                    setNewPost(post);
                                    setIsModalOpen(true);
                                }}>
                                    Editar
                                </button>

                                <button onClick={() => handleDeletePost(post.id)}>
                                    Borrar
                                </button>

                            </div>
                        </div>
                    ))}
                    {filteredPosts.length === 0 && <p>No se encontraron resultados</p>}
                </div>
            </div>
            <CreatePostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                newPost={newPost}
                setNewPost={setNewPost}
                onCreate={handleCreatePost}
                onUpdate={handleUpdatePost}
                editingPost={editingPost}
            />
            <Footer />
        </>
    );
}

export default Forum;