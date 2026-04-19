import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { readFile, importFromCSV, importFromJSON, importFromXML } from "./import-export-service";

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

export const handleImport = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await readFile(file);

    let parsed;

    if (file.name.endsWith(".json")) {
        parsed = importFromJSON(text);
    } else if (file.name.endsWith(".csv")) {
        parsed = importFromCSV(text);
    } else if (file.name.endsWith(".xml")) {
        parsed = importFromXML(text);
    }

    if (!parsed?.songs) {
        alert("Formato inválido");
        return;
    }

    const isValid = parsed.songs.every(s => s.title && s.autor);

    if (!isValid) {
        alert("Datos incorrectos");
        return;
    }

    try {
        const ref = await createPlaylist(parsed.name);

        await updateDoc(doc(db, "playlists", ref.id), {
            songs: parsed.songs
        });

    } catch (error) {
        console.error("Error importando:", error);
    }
};
