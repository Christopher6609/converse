import Categories from "../../components/molecules/Categories";
import { useContext } from "react";
import { UserContext } from "../../components/context/UserContext";

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        <div className="px-[1rem] flex flex-col h-[8rem]">
          <h1 className="text-[3rem]">welcome</h1>
          <p className="">{currentUser.email}!</p>
        </div>
      ) : (
        null
      )}
      <Categories categories={categories} />
    </>
  );
};

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

export default Home;
