import './HomePage.css'
import '../style.css'
import About from '../About'
import Services from '../Services'
import Contact from '../Contact'
import Trendingones from '../Trendingones'
import Explore from '../Explore/Explore'
const HomePage = () => {
    return (
        <div className="">
        <div id="header">
        <div className="container">
          
            <div className="header-container">
            <div className="header-text">
                <p>3-Friends Book store</p>
            Hi, I'm<span> Ceo </span>of this company get all your fav  book here with buy one get one free offer
            </div>
         

                <img className="header-img" src="123.jpg" alt=""/>
            </div>
        </div>
    </div>

    <About/>
    <Services/>
    <Trendingones/>
    <Contact/>
    </div>
    )
}
export default HomePage