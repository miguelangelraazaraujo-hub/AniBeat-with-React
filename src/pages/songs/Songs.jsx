import "./Songs.css";
import Header from "../../components/header/Header"
import HeaderMobile from "../../components/header-mobile/HeaderMobile"
import Footer from "../../components/footer/Footer"
import { useEffect, useState } from "react";
import { createPlaylist, addOrUpdateSongInPlaylist } from "../../services/playlist-service";
import { doc, updateDoc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";
import {
    exportToJSON,
    exportToCSV,
    exportToXML,
    exportToXLSX,
    exportToODS,
    handleImport
} from "../../services/import-export-service";

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

        if (!playlistId) return;

        try {
            const cleanSong = {
                id: song.id,
                title: song.title,
                autor: song.autor,
                duration: song.duration,
                img: song.img,
                album: song.album,
                genre: song.genre
            };
            console.log(cleanSong);
            await addOrUpdateSongInPlaylist(playlistId, cleanSong);
        } catch (error) {
            console.error("Error añadiendo canción:", error);
        }
    };

    const onImportFile = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const playlist = await handleImport(file);

        if (!playlist || !playlist.songs) {
            alert("Archivo inválido");
            return;
        }

        const isValid =
            Array.isArray(playlist.songs) &&
            playlist.songs.every(s => s.title && s.autor);

        if (!isValid) {
            alert("Datos incorrectos");
            return;
        }

        await createPlaylist(playlist.name);

    };

    return (
        <>
            <Header />
            <HeaderMobile />
            <div className="songs-page">

                <h2>Canciones</h2>

                <div className="songs-grid">
                    {songs.map(song => (
                        <div key={song.id} className="song-card">
                            <div className="song-image-wrapper">
                                <img src={song.img} alt={song.title} />
                            </div>

                            <div className="song-info">
                                <h3>{song.title}</h3>
                                <p>{song.autor}</p>
                            </div>

                            <select
                                className="song-select"
                                defaultValue=""
                                onChange={(e) => {
                                    const playlistId = e.target.value;
                                    if (!playlistId) return;

                                    handleAddSong(song, playlistId);

                                    e.target.value = "";
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

                <h2>Playlists</h2>
                <div className="playlists-actions">
                    <button
                        className="create-playlist-btn"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Crear Playlist
                    </button>

                    <input
                        className="import-input"
                        type="file"
                        accept=".json,.csv,.xml,.xlsx,.ods"
                        onChange={onImportFile}
                    />
                </div>

                <div className="playlist-grid">
                    {playlists.map(pl => (
                        <div key={pl.id} className="playlist-card">
                            <h3>{pl.name}</h3>
                            <div className="playlist-actions">
                                <button className="playlist-action-btn" onClick={() => exportToJSON(pl)}>JSON</button>
                                <button className="playlist-action-btn" onClick={() => exportToCSV(pl)}>CSV</button>
                                <button className="playlist-action-btn" onClick={() => exportToXML(pl)}>XML</button>
                                <button className="playlist-action-btn" onClick={() => exportToXLSX(pl)}>XLSX</button>
                                <button className="playlist-action-btn" onClick={() => exportToODS(pl)}>ODS</button>
                            </div>

                            <div className="playlist-songs">
                                {pl.songs && pl.songs.length > 0 ? (
                                    pl.songs.map((song) => (
                                        <div key={song.id} className="playlist-song-row">

                                            <img
                                                src={song.img}
                                                alt={song.title}
                                                className="playlist-song-img"
                                            />

                                            <div className="playlist-song-info">
                                                <span className="playlist-song-title">
                                                    {song.title}
                                                </span>
                                                <span className="playlist-song-autor">
                                                    {song.autor}
                                                </span>
                                            </div>

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