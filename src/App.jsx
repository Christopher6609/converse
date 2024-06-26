import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import SignIn from "./routes/sign-in/SignIn";
import SignUp from "./routes/sign-up/SignUp";
import { Routes, Route } from "react-router-dom";


const Shop = () => {
  return(
    <>
      I am the shop
    </>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Navigation /> }>
          <Route index element={<Home/>} />
          <Route path="shop" element={<Shop/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="signup" element={<SignUp/>} />
        </Route>
      </Routes>
    </>
  )
}


export default App
