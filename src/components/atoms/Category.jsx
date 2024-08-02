import PropTypes from 'prop-types';

import { useNavigate } from "react-router-dom";

const Category = ({category}) => {
    const { title, imageUrl, route } = category;

    const navigate = useNavigate();
    const navigationHandler = () => navigate(route);
    return (
        
       <>
        <div onClick={navigationHandler} className="category-container min-w-[30%] h-[240px] flex-1 flex items-center justify-center border-[1px] border-[#000] overflow-hidden hover:cursor-pointer">
            <div className="background-image w-[100%] h-[100%] bg-cover bg-center hover:scale-[1.1] hover:transition-all " style={{backgroundImage:`url(${imageUrl})`}}/>
              <div className="category-body-container absolute h-[90px] flex-col flex px-[25px] items-center justify-center border-[1px] border-[#000] bg-[#FFF] opacity-[0.7]">
                <h1 className="font-bold text-[22px] text-[#4a4a4a] font-[opensans] uppercase">{title}</h1>
                <p className=" font-extralight text-[16px] uppercase ">Shop Now</p>
              </div>

          </div>
       </>
    )
}
Category.propTypes = {
  category:PropTypes.shape({
    title:PropTypes.string,
  imageUrl:PropTypes.string,
  route: PropTypes.string,
  })
}

export default Category;