import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarContactLink, SidebarRoute, SideBtnWrap } from './SidebarElements'; 
// import Logo from '../../images/logo.png'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            {/* <Logodiv src={Logo}  /> */}
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} href="../">
                        Home
                    </SidebarLink>
                    <SidebarContactLink onClick={toggle} to="/pricing">
                        Pricing
                    </SidebarContactLink>
                    <SidebarLink onClick={toggle} href="../#services">
                        Services
                    </SidebarLink>
                    <SidebarLink onClick={toggle} href="../#illustrations">
                        Illustrations
                    </SidebarLink>
                    <SidebarContactLink to="/contactform">
                        Contact us
                    </SidebarContactLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={toggle} href="../#bookapp">Book Appointment</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
