import React from 'react'
import {ParaContainer, ParaWrapper, Para, Links, GithubLink, YoutubeLink} from './Elements.js'

import ProgressiveImage from "react-progressive-graceful-image";
import './styles.css'
const index = () => {
    return (
        <>
            <div className="ParaTwo">
                <div id="triangle"></div>
                <div id="circle"></div>
                <div id="square"></div>
                <div id="hexagon"></div>
                <div id="moon"></div>
                <ParaContainer>
                    <ParaWrapper>
                        <Para>Check out some of our work over here </Para>
                        <Links>
                            <GithubLink target="_blank" href='https://github.com/AB7zz'>
                                {/* <GitLogo effect="blur" src={github} alt="GitHub" /> */}
                                <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,h_130,w_130/v1624131341/githublogo_lly0hu.png' placeholder={'https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_1,h_150/v1624131341/githublogo-small_dapzzc.png'}>
                                    {(src) => <img className="GitLogo" src={src} alt="landingpage" />}
                                </ProgressiveImage>
                            </GithubLink>
                            <YoutubeLink target="_blank" href='https://www.youtube.com/channel/UCS2B6oGj_NXUe7_1KX8nTCQ'>
                                {/* <YoutubeLogo effect="blur" src={youtube} alt="Youtube" /> */}
                                <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,q_auto,h_180,w_180/v1624131342/youtubelogo_hudmqy.png' placeholder={'https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,h_140,q_1/v1624131340/youtubelogo-small_dmegaf.png'}>
                                    {(src) => <img className="YoutubeLogo" src={src} alt="landingpage" />}
                                </ProgressiveImage>
                            </YoutubeLink>
                        </Links>
                    </ParaWrapper>
                </ParaContainer>
            </div>
        </>
    )
}

export default index
