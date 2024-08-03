import { Fragment } from 'react';

import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/molecules/ category-preview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
///import { CategoriesContext } from '../../components/context/CategoriesContext';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    //const {categoriesMap} = useContext(CategoriesContext);

    return (
        <Fragment>
            {
            Object.keys(categoriesMap).map((title)=> {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products}/>
                    )
            })
        }
        </Fragment>
        
    )
}

export default CategoriesPreview;