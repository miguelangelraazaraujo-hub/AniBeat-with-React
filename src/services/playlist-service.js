import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const COLLECTION = "playlists";

export const getPlaylists = async () => {
    const snapshot = await getDocs(collection(db, COLLECTION));
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const addPlaylist = async (playlist) => {
    return await addDoc(collection(db, COLLECTION), playlist);
};