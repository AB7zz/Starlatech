import React, {useState} from 'react';
import {HeroBg, HeroContainer, HeroRightContent, HeroLeftContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import styled from 'styled-components';
import {Link as LinkS} from 'react-router-dom'
import './Hero.css'
import './style.css'


const Button = styled(LinkS)`
text-decoration: none;
    border-radius: 50px;
    padding: 1rem 3rem;
    font-size: 1rem;
    border: 2px solid #fff;
    background: transparent;
    cursor: pointer;
    outline: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;

    &:hover{
        transform: scale(1.07);
        background: #FFA800;
        color: #000;
        border-color: #FFA800;
        transition: 0.4s;
    }

    &:hover:focus{
        transform: scale(0.95);
    }
    @media screen and (max-width: 280px){
        padding: 1rem 1.6rem;
    }
`


export const introvideo = styled.video`
    position: absolute;
    margin-top: 137px;
    height: 374px;
    @media only screen and (max-width:768px){
        position: absolute;
        height: 172px;
        margin-top: 122px;
    }
    @media only screen and (max-width:320px){
        height: 143px;
        width: 205px;
        margin-top: -2px;
    }
    @media only screen and (max-width: 280px){
        position: absolute;
        height: 122px;
        width: 2000px;
        margin-top: 118px;
    }

`
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
        <HeroBg>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <HeroContainer if="home">
                <HeroLeftContent>
                    <HeroH1>Your Dream Website</HeroH1>
                    <HeroP> at the industry's most affordable prices</HeroP>
                    <HeroBtnWrapper>
                        <Button 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        to="/pricing"
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        whileHover={{scale: 1.05,  backgroundColor: '#FFA800', border: 'none', color: '#000'}}
                        whileTap={{scale: 0.95}}
                        initial={{opacity: 1}}
                        animate={{opacity: 1, transition: {duration: 0.8}}}
                        >
                        View Packages{hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroLeftContent>
                <HeroRightContent>
                    <img      
                    srcset="https://res.cloudinary.com/starla/image/upload/f_auto,w_300,f_auto,q_auto,c_scale/v1624131341/pc-template10_bzbdfk.png 800w,
                    https://res.cloudinary.com/starla/image/upload/f_auto,w_600,f_auto,q_auto,c_scale/v1624131341/pc-template10_bzbdfk.png 1200w,
                    https://res.cloudinary.com/starla/image/upload/f_auto,w_800,q_auto,c_scale/v1624131341/pc-template10_bzbdfk.png 3000w"
                   
                    src='https://res.cloudinary.com/starla/image/upload/f_auto,q_auto,c_scale,w_600,h_498/v1624131341/pc-template10_bzbdfk.png' alt="PC" class="pctemplateforvideo" />
                    <video 
                        className="introvideo" 
                        playsInline 
                        webkit-playsinline
                        autoPlay
                        loop 
                        preload={true}
                        muted> 
                            <source 
                                alt='starlatechdemovideo' 
                                src="https://res.cloudinary.com/starla/video/upload/c_scale,w_650,f_auto,q_auto/FinalProduct__czuny7.mp4" 
                                type='video/mp4' 
                            />
                    </video> 
                </HeroRightContent>
            </HeroContainer>
            </HeroBg>
        </>
    )
}



export default HeroSection