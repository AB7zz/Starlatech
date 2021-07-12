import styled from 'styled-components';


export const AppointmentContainer = styled.div`
overflow-x:hidden;
display: grid;
grid-template-columns: 1fr 1.3fr;
justify-content: center;
align-items: center;
padding: 0 50px 0 150px;
position: relative;
// grid-gap: 150px;
z-index: 1;


@media screen and (max-width: 1024px){
    padding-top: 0px;
    padding-left: 50px;
    margin-top: 70px;
    grid-template-columns: 1fr;
    padding-bottom: 50px;
    overflow-y: hidden;
}



@media screen and (max-width: 480px){
    grid-template-columns: 1fr;
}

:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

`;

export const AppointmentLeft = styled.div`
    z-index: 2;
    max-width: 1200px;
    padding: 8px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        height: 200px;
    }
`;
export const AppointmentRight = styled.div`
    z-index: 2;
    max-width: 1200px;
    // padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 1024px){
        grid-row-start: 1;
    }
    
`;

export const AppointmentH1 = styled.h1`
    color: #000;
    font-size: 48px;z-index: 2;
    text-align: center;
    font-family: 'Encode Sans', sans-serif;
    font-display: swap;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
    @media screen and (max-width: 335px){
        font-size: 25px;
    }
`;
export const AppointmentH2 = styled.h2`
color: gray;
font-size: 20px;
z-index: 1;
text-align: center;
font-family: 'Encode Sans', sans-serif;
font-display: swap;
font-weight:normal;
@media screen and (max-width: 767px){
    font-size: 16px;
    padding: 20px 10% 0px 10%;
}

@media screen and (max-width: 480px){
    font-size: 16px;  
    padding-top:20px; 
}
@media screen and (max-width: 335px){
    font-size: 13px;
}
`;

export const BookButton = styled.a`
    background: #ffa800;
    color: #fff;
    padding: 20px 150px;
    text-decoration: none;
    font-size: 20px;
    transition: 0.7s;
    margin-top: 50px;
    &:hover{
        background: #fff;
        border: 1px solid #ffa800;
        color: #ffa800;
        transition: 0.3s;
    }
    @media screen and (max-width: 768px){
        padding: 15px 130px;
    }
    @media screen and (max-width: 335px){
        padding: 10px 70px;
    }
`