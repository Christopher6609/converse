import { useContext } from 'react';
import ProductCard from '../../components/molecules/productCard/ProductCard';
import { ProductsContext } from '../../components/context/ProductContext';

const Shop = () => {
    
    const {products} = useContext(ProductsContext);

    return (
        <div className=" grid grid-cols-4 gap-x-[10px] gap-y-[50px] ">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;