import {
    collection,
    addDoc,
    updateDoc,
    doc,
    getDoc
} from "firebase/firestore";

import { db } from "../firebase";

export const createPlaylist = async (name) => {
    if (!name?.trim()) return;

    return await addDoc(collection(db, "playlists"), {
        name: name.trim(),
        songs: [],
        createdAt: new Date()
    });
};

export const addOrUpdateSongInPlaylist = async (playlistId, song) => {
    if (!playlistId || !song?.id) {
        console.error("playlistId o song.id inválido");
        return;
    }

    try {
        const ref = doc(db, "playlists", playlistId);
        const snapshot = await getDoc(ref);

        if (!snapshot.exists()) {
            console.error("La playlist no existe");
            return;
        }

        const data = snapshot.data();
        const currentSongs = Array.isArray(data.songs)
            ? data.songs
            : [];

        const index = currentSongs.findIndex(
            (s) => s.id === song.id
        );

        let updatedSongs;

        if (index !== -1) {
            updatedSongs = [...currentSongs];
            updatedSongs[index] = {
                ...updatedSongs[index],
                ...song
            };
        } else {
            updatedSongs = [...currentSongs, song];
        }

        await updateDoc(ref, {
            songs: updatedSongs
        });

    } catch (error) {
        console.error("Error añadiendo/actualizando canción:", error);
    }
};