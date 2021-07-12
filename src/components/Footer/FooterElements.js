import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export const FooterContainer = styled.footer`
    background-color: #1A1A1A;
    position: relative;
    z-index: 5;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    z-index: 2;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    // @margin screen and (max-width: 820px){
    //     padding: 25px 20px;
    // }
`;

export const FooterLinksContainer = styled.div`
    // display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0px;
    justify-content: center;
    margin-bottom: -40px;
    z-index: 2;

    @media screen and (max-width: 560px){
        grid-template-columns: 1fr 1fr;
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;
    z-index: 2;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 2;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    color: #fff;
    font-family:"Encode Sans",sans-serif;
    font-display: swap;
    

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 16px;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
    margin-bottom: 16px;
    font-family:"Encode Sans",sans-serif;
    font-display: swap;
    z-index: 2;
    @media screen and (max-width: 1250px){
        font-size: 14px;
    }
    @media screen and (max-width: 768px){
        font-size: 14px;
    }
    @media screen and (max-width: 560px){
        font-size: 16px;
    }
`;

export const FooterLink = styled(Link)`
    color: #fff;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
    font-family:"Encode Sans",sans-serif;
    text-decoration: none;
    margin-bottom: 0.5rem;
    z-index: 2;
    font-size: 16px;

    &:hover{
        color: #FFA800;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1250px){
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
    @media screen and (max-width: 560px){
        font-size: 14px;
    }
    @media screen and (max-width: 280px){
        font-size: 12px;
    }
`;
export const FooterLinkAnchor = styled(AnchorLink)`
color: #fff;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
    font-family:"Encode Sans",sans-serif;
    text-decoration: none;
    margin-bottom: 0.5rem;
    z-index: 2;
    font-size: 16px;

    &:hover{
        color: #FFA800;
        transition: 0.3s ease-out;
    }
    @media screen and (max-width: 1250px){
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
    @media screen and (max-width: 560px){
        font-size: 14px;
    }
    @media screen and (max-width: 280px){
        font-size: 12px;
    }
`

export const SubscribeFormWrap = styled.form`
    display: flex;

    @media screen and (max-width: 1299px){
        display: grid;
    }
`

export const SubscribePara = styled.p`
    color: #fff;
    padding: 0;
    margin-bottom: 0.5rem;
    z-index: 2;
    font-size: 14px;
`

export const SubscribeInput = styled.input`
    padding: 5px 5px;
    width: 100%;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
`
export const FaCopyright = styled.div`
    backround: #000;
`
export const SubscribeButton = styled.button`
    background: #FFA800;
    color: #fff;
    padding: 9px 9px;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
    border: none;
    margin-left: 3px;
    transition: 0.4s;

    @media screen and (max-width: 1299px){
        margin-top: 15px;
        margin-left: 0px;
    }
    @media screen and (max-width: 1250px){
        font-size: 13px;
    }
    @media screen and (max-width: 768px){
        font-size: 12px;
    }
    @media screen and (max-width: 560px){
        font-size: 14px;
    }
    @media screen and (max-width: 280px){
        font-size: 12px;
    }

    &:hover{
        cursor: pointer;
        background: #101010;
        transition: 0.4s;
    }

`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
    margin-bottom: -45px;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    max-width: 1100px;
    margin: 48px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

// export const SocialLogo = styled.div(Link)`
export const SocialLogo = styled.img`
    color: #fff;
    justify-self: start;
    z-index: 2;
    cursor: pointer;
    width: 228px;
    height: 80px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    @media screen and (max-width: 768px){
        margin-top: 50px;
    }
`;

export const WebsiteRights = styled.small`
    color: #fff;
    z-index: 2;
    letter-spacing: 0.4px;
    transform: scaleY(0.9);
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    width: 240px;
    @media screen and (max-width: 820px){
        padding-bottom: 40px;
    }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    z-index: 2;
`;

