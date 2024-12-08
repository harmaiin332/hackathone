import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Category from './components/Category';
import LatestNews from './components/LatestNews';
import OurAchievements from './components/OurAchievements';
import Menu from './components/Menu';
import MeetOurChef from './components/MeetOurChef';
import Testimonials from './components/Testinomisl';
import Resturant from './components/Resturant';
export default function page(){
  return (
  
    <div
    >
    <Navbar  />
      <Hero/>
      <Aboutus/>
      <Category/>
      <WhyChooseUs/>
      <OurAchievements/>
      <Menu/>
      <MeetOurChef/>
      <Testimonials/>
      <Resturant/>
      <LatestNews/>
      <Footer/>
      
    </div>
  );
}

