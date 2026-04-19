import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const getSongs = async () => {
  const snapshot = await getDocs(collection(db, "songs"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};