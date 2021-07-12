import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavMenu, NavLinks, NavContactLink, LogoImage, NavBtn, NavBtnLink } from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';

const BlackNavbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 30){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='../' onClick={toggleHome}><LogoImage alt='starlatechlogo' src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_400,h_133/v1625206330/logo_ueoxi2_fsl6oq.png' /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                        <NavLinks href="../#services"
                            offset={90}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavLinks href="../#illustrations"
                            >Illustrations</NavLinks>
                        </NavItem>
                        <NavItem>
                        <NavContactLink to="/pricing"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            >Pricing</NavContactLink>
                        </NavItem>
                        <NavItem>
                            <NavContactLink to="/contactform"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            >Contact Us</NavContactLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            href="../#bookapp">Book an Appointment</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default BlackNavbar
