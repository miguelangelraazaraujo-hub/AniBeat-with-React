import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export const createPlaylist = async (name) => {
    return await addDoc(collection(db, "playlists"), {
        name,
        songs: [],
        createdAt: new Date()
    });
};

export const addOrUpdateSongInPlaylist = async (playlistId, song) => {
    try {
        const ref = doc(db, "playlists", playlistId);

        const snapshot = await getDoc(ref);
        const data = snapshot.data();

        const currentSongs = data.songs || [];

        const index = currentSongs.findIndex(s => s.id === song.id);

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
