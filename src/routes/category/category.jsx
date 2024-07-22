import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../components/context/CategoriesContext";

import { useParams } from "react-router-dom";
import ProductCard from "../../components/molecules/productCard/ProductCard";

const Category = () => {
    const { categoriesMap} = useContext(CategoriesContext);
    const { category } = useParams();
    const [products, setProducts ] = useState(categoriesMap[category]);

    useEffect(()=> {
        setProducts(categoriesMap[category]);
    },[category, categoriesMap ])

    return(

        <div className="grid grid-cols-4 gap-y-[20px] gap-x-[50px]">
            {products && products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Category;