import {Route,Routes} from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Navbar from "./pages/Navbar";
import Explore from "./pages/Explore/Explore";
const App = () => {
  return(
    <div className="">
      <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/explore" element={<Explore/>}/>

      <Route path="/Profile" element={<ProfilePage/>}/>



    </Routes>
    </div>
  )
}
export default App