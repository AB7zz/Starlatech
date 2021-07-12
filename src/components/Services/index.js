import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ProgressiveImage from "react-progressive-graceful-image";
import '../HeroSection/style.css';
import './Services.css'
import ReactCardFlip from 'react-card-flip';
import {Bg, ServiceContainer, ServiceCards, BackServiceCard, ServiceCard, ServiceTitle, BacksideDetails, BacksideLearn,BacksideTitle} from './ServicesElements'
// eslint-disable-next-line

class index extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlippedOne: false,
        isFlippedTwo: false,
        isFlippedThree: false,
        isFlippedFour: false,
        isFlippedFive: false,
        isFlippedSix: false
      };
      this.handleClickOne = this.handleClickOne.bind(this);
      this.handleClickTwo = this.handleClickTwo.bind(this);
      this.handleClickThree = this.handleClickThree.bind(this);
      this.handleClickFour = this.handleClickFour.bind(this);
      this.handleClickFive = this.handleClickFive.bind(this);
      this.handleClickSix = this.handleClickSix.bind(this);
    }
  
    handleClickOne(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlippedOne: !prevState.isFlippedOne }));
    }
    handleClickTwo(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedTwo: !prevState.isFlippedTwo }));
    }
    handleClickThree(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedThree: !prevState.isFlippedThree }));
    }
    handleClickFour(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedFour: !prevState.isFlippedFour }));
    }
    handleClickFive(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedFive: !prevState.isFlippedFive }));
    }
    handleClickSix(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlippedSix: !prevState.isFlippedSix }));
    }
    render() {
    return (
<>
        <Bg>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <ServiceContainer id="services">
            {/* <ServicesH1 className='animate'>Our Services</ServicesH1> */}
            <ServiceCards>
                
                <div className="scale">
                {/* <img style={{height: "300px", width: "auto", transform: "rotate(-80deg)", position: "relative", bottom: "0px"}} src={arrow} alt="Click Me" /> */}
                    <div className="floating1">
                        <ReactCardFlip isFlipped={this.state.isFlippedOne} flipDirection="vertical">
                                <ServiceCard onClick={this.handleClickOne}>
                                <div className='banner'>Click to view more</div>
                                    <ProgressiveImage 
                                    srcset="https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,w_200/v1624134939/undraw_Website_setup_re_d4y9_rpujer.png 900w,
                                    https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,w_300/v1624134939/undraw_Website_setup_re_d4y9_rpujer.png 3000w"
                                    src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,w_250/v1624134939/undraw_Website_setup_re_d4y9_rpujer.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_1,w_20/v1624134939/undraw_Website_setup_re_d4y9_rpujer.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="Basic Landing Page" />}
                                    </ProgressiveImage>
                                    <ServiceTitle>
                                        Landing-Page
                                    </ServiceTitle>
                                    
                                </ServiceCard>
                                <BackServiceCard onClick={this.handleClickOne}>
                                        <BacksideTitle>Landing Page</BacksideTitle>
                                        <BacksideDetails>A single-page web app to initiate your online presence. Perfect for new businesses who want to convey who they are without expecting online conversions.</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                                </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
                <div className="scale">
                    <div className="floating2">
                        <ReactCardFlip isFlipped={this.state.isFlippedTwo} flipDirection="vertical">
                            <ServiceCard onClick={this.handleClickTwo}>
                                {/* <ServicesIcon effect="blur" alt='multiplepagewebsite' src={Icon4} /> */}
                                <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_auto,f_auto/v1624311249/M_b4vpgx.svg' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_1/v1624131341/Msmall_bmvqe8.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="Multiple-Page Website" />}
                                    </ProgressiveImage>
                                <ServiceTitle>
                                    Multi-Page Site
                                </ServiceTitle>
                                
                            </ServiceCard>
                            <BackServiceCard onClick={this.handleClickTwo}>
                            <BacksideTitle>Multi-Page Website</BacksideTitle>
                                        <BacksideDetails>A multiple-page web app to educate an audience about your business. Perfect for both old and new businesses who want a large and informative online presence.</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                            </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
                <div className="scale">
                    <div className="floating3">
                        <ReactCardFlip isFlipped={this.state.isFlippedThree} flipDirection="vertical">
                            <ServiceCard onClick={this.handleClickThree}>
                                {/* <ServicesIcon effect="blur" alt='ecommerce' src={Icon2} /> */}
                                <ProgressiveImage   srcset="https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_120,q_auto/v1624134939/undraw_web_shopping_dd4l_urxyvt.png 1000w,
                                    https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_230,q_auto/v1624134939/undraw_web_shopping_dd4l_urxyvt.png 3000w"
                                    src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_auto/v1624134939/undraw_web_shopping_dd4l_urxyvt.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,q_1/v1624134939/undraw_web_shopping_dd4l_urxyvt.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="E-Commerce Website" />}
                                    </ProgressiveImage>
                                <ServiceTitle>
                                E-commerce Site
                                </ServiceTitle>
                                
                            </ServiceCard>
                            <BackServiceCard onClick={this.handleClickThree}>
                            <BacksideTitle>Ecommerce Website</BacksideTitle>
                                        <BacksideDetails>A multi-page dynamic web app to kickstart your online business. Perfect for both established and new businesses who want to take their products online.</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                            </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
                <div className="scale">
                    <div className="floating2">
                        <ReactCardFlip isFlipped={this.state.isFlippedFour} flipDirection="vertical">
                            <ServiceCard onClick={this.handleClickFour}>
                                {/* <ServicesIcon effect="blur" alt='domainregistration' src={Icon1} /> */}
                                <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_auto/v1624133182/undraw_Domain_names_re_0uun_kczge0.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_1/v1624133182/undraw_Domain_names_re_0uun_kczge0.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="Domain Registration" />}
                                    </ProgressiveImage>
                                <ServiceTitle>
                                Domain Solutions
                                </ServiceTitle>
                                
                            </ServiceCard>
                            <BackServiceCard onClick={this.handleClickFour}>
                            <BacksideTitle>Domain Registration</BacksideTitle>
                                        <BacksideDetails>We offer domain solutions to all of our clients. Each package includes domain assistance where we will help you search for available domains at a fair price.
</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                            </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
                <div className="scale">
                    <div className="floating1">
                        <ReactCardFlip isFlipped={this.state.isFlippedFive} flipDirection="vertical">
                            <ServiceCard onClick={this.handleClickFive}>
                                {/* <ServicesIcon effect="blur" alt='websecurity' src={Icon5} /> */}
                                <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_auto/v1624134937/undraw_security_o890_vxmlxt.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_1/v1624131342/Wsmall_yugs8m.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="Web Security" />}
                                    </ProgressiveImage>
                                <ServiceTitle>
                                Web Security
                                </ServiceTitle>
                                
                            </ServiceCard>
                            <BackServiceCard onClick={this.handleClickFive}>
                            <BacksideTitle>Web Security</BacksideTitle>
                                        <BacksideDetails>We build web apps that are not only fast and sleek but are also very safe. We believe in using the best methods and technologies to safeguard your online presence.</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                            </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
                <div className="scale">
                    <div className="floating2">
                        <ReactCardFlip isFlipped={this.state.isFlippedSix} flipDirection="vertical">
                            <ServiceCard onClick={this.handleClickSix}>
                                {/* <ServicesIcon effect="blur" alt='webhosting' src={Icon3} /> */}
                                <ProgressiveImage  srcset="https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_120,q_auto/v1624134939/undraw_web_shopping_dd4l_urxyvt.png 700w,
                                    https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_230,q_auto/v1624134939/undraw_web_shopping_dd4l_urxyvt.png 3000w"src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,w_250/v1624135459/undraw_cloud_hosting_aodd_lgakmv.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_250,q_1/v1624131341/Hsmall_z96jdr.png'>
                                        {(src) => <img class="ServicesIcon" src={src} alt="Hosting Provision" />}
                                    </ProgressiveImage>
                                <ServiceTitle>
                                Hosting Provision
                                </ServiceTitle>
                                
                            </ServiceCard>
                            <BackServiceCard onClick={this.handleClickSix}>
                            <BacksideTitle>Hosting Provision</BacksideTitle>
                                        <BacksideDetails>We offer hosting solutions to all of our clients. Each package includes hosting assistance where we search for the most reliable and affordable hosting providers.
</BacksideDetails>
                                       <BacksideLearn to='/pricing'>
                                       Learn More <FaArrowRight/>
                                       </BacksideLearn>
                            </BackServiceCard>
                        </ReactCardFlip>
                    </div>
                </div>
            </ServiceCards>
        </ServiceContainer>
        </Bg>
        </>
    )
}}

export default index