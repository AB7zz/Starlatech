import styled from 'styled-components'

export const ParaContainer = styled.div`
    background: #ffa800;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const ParaWrapper = styled.div`
    padding: 70px 90px 70px 90px;
    @media screen and (max-width: 768px){
        padding: 35px;
    }
`

export const Para = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 500px){
        font-size: 1.2rem;
    }
    @media screen and (max-width: 400px){
        font-size: 1rem;
    }
`