import ProductCard from "../productCard/ProductCard";
import PropTypes from 'prop-types';


const CategoryPreview = ({title, products}) => {
    return(
        <div className="flex flex-col mb-[30px]">
            <h2>
                <span className="text-[28px] mb-[25px] cursor-pointer">{title.toUpperCase()}</span>
            </h2>
                <div className="grid grid-cols-4 gap-[20px]">
                { products.filter(( _ , idx )=> idx < 4).map((product) => 
                    <ProductCard key={product.id} product={product} />
                )}
            </div>
            
        </div>
    )
}
CategoryPreview.propTypes = {
    title:PropTypes.string,
    products:PropTypes.arrayOf(
        PropTypes.shape({
            name:PropTypes.string,
            price:PropTypes.number,
            imageUrl: PropTypes.string,
        })
    )
}
export default CategoryPreview;