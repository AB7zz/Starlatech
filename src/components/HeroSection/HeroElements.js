import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HeroBg = styled.div`
    // justify-content: center;
    // align-items: center;
    // padding: 0 30px;
    // height: 800px;
    // width: 100%;
    // height: 0%;
    // position: absolute;
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-attachment: fixed;
    // background-position: center;
    // z-index: -1;
    background-color: #1A1A1A !important;
    overflow-x: hidden;
    margin-bottom: -2px;
`



export const HeroContainer = styled.div`
    // background: #0c0c0c;
    display: grid;
    grid-template-columns: 1.5fr 1fr; //make it 1fr 2fr if you want the rigth side bigger, and 2fr 1fr if you want the left side bigger 
    justify-content: center;
    grid-gap: 0px;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 2;
  


    @media screen and (max-width: 980px){
        grid-template-columns: 1fr;
    }

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        // background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
    
`;

export const HeroLeftContent = styled.div`
    z-index: 2;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 980px){
        // margin-top: -170px;
        margin-bottom: 40px;
        padding-top: 0px;
        padding-bottom: 0px;
        grid-row-start: 2;
    }
    @media only screen and (max-width:900px){
        margin-top: 5px;
    }
    @media only screen and (max-width:550px){
        margin-top: -60px;
    }
    @media screen and (max-width: 480px){
        margin-top: -100px;
    }
    @media screen and (max-width: 280px){
        margin-top: -100px;
    }
`;
export const HeroRightContent = styled.div`
    z-index: 2;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 980px){
        margin-top: 0px;
        margin-bottom: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
        grid-row-start: 1;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;z-index: 2;
    text-align: center;
    // font-family: 'Encode Sans', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 29px;
    }
    @media screen and (max-width: 280px){
        font-size: 25px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;z-index: 2;
    text-align: center;
    max-width: 600px;
    // font-family: 'Encode Sans', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
    @media screen and (max-width: 280px){
        font-size: 15px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover{
        backgroundColor: '#FFA800', border: 'none', color: '#000';
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left:  8px;
    font-size: 20px;z-index: 2;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left:  8px;z-index: 2;
    font-size: 20px;
`;

// export const pctemplateforvideo = styled.LazyLoadImage`
//     margin-top: 110px;
//     height: 565px;
//     width: auto;
//     @media only screen and (max-width:768px){
//         height: 264px;
//         width: 315px;
//     }
//     @media only screen and (max-width:320px){
//         height: 187px;
//         width: 220px;
//     }
//     @media only screen and (max-width: 280px){
//         height: 183px;
//         width: auto;
//     }
// `
// export const introvideo = styled.video`
//     position: absolute;
//     margin-top: 137px;
//     height: 374px;
//     @media only screen and (max-width:768px){
//         position: absolute;
//         height: 172px;
//         margin-top: 122px;
//     }
//     @media only screen and (max-width:320px){
//         height: 143px;
//         width: 205px;
//         margin-top: -2px;
//     }
//     @media only screen and (max-width: 280px){
//         position: absolute;
//         height: 122px;
//         width: 2000px;
//         margin-top: 118px;
//     }

// `