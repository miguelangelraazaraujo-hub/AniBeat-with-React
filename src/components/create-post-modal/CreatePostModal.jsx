import "./../../pages/forum/Forum.css"

function CreatePostModal({
    isOpen,
    onClose,
    newPost,
    setNewPost,
    onCreate,
    onUpdate,
    editingPost
}) {

    if (!isOpen) return null;

    return (
        <div className="forum-modal-overlay">

            <div className="modal-container">

                <button className="modal-close" onClick={onClose}>
                    ×
                </button>

                <h3>
                    {editingPost ? "Editar Post" : "Crear Post"}
                </h3>

                <form
                    className="forum-form"
                    onSubmit={(e) => {
                        if (editingPost) {
                            onUpdate(e);
                        } else {
                            onCreate(e);
                        }
                    }}
                >

                    <input
                        type="text"
                        placeholder="Título"
                        required
                        value={newPost.title}
                        onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                        }
                    />

                    <textarea
                        rows="4"
                        placeholder="Contenido"
                        required
                        value={newPost.content}
                        onChange={(e) =>
                            setNewPost({ ...newPost, content: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Autor"
                        value={newPost.author}
                        onChange={(e) =>
                            setNewPost({ ...newPost, author: e.target.value })
                        }
                    />

                    <input
                        type="text"
                        placeholder="URL imagen"
                        value={newPost.img}
                        onChange={(e) =>
                            setNewPost({ ...newPost, img: e.target.value })
                        }
                    />

                    <select
                        required
                        value={newPost.category}
                        onChange={(e) =>
                            setNewPost({ ...newPost, category: e.target.value })
                        }
                    >
                        <option value="anime">Anime</option>
                        <option value="música">Música</option>
                        <option value="comunidad">Comunidad</option>
                        <option value="eventos">Eventos</option>
                    </select>

                    <button type="submit">
                        {editingPost ? "Actualizar Post" : "Crear Post"}
                    </button>

                </form>

            </div>
        </div>
    );
}

export default CreatePostModal;