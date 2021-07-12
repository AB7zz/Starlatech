import styled from 'styled-components'

export const CareerContainer = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 70px 100px;

    @media screen and (max-width: 768px){
        padding: 50px 15px;
    }
`
export const CareerWrapper = styled.div`
    justify-content: center;
    align-items: center;
    position: relative;
    background: #fff;
    overflow: hidden;
    padding: 70px 30px 70px;
    border: 0px solid lightgrey;
    border-radius: 10px;
    box-shadow: 0px 15px 30px 10px rgb(22 14 51 / 20%);
    z-index: 2;

    @media screen and (max-width: 768px){
        padding: 50px 15px 100px;
    }
`
export const Heading = styled.h1`
    text-align: center;
    margin-left: 45%;
    display: inline-block;
    position: relative;

    &:after{   
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #FFA800;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0%;
    }
    &:hover{
        cursor: pointer;
    }
    &:hover:after { 
        width: 100%; 
        left: 0; 
    }
    @media screen and (max-width: 768px){
        margin-left: 25%;
    }
`
export const FormWrapper = styled.div`
    display: block;
    padding: 50px;

    @media screen and (max-width: 768px){
        padding: 0px;
    }
`
export const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
`
export const Input = styled.input`
    height: 60px;
    padding-left: 30px;
    border-radius: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: 0.3s;
    border-color: lightgrey;

    &:focus{
        transform: scale(1.025);
        transition: 0.3s;
        outline: none;
        border-color: #FFA800;
    }
`
export const Select = styled.select`
    height: 60px;
    padding-left: 30px;
    border-radius: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    transition: 0.3s;

    &:focus{
        transform: scale(1.025);
        transition: 0.3s;
        outline: none;
        border-color: #FFA800;
    }   
`
export const SubmitBtn = styled.button`
    background: #000;
    color: #fff;
    width: 50%;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-top: 70px;
    margin: 70px auto auto auto;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover{
        transition: 0.3s;
        cusror: pointer;
        background: gray;
    }
`


