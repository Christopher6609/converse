import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Auth from "./routes/authentication/auth";


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
          <Route path="auth" element={<Auth/>} />
         
        </Route>
      </Routes>
    </>
  )
}


export default App
