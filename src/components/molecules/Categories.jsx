import PropTypes from "prop-types";

import Category from "../atoms/Category";

const Categories = ({ categories }) => {
  return (
    <>
      <div className="categories-container w-[100%] flex flex-wrap justify-between px-[1rem] gap-[15px]">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      route: PropTypes.string,
    })
  ),
};
export default Categories;
