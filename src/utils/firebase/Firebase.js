import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}
from 'firebase/auth'
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
    writeBatch,
    getDocs,
    query
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQGkszGgpbcVHJrV7raxXQ9jIXxV9_wmM",
  authDomain: "crown-clothingdb-9ea82.firebaseapp.com",
  projectId: "crown-clothingdb-9ea82",
  storageBucket: "crown-clothingdb-9ea82.appspot.com",
  messagingSenderId: "213781742750",
  appId: "1:213781742750:web:35f7b19ac47cca2152678f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    })
    await batch.commit();
    console.log('done successfully')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories')

    const q = query(collectionRef);
    const querySnapShot = await getDocs(q)
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
        const {title, items} = docSnapShot.data()

        acc[title.toLowerCase()] = items;
        return acc
    }, {})
    return categoryMap
}
export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
              displayName,
              email,
              createdAt,
              ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;

    
}
export const createAuthForEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
        return await createUserWithEmailAndPassword(auth, email, password);
    
}

export const signinAuthForEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
        return await signInWithEmailAndPassword(auth, email, password);
    
}
export const signOutUser = async () => {
      await signOut(auth)
}
export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth, callback)
}