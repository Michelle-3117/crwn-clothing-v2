import { createContext, useState, useEffect} from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/Firebase';

export const CategoriesContext = createContext({
    categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoriesMap)
        }
        getCategoriesMap()
    }, [])
    const value = { categoriesMap };
    
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChangedListener((product) => {
    //         if (product) {
    //             createUserDocumentFromAuth(product)
    //         }
    //         setCurrentProduct(product)
    //     });
    //     return unsubscribe
    // }, []);

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}