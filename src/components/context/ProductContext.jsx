import { createContext, useState } from "react";
import shopData from '../../shopData.json'

export const ProductsContext = createContext({
    products:[],
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(shopData);
    const value = {products};

    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}