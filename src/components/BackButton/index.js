import React, {useState, useEffect} from 'react';
import { Nav, NavbarContainer, NavBtn, NavBtnLink } from './NavbarElements';
import {IconContext} from 'react-icons/lib';
import {FaArrowLeft} from 'react-icons/fa'

const Navbar = () => {
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
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    {/* <NavLogo to='../' onClick={toggleHome}><LogoImage src={Logo} /></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon> */}
                    <NavBtn>
                        <NavBtnLink to="../"><FaArrowLeft style={{fontSize: "13px", color: "#000"}}/> Back</NavBtnLink>
                    </NavBtn>
                    {/* <NavMenu>
                        <NavItem>
                            <NavLinks to="packages"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-93}
                            >Packages</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-93}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="illustrations"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Illustrations</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavContactLink to="/contactform"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Contact Us</NavContactLink>
                        </NavItem>
                    </NavMenu> */}
                    {/* <NavBtn>
                        <NavBtnLink smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            to="bookapp">Book an Appointment</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
