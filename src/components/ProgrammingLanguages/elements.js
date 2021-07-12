import styled from 'styled-components';


export const LanguageContainer = styled.div`
overflow-x:hidden;
display: grid;
grid-template-columns: 1fr 1fr;
justify-content: center;
align-items: center;
padding: 0px 0px 100px 0px;
margin-top: 100px;
margin-right: 30px;
margin-left: 30px;
margin-bottom: 20px;
position: relative;
z-index: 3;


@media screen and (max-width: 768px){
    margin-top: 70px;
    grid-template-columns: 1fr;

}


:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
}

`;

export const LanguageLeft = styled.div`

    display: grid;
    
    margin: auto;
    justify-content: center;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 25px;
    @media screen and (max-width: 1100px){
        margin-top:70px;
        column-gap: 60px;
        row-gap: 40px;
    }
    @media screen and (max-width: 950px){
        margin-top:70px;
        row-gap: 40px;
        column-gap: 50px;
    }
    @media screen and (max-width: 768px){
        column-gap: 75px;
        row-gap: 20px ;
    }
    @media screen and (max-width: 390px){
        column-gap: 45px;
    }
    @media screen and (max-width: 326px){
        column-gap: 26px;
    }
    @media screen and (max-width: 280px){
        column-gap: 20px;
    }

`;
export const LanguageRight = styled.div`
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-row-start: 1;
    }
    
`;

export const LanguageH1 = styled.h1`
    color: #000;
    font-size: 48px;z-index: 2;
    text-align: center;
    font-family: 'Encode Sans', sans-serif;
    font-display: swap;

    @media screen and (max-width: 1100px){
        font-size: 36px;
    }

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 540px){
        font-size: 32px;
    }
    @media screen and (max-width: 420px){
        font-size: 29px;
    }
    @media screen and (max-width: 393px){
        font-size: 24px;
    }
    @media screen and (max-width: 315px){
        font-size: 21px;
    }
`;
export const LanguageH2 = styled.h2`
color: gray;
font-size: 24px;
z-index: 1;
text-align: center;
font-family: 'Encode Sans', sans-serif;
font-display: swap;
font-weight:normal;

@media screen and (max-width: 1100px){
    font-size: 20px;
}

@media screen and (max-width: 768px){
    font-size: 16px;
}
@media screen and (max-width: 540px){
    font-size: 15px;
}

@media screen and (max-width: 480px){
    font-size: 14px;  
}
@media screen and (max-width: 393px){
    font-size: 12px;
}
@media screen and (max-width: 315px){
    font-size: 11px;
}
`;

export const BookButton = styled.a`
    background: #ffa800;
    color: #fff;
    padding: 20px 150px;
    text-decoration: none;
    font-size: 20px;
    transition: 0.7s;
    &:hover{
        background: #fff;
        border: 1px solid #ffa800;
        color: #ffa800;
        transition: 0.3s;
    }
    @media screen and (max-width: 280px){
        padding: 15px 80px;
    }
`

export const Language2 = styled.div`

`