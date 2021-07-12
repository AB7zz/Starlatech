import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
// const HeroSection = React.lazy(() => import('../components/HeroSection')) ;
import Services from '../components/Services'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import Illustrations from '../components/Illustrations'
import Stats from '../components/Stats'
import ParaOne from '../components/ParaOne'
import ParaTwo from '../components/ParaTwo'
import ReactGA from 'react-ga';
import Appointment from '../components/Appointment';
import ProgrammingLanguages from '../components/ProgrammingLanguages'
import Modernize from '../components/Modernize'
// eslint-disable-next-line
import ClickMeArrow from '../components/ClickMeArrow'
import './Styles/style.css'
ReactGA.initialize('UA-199451007-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    if(!window.GA_INITIALIZED){
      ReactGA.initialize("UA-199451007-1");
      window.GA_INITIALIZED = true;
    }
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);
}
const Home = () => {
      usePageViews();
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <Stats />
            <Services />
            <ParaOne />
            <Illustrations />
            <ProgrammingLanguages />
            <Modernize />
            <Appointment />
            <Faq />
            <ParaTwo />
            <Footer />
        </>
    );
};

export default Home
