import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkAnchor, FooterLinksWrapper, FooterLinkTitle, FooterLinkItems, FooterLink, SubscribeFormWrap, SubscribeInput, SubscribeButton, SocialMedia, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights, SocialMediaWrap} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll';
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
import './styles.css'
// import {FaRegCopyright} from 'react-icons/fa'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    function sendEmail(e) {
        // if(document.getElementById('email') == ""){
        //     e.preventDefault();
        //     swal('Please enter an email');
        // }else{
            swal('Thanks for subscribing!');
            e.preventDefault();
            emailjs.sendForm('service_s2yr31j', 'template_s87nuyi', e.target, 'user_MzVXLN7rOfB1swxEYSxO0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        // }
    }
    return (
        <>
        <FooterContainer style={{position: 'relative'}}>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLinkAnchor href="#modernize">How it works</FooterLinkAnchor>
                            <FooterLink to="/privacy">Privacy</FooterLink>
                            <FooterLink to='/terms'>Terms and Services</FooterLink>
                            <FooterLink to='/careers'>Careers</FooterLink>
                         
                           
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Our Work</FooterLinkTitle>
                            <FooterLinkAnchor href="#services">Services</FooterLinkAnchor>
                            <FooterLinkAnchor href="#illustrations">Demonstrations</FooterLinkAnchor>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Get in Touch</FooterLinkTitle>
                            <FooterLink to="/contactform">Contact us</FooterLink>
                            <FooterLink>starlatech@gmail.com</FooterLink>
                            <FooterLink>+971567362368</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Stay Connected</FooterLinkTitle>
                            {/* <SubscribePara>Subscribe to our Email Mailing and receive latest news on the upcoming discount deals, sales, reminders, etc. Don't worry, we won't spam you because even we hate spams.</SubscribePara> */}
                            <SubscribeFormWrap onSubmit={sendEmail}>
                                <SubscribeInput id='email' name="email" type="text" placeholder="Enter Email" />
                                <SubscribeButton>Subscribe</SubscribeButton>
                            </SubscribeFormWrap>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo onClick={toggleHome} src="https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_400,h_133/v1625206330/logo_ueoxi2_fsl6oq.png" />
                        <WebsiteRights>StarlaTech {new Date().getFullYear()} © All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/StarlaTech-100336098968918" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/starlatech/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/StarlaTech" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/channel/UCzMvxDRPXr7nwSfTIuTeuUw" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/starla-tech-739a8b213/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>

</>
    
    )
}

export default Footer