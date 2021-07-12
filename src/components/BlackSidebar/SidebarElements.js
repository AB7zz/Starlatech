import styled from 'styled-components';
import {Link as LinkC} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    z-index: 10000;
`;

export const Logodiv = styled.img`
    width: auto;
    height: 220px; 
    position: absolute;
    // margin-bottom: 730px;
    // right: 12rem;
    // bottom: 0rem;
`
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    z-index: 10000;
    cursor: pointer;
    outline: none;
`;


export const SidebarWrapper = styled.div`
    color: #fff;
    z-index: 10000;
`;

export const SidebarLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    z-index: 10000;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #d7e0da;
        transition: 0.2s ease-in-out;
    }
`;
export const SidebarContactLink = styled(LinkC)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    z-index: 10000;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #d7e0da;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    z-index: 10000;
`;

export const SidebarRoute = styled.a`
    border-radius: 50px;
    background: #FFA800;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    z-index: 10000;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    z-index: 10000;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`;