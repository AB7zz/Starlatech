import styled from 'styled-components'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
export const ParaContainer = styled.div`
    height: 400px;
    background: #ffa800;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
    @media screen and (max-width: 1000px){
        height: 250px;
    }
    @media screen and (max-width: 768px){
        height: 250px;
    }
`

export const ParaWrapper = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 130px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1000px){
        padding: 35px;
    }
    @media screen and (max-width: 769px){
        padding: 35px;
        grid-template-columns: 1fr;
        grid-gap: 60px;
    }
    @media screen and (max-width: 620px){
        padding: 35px;
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
    @media screen and (max-width: 485px){
        padding: 35px;
        grid-template-columns: 1fr;
        grid-gap: 30px;
    }
    @media screen and (max-width: 340px){
        padding: 35px;
        grid-template-columns: 1fr;
        grid-gap: 40px;
    }
`

export const Para = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    z-index: 999;
    @media screen and (max-width: 340px){
        font-size: 25px;
    }
`

export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // margin-left: 250px;
    z-index: 999;
    @media screen and (max-width: 768px){
        margin-left: 0px;
    }
`

export const GithubLink = styled.a``

export const GitLogo = styled(LazyLoadImage)`
    height: 110px;
    width: 110px;
    margin-right: 50px;
    @media screen and (max-width: 768px){
        height: 80px;
    }
`
export const YoutubeLink = styled.a``

export const YoutubeLogo = styled(LazyLoadImage)`
    height: 140px;
    width: auto;
    @media screen and (max-width: 768px){
        height: 80px;
    }
`