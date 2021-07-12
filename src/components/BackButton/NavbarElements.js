import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? 'transparent' : 'transparent')};
height: 95px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
// position: sticky;
margin-left: 50px;
position: absolute;
top: 0;
z-index: 9000;

 @media screen and (max-width: 960px){
     transition: 0.8s all ease;
     margin-left: 25px;
    //  position: relative;
     height: 80px;
     z-index:9000;
 }
`;

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 width: 100%;
 padding: 0 0;
 max-width: 1100px;
`;



export const NavBtn = styled.nav`
 display: flex;
 align-items: center;
`;

export const NavBtnLink = styled(LinkR)`
 border-radius: 20px;
 background: transparent;
 white-space: nowrap;
 padding: 10px 22px;
 color: #000;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 font-family: 'Encode Sans', sans-serif;
 font-display: swap;

 &:hover{
     transition: all 0.2s ease-in-out;
     background: transparent;
     border: 1px solid #000;
     border-radius: 20px; 
     transform: scale(1.1);
     color: #000;
 }
`;
