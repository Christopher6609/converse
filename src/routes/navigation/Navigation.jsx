import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
//import  { ReactComponent as Logo } from "../../assets/crown.svg";

const Navigation = () => {
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
                <Link className="nav-link uppercase px-[15px] py-[10px] cursor-pointer" to='/signin'>
                    Sign in
                </Link>
                <Link className="nav-link uppercase px-[15px] py-[10px] cursor-pointer" to='/signup'>
                    Sign up
                </Link>
            </div>
          
        </div>
        <Outlet />
      </>
    )
  }

  export default Navigation;