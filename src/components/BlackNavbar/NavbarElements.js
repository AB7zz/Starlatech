import styled from 'styled-components';
import {Link as LinkC} from 'react-router-dom';

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? '#000' : '#000')};
height: 95px;
margin-top: -100px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky !important;
top: 0;
z-index: 99999;

 @media screen and (max-width: 960px){
     transition: 0.8s all ease;
     height: 80px;
     z-index:9000;
 }
`;

export const NavbarContainer = styled.div`
 display: flex;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 0;
 max-width: 1100px;
`;

export const NavLogo = styled(LinkC)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
 align-items: center;
 font-weight: bold;
 text-decoration: none;
`;

export const LogoImage = styled.img`
 width: 228px;
 height: 80px;
 @media screen and (max-width: 1000px){
    width: 180px;
    height: 60px; 
    margin-top:0px;
 }
`

export const MobileIcon = styled.div`
 display: none;

 @media screen and (max-width: 768px){
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.8rem;
     cursor: pointer;
     color: #fff;
 }
`;

export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: 0px;

 @media screen and (max-width: 768px){
     display: none;
 }
`;

export const NavItem = styled.li`
 height: 80px;
`;

export const NavLinks = styled.a`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
 @media screen and (max-width: 1000px){
     font-size: 14px;
 }
 &:hover{
     color: #FFA800;
 }
 &:focus{
     border-bottom: 3px solid #FFA800;
 }
`;
export const NavContactLink = styled(LinkC)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;
@media screen and (max-width: 1000px){
    font-size: 14px;
}
 &:hover{
     color: #FFA800;
 }
 &.active{
     border-bottom: 3px solid #FFA800;
 }
`;


export const NavBtn = styled.nav`
 display: flex;
 align-items: center;

 @media screen and (max-width: 768px){
     display: none;
 }
`;

export const NavBtnLink = styled.a`
 border-radius: 50px;
 background: #FFA800;
 white-space: nowrap;
 padding: 10px 22px;
 color: #010606;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 @media screen and (max-width: 1115px){
     padding: 8px 10px;
     margin-right: 10px;
 }
 @media screen and (max-width: 1000px){
    padding: 8px 8px;
    font-size: 13px;
    margin-right: 10px;
}
@media screen and (max-width: 820px){
    padding: 8px 6px;
    font-size: 13px;
    margin-right: 10px;
}

 &:hover{
     transition: all 0.2s ease-in-out;
     background: #fff; 
     color: #010606;
 }
`;
