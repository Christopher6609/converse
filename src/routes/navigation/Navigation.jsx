import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
//import  { ReactComponent as Logo } from "../../assets/crown.svg";
//import { UserContext } from "../../components/context/UserContext";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signUserOut } from "../../utils/firebase/firebase";
import CartIcon from "../../components/atoms/cart-icon/CartIcon";
import CartDropdown from "../../components/molecules/cart-dropdown/CartDropdown";
import { CartContext } from "../../components/context/CartContext";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);
  //const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className="navigation w-[100%] h-[70px] flex justify-between mb-[25px] ">
        <div className="flex items-center ">
          <Link className="logo-container h-fit w-fit p-[25px]" to="/">
            <h2 className="text-[3rem] font-bold">Converse <sup className="text-[1rem]">TM</sup></h2>
          </Link>
        </div>
        <div className="nav-links-container w-[50%] h-[100%] flex items-center justify-end">
          <Link
            className="nav-link uppercase px-[15px] py-[10px] cursor-pointer"
            to="/shop"
          >
            Shop
          </Link>
          <Link
            className="nav-link uppercase px-[15px] py-[10px] cursor-pointer"
            to="/shop"
          >
            Contact
          </Link>
          {currentUser ? (
            <span
              className="nav-link uppercase px-[15px] py-[10px] cursor-pointer"
              onClick={signUserOut}
            >
              SIGN OUT
            </span>
          ) : (
            <Link
              className="nav-link uppercase px-[15px] py-[10px] cursor-pointer"
              to="/auth"
            >
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
