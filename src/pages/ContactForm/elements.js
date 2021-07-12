import styled from 'styled-components'
import {Link as LinkG} from 'react-router-dom';
export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #1A1A1A;
    height: 800px;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    @media screen and (max-width: 768px){
        height: 100%;
        padding-top: 20px;
        padding-bottom: 50px;
    }
    @media screen and (max-width: 280px){
        width: 320px;
    }
`
export const ContactHeaderWrapper = styled.div`
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 768px){
        margin-top: 100px;
    }
`
export const ContactTitle = styled(LinkG)`
    font-size: 2.5rem;
    margin-bottom: 30px;
    // font-family: 'Encode Sans', sans-serif;
    color: #fff;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    position: relative;
    

    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #FFA800;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 100%;
        left: 0;
        }
    }
    @media screen and (max-width: 768px){
        font-size: 2rem;
    }
    @media screen and (max-width: 280px){
        font-size: 1.55rem;
    }

`
export const ContactMainWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0px;
    z-index: 3;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
export const ContactLocationWrapper = styled.div`
    justify-content: center;
    align-items: center;
    margin-right: 50px;
    
`
export const ContactPara = styled.p`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    padding-left: 25px;
    
    @media screen and (max-width: 768px){
        font-size: 0.75rem;
    }
    @media screen and (max-width: 280px){
        font-size: 0.55rem;
    }
`

export const Map = styled.iframe`
width: 90%;
@media screen and (max-width: 1090px){
    height: 150px;
    width: 345px;
    margin-left: 80px;
}
@media screen and (max-width: 955px){
    width: 70%;
    height: 130px;
}
@media screen and (max-width: 350px){
    margin-left: 70px;
}
   

    
`
export const ContactFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // @media screen and (max-width: 512px){
    //     padding-left: 9%;
    // }
`
export const Border = styled.div`
    border-left: 0.001px solid grey;
    height: 100%;
    width: 50px;
    @media screen and (max-width: 768px){
        border-width: 0px !important;
        height: 0px !important;
        width: 0px;
    }
`
export const Inputboxes = styled.form`
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const InputBox = styled.input`
    border-radius: 5px;
    height: 55px;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    background: transparent;
    border-right: none;
    border-left: none;
    border-top: none;
    color: #fff;
    &:focus{
        outline: none;
        border-color: #FFA800;
    }
    @media screen and (max-width: 1131px){
        width: 95%;
    }
    @media screen and (max-width: 768px){
        margin-left: 5%;
    }
    @media screen and (max-width: 512px){
        width: 90%;
    }
    
    
`

export const TextArea = styled.textarea`
    height: 150px;
    width: 100%;
    padding: 10px;
    background: transparent;
    border-right: none;
    border-left: none;
    border-top: none;
    color: #fff;
    &:focus{
        outline: none;
        border-color: #FFA800;
    }
    @media screen and (max-width: 1131px){
        width: 95%;
    }
    @media screen and (max-width: 768px){
        margin-left: 5%;
    }
    @media screen and (max-width: 512px){
        width: 90%;
    }
`
export const Button = styled.button`
    border-radius: 50px;
    padding: 1rem 3rem;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    font-size: 1rem;
    border: 2px solid #fff;
    background: transparent;
    cursor: pointer;
    outline: none;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;

    &:hover{
        transform: scale(1.07);
        background: #FFA800;
        color: #000;
        border-color: #FFA800;
        transition: 0.4s;
    }

    &:hover:focus{
        transform: scale(0.95);
    }

    @media screen and (max-width: 1000px){
        // padding: 1rem 1.5rem;
        font-size: 13px;
    }
    @media screen and (max-width: 512px){
        // position: realtive;
        right: 100%;
    }
`