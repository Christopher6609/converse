import Category from "../atoms/Category";

const Categories = ({categories}) => {
    return(
        <>
            <div className="categories-container w-[100%] flex flex-wrap justify-between px-[1rem] gap-[15px]">
                 {categories.map((category) => (
                     <Category key={category.id} category={category}/>
                ))}
      </div>
        </>
    )
}
export default Categories;