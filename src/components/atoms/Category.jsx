const Category = ({category}) => {
    const { title, imageUrl } = category;
    return (
        
       <>
        <div className="category-container min-w-[30%] h-[240px] flex items-center justify-center border-[1px] border-[#000] overflow-hidden hover:cursor-pointer  ">
            <div className="background-image w-[100%] h-[100%] bg-cover bg-center hover:scale-[1.1] hover:transition-all " style={{backgroundImage:`url(${imageUrl})`}}/>
              <div className="category-body-container absolute h-[90px] flex-col flex px-[25px] items-center justify-center border-[1px] border-[#000] bg-[#FFF] opacity-[0.7]">
                <h1 className="font-bold text-[22px] text-[#4a4a4a]">{title}</h1>
                <p className=" font-extralight text-[16px] ">Shop Now</p>
              </div>

          </div>
       </>
    )
}

export default Category;