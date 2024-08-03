import {  useState, useEffect, Fragment } from "react";
//import { CategoriesContext } from "../../components/context/CategoriesContext";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/molecules/productCard/ProductCard";

const Category = () => {
   // const { categoriesMap} = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap)
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
                <Fragment key={product.id}>
                     <ProductCard  product={product}/>
                </Fragment>
                
            ))}
        </div>
        </div>
       
    )   
}

export default Category;