import { useContext, useState, useEffect, Fragment } from "react";
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

        <div>
            <h2 className="text-[3rem] ">{category.toUpperCase()}</h2>
             <div className="grid grid-cols-4 gap-y-[20px] gap-x-[50px]">
            {products && products.map((product)=>(
                <Fragment>
                     <ProductCard key={product.id} product={product}/>
                </Fragment>
                
            ))}
        </div>
        </div>
       
    )
}

export default Category;