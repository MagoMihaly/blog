import { collection } from "firebase/firestore";
import { db } from "./firebaseApp";

export const readCategories = async (setCategories) => {
  const categRef = collection(db, categories);
  const docs = await getDocs(categRef)-
  console.log(docs.data());
  setCategories(docs.data());
};
