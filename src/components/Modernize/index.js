import React from 'react'
import './style.css'
import { ModernizeContainer, ModernizeWrapper, HeadingWrapper, ModernizeH1, ModernizeP, StepsWrapper, Step, StepH1, StepP } from './elements.js'
import ProgressiveImage from 'react-progressive-graceful-image'
const index = () => {
    return (
        <>
        <div id="modernize">
            <ModernizeContainer>
                <ModernizeWrapper>
                    <HeadingWrapper>
                        <ModernizeH1>
                            Streamline your business
                        </ModernizeH1>
                        <ModernizeP>
                            Give your business the online presence it deserves with us in 3 simple steps
                        </ModernizeP>
                    </HeadingWrapper>
                    <StepsWrapper>
                        <Step>
                            <ProgressiveImage src="https://res.cloudinary.com/starla/image/upload/f_auto/v1625342684/undraw_events_2p66_xgvf4l.png" placeholder="https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1625342684/undraw_events_2p66_xgvf4l.png">
                                {(src) => <img className="image45" src={src} alt="Attract and engage clients" />}
                            </ProgressiveImage>
                            
                            
                            <div class="together">
                                <div id="numberone">1</div>
                                <StepH1>Book an appointment</StepH1>
                            </div>
                            <StepP>Schedule an appointment with our engineers to discuss the theme, design, and functionality of your web app. The consulting is free of charge.</StepP>
                        </Step>
                        
                        <Step>
                        <ProgressiveImage src="https://res.cloudinary.com/starla/image/upload/f_auto/v1625333517/undraw_selection_re_ycpo__1_-removebg-preview_lzwldb.png" placeholder="https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_1,w_20,h_20/v1625333517/undraw_selection_re_ycpo__1_-removebg-preview_lzwldb.png">
                                {(src) => <img className="image45" src={src} alt="Attract and engage clients" />}
                            </ProgressiveImage>
                            
                            <div class="together">
                                <div id="numberone">2</div>
                                <StepH1>Choose a package</StepH1>
                                </div>
                            <StepP>Select a package according to your requirements. After your appointment, you must select a package and make an advanced payment.
 </StepP>
                            
                        </Step>
                        
                        <Step>
                            <ProgressiveImage src="https://res.cloudinary.com/starla/image/upload/f_auto/v1625333515/undraw_Code_review_re_woeb__1_-removebg-preview_tasnby.png" placeholder="https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1625333515/undraw_Code_review_re_woeb__1_-removebg-preview_tasnby.png">
                                {(src) => <img className="image45" src={src} alt="Generate revenue" />}
                            </ProgressiveImage>
                            <div class="together">
                                <div id="numberone">3</div>
                                <StepH1>Review your order</StepH1>
                            </div>
                            <StepP>After we have built the application, you can inspect the components and request changes accordingly. Changes are free for up to 6 days.</StepP>
                        </Step>
                    </StepsWrapper>
                </ModernizeWrapper>
            </ModernizeContainer>
        </div>
        </>
    )
}

export default index
