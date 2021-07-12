import React, {useState} from 'react';
import Slider from "react-slick";
import './illustrations.css';
import {FaArrowRight, FaArrowLeft} from "react-icons/fa"
import { IllustrationsContainer, Heading, Para, RightContainer, LeftContainer} from './Elements';
import ProgressiveImage from "react-progressive-graceful-image";
import 'react-lazy-load-image-component/src/effects/blur.css'

const text = [
                {
                    "text" : "Optimized & Secure",
                    "img" : "https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_800,h_800/v1624947164/Sliderpic_2_iyjc7c.png",
                    "placeholder": 'https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1624947164/Sliderpic_3_wnd4p3.png',
                    "para" : "We practice the best security measures to safeguard your application"
                },
                {
                    "text" : "Completely Responsive" ,
                    "img" : "https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_800,h_800/v1624947164/Sliderpic_1_uw5kwj.png",
                    "placeholder": 'https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1624947164/Sliderpic_3_wnd4p3.png',
                    "para" : "We create design websites that are compatible in every device"
                },
                {
                    "text" : "Latest Technologies",
                    "img" : "https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_800,h_800/v1624947164/Sliderpic_3_wnd4p3.png",
                    "placeholder": 'https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1624947164/Sliderpic_3_wnd4p3.png',
                    "para" : "We are up-to-date with the latest tools and technologies of today"
                },
                {
                    "text" : "Custom designs",
                    "img" : "https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_800,h_800/v1625205160/Sliderpic_1_kkinki.png",
                    "placeholder": 'https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1625205160/Sliderpic_1_kkinki.png',
                    "para" : "We provide creative & seamless UI/UX designs"
                    
                }
            ];

const Illustrations = () => {
  
  const NextArrow = ({onClick}) => {
      return(
          <div className="arrow next" onClick={onClick}>
             <FaArrowRight/>
          </div>
      );
  };

  const PrevArrow = ({onClick}) => {
    return(
        <div className="arrow prev" onClick={onClick}>
           <FaArrowLeft/>
        </div>
    );
};

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
      infinite: true,
      lazyload: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      beforeChange: (current, next) => setImageIndex(next)
  }


    return (
        <div id="illustrations" className="App">
            <Slider {...settings}>
                {text.map((text,idx)=> (
                    <div className={idx === imageIndex ? "slide activeSlide" : "unclickable slide"}>
                        <IllustrationsContainer>
                            <LeftContainer><Heading>{text.text}</Heading><Para>{text.para}</Para></LeftContainer>
                            <RightContainer>
                                <ProgressiveImage src={text.img} placeholder={text.placeholder}>
                                    {(src) => <img className="Img" src={src} alt="landingpage" />}
                                </ProgressiveImage>
                                </RightContainer>
                        </IllustrationsContainer>
                    </div>
                ))}
            </Slider>
            {/* <img class="rightsvg" src={rightsvg} alt="right" /> */}
        </div>
    )
}

export default Illustrations