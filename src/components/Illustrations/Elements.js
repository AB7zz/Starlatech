import styled from 'styled-components'

export const IllustrationsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-gap: 0px;
    align-items: center;
    padding: 25px 65px;
    position: relative;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0px 0px;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    @media screen and (max-width: 768px){
        padding-left: 10px;
        padding-right: 25px;
        grid-row-start: 2;
    }
`
export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    @media screen and (max-width: 768px){
        grid-row-start: 1;
    }
`

export const Img = styled.img`
    height: 500px;
    width: auto;
    @media screen and (max-width: 768px){
        height: 150px;
    }
`

export const Heading = styled.h1`
    @media screen and (max-width: 768px){
        font-size: 27px;
    }
    @media screen and (max-width: 330px){
        font-size: 20px;
    }
`
export const Para = styled.p`
    font-size: 18px;
    color: #736e84;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 330px){
        font-size: 14px;
    }
`
// export const IllustrationsH1 = styled.h1`
// @media screen and (min-width: 769px){
//     font-size: 2.5rem;
//     margin-top: 50px;
//     font-family: 'Encode Sans', sans-serif;
//     color: #000;
//     text-decoration: none;
//     display: inline-block;
//     z-index: 2;
//     position: relative;

//     &:after {    
//         background: none repeat scroll 0 0 transparent;
//         bottom: 0;
//         content: "";
//         display: block;
//         height: 2px;
//         left: 50%;
//         position: absolute;
//         background: #FFA800;
//         transition: width 0.3s ease 0s, left 0.3s ease 0s;
//         width: 0%;
//     }

//     &:hover:after { 
//         width: 100%; 
//         left: 0; 
//     }
// }
// @media screen and (max-width: 768px){
//     font-size: 2.5rem;
//     margin-top: 50px;
//     font-family: 'Encode Sans', sans-serif;
//     color: #000;
//     text-decoration: none;
//     display: inline-block;
//     z-index: 2;
//     position: relative;

//     &:after {    
//         background: none repeat scroll 0 0 transparent;
//         bottom: 0;
//         content: "";
//         display: block;
//         height: 2px;
//         left: 0%;
//         position: absolute;
//         background: #FFA800;
//         transition: width 0.3s ease 0s, left 0.3s ease 0s;
//         width: 100%;
//     }
// }
//     @media screen and (max-width: 480px){
//         font-size: 2rem;
//     }
// `