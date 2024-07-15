import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
//import  { ReactComponent as Logo } from "../../assets/crown.svg";
import { UserContext } from "../../components/context/UserContext";
import { signUserOut } from "../../utils/firebase/firebase";
import CartIcon from "../../components/atoms/cart-icon/CartIcon";
import CartDropdown from "../../components/molecules/cart-dropdown/CartDropdown";
import { CartContext } from "../../components/context/CartContext";



const Navigation = () => {
  const {isCartOpen} = useContext(CartContext)


  const {currentUser} = useContext(UserContext);

    return(
      <>
        <div className="navigation w-[100%] h-[70px] flex justify-between mb-[25px]">
          <Link className="logo-container h-[100%] w-[70px] p-[25px]" to='/'>
              <div>
                  Logo
              </div>
            </Link>
            <div className="nav-links-container w-[50%] h-[100%] flex items-center justify-end">
                <Link className="nav-link uppercase px-[15px] py-[10px] cursor-pointer" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link uppercase px-[15px] py-[10px] cursor-pointer" to='/shop'>
                    Contact
                </Link>                
                {currentUser ? (<span className="nav-link uppercase px-[15px] py-[10px] cursor-pointer"  onClick={signUserOut}>SIGN OUT</span>): (<Link className="nav-link uppercase px-[15px] py-[10px] cursor-pointer" to='/auth'>
                    SIGN IN
                </Link> )}
                <CartIcon />
            </div>
              {isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;