import React from 'react'
import Navigation from '../Navigation/Navigation'
import News from "../News/News";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Offers from "../Offers/Offers";
import Trending from "../Trending/Trending";
import Explore from "../Explore/Explore";
import Discover from "../Discover/Discover";
import Newarrivals from "../NewArrivals/Newarrivals";
import Steps from "../Steps/Steps";
import Earn from "../EarnMoney/Earn";
import Startexplore from "../StartExploring/Startexplore";
import Women from "../StartExploring/Women/Women";
import Bestseller from "../Bestseller/Bestseller";
import Kidsproduct from "../KidsProduct/Kidsproduct";
import Expertchoice from "../Expertschoice/Expertchoice";
import Department from "../Department/Department";
import TodoList from '../NewArrivals/TodoList';
import WomenArrival from '../Bestseller/Bestseller';

const Home = ({handleClick}) => {

  return (
    <div>
    
    <Explore/>
    <Discover/>
      <Newarrivals title="New ." remaining="Men Collection" handleClick={handleClick} />
      <hr />
      <Steps />
      <hr />
    <Earn/>
    <Startexplore/>
    <Kidsproduct/>
    <WomenArrival handleClick={handleClick} title="Women" remaining="Choice"/>
    <Offers/>
    <News/>
      <Testimonials />
    <hr />

    </div>
  )
}

export default Home