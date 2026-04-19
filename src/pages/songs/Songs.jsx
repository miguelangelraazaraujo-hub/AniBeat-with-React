import "./Songs.css";
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import { createPlaylist, addOrUpdateSongInPlaylist } from "../../services/playlist-service";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

function Songs() {
    const [songs, setSongs] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const unsubscribeSongs = onSnapshot(
            collection(db, "songs"),
            (snapshot) => {
                const songsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSongs(songsData);
            }
        );

        const unsubscribePlaylists = onSnapshot(
            collection(db, "playlists"),
            (snapshot) => {
                const playlistsData = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPlaylists(playlistsData);
            }
        );

        return () => {
            unsubscribeSongs();
            unsubscribePlaylists();
        };
    }, []);

    const handleCreatePlaylist = async () => {
        if (!playlistName) return;

        await createPlaylist(playlistName);
        setPlaylistName("");
    };

    const handleAddSong = async (song, playlistId) => {
        console.log("PLAYLIST ID:", playlistId);
        console.log("SONG:", song);

        if (!playlistId) return;

        try {
            const cleanSong = Object.fromEntries(
                Object.entries(song).filter(([_, v]) => v !== undefined)
            );
            await addOrUpdateSongInPlaylist(playlistId, cleanSong);
        } catch (error) {
            console.error("Error añadiendo canción:", error);
        }
    };

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="songs-page">

                <h2>Canciones</h2>

                {/* Lista de canciones */}
                <div className="songs-grid">
                    {songs.map(song => (
                        <div key={song.id} className="song-card">
                            <div className="song-image-wrapper">
                                <img src={song.img} alt={song.title} />
                            </div>

                            <div className="song-info">
                                <h3>{song.title}</h3>
                                <p>{song.artist}</p>
                            </div>

                            <select
                                className="song-select"
                                defaultValue=""
                                onChange={(e) => {
                                    const playlistId = e.target.value;
                                    if (!playlistId) return;

                                    addSongToPlaylist(playlistId, song);
                                }}
                            >
                                <option value="">Añadir a playlist</option>
                                {playlists.map(pl => (
                                    <option key={pl.id} value={pl.id}>
                                        {pl.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    ))}
                </div>

                {/* Playlists */}
                <h2>Playlists</h2>

                {/* Crear playlist */}
                <button
                    className="create-playlist-btn"
                    onClick={() => setIsModalOpen(true)}
                >
                    Crear Playlist
                </button>

                <div className="playlist-grid">
                    {playlists.map(pl => (
                        <div key={pl.id} className="playlist-card">
                            <h3>{pl.name}</h3>

                            <div className="playlist-songs">
                                {pl.songs && pl.songs.length > 0 ? (
                                    pl.songs.map((song) => (
                                        <div key={song.id} className="playlist-song-row">

                                            {/* Imagen */}
                                            <img
                                                src={song.img}
                                                alt={song.title}
                                                className="playlist-song-img"
                                            />

                                            {/* Info */}
                                            <div className="playlist-song-info">
                                                <span className="playlist-song-title">
                                                    {song.title}
                                                </span>
                                                <span className="playlist-song-autor">
                                                    {song.autor}
                                                </span>
                                            </div>

                                            {/* Duración */}
                                            <span className="playlist-song-duration">
                                                {song.duration}
                                            </span>

                                        </div>
                                    ))
                                ) : (
                                    <p>No hay canciones añadidas</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
            {isModalOpen && (
                <div className="songs-modal-overlay">
                    <div className="songs-modal">

                        <button
                            className="modal-close"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>

                        <h3>Crear Playlist</h3>

                        <input
                            type="text"
                            placeholder="Nombre playlist"
                            value={playlistName}
                            onChange={(e) => setPlaylistName(e.target.value)}
                        />

                        <button
                            onClick={() => {
                                handleCreatePlaylist();
                                setIsModalOpen(false);
                            }}
                        >
                            Crear
                        </button>

                    </div>
                </div>
            )}
        </>
    );
}

export default Songs;