import styled from 'styled-components'
export const ModernizeContainer = styled.div`
    // margin-top: 70px;
    margin-bottom: 100px;
    position: relative;
    z-index: 3;
    justify-content: center;
    align-items: center;

    
`
export const ModernizeWrapper = styled.div`
    padding-top: 100px;
    position: relative;
    z-index: 3;
    justify-content: center;
    align-items: center;
    @margin screen and (max-width: 768px){
        padding-top: 70px;
    }
`

export const HeadingWrapper = styled.div`
    justify-content: center;
    text-align: center;
`

export const ModernizeH1 = styled.h1`
    font-size: 53px;
    line-height: 60px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 30px;
        padding: 0px 20px 0px 20px;
    }
    @media screen and (max-width: 280px){
        font-size: 30px;
    }
`
export const ModernizeP = styled.p`
    font-size: 18px;
    color: #736E84;
    text-align: center;
    padding-top: 20px;
    padding-right: 10px;
    @media screen and (max-width: 615px){
        padding-right: 25px;
        padding-left: 25px;
    }
`
export const StepsWrapper = styled.div`
    margin-top: 100px;
    display: grid;
    grid-gap: 65px;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0px 200px 0px 200px;
    max-width: 100%;
    @media screen and (max-width: 1130px){
        padding: 0px 65px 0px 65px;
        grid-gap: 25px;
    }
    @media screen and (max-width: 920px){
        padding: 0px 25px 0px 25px;
    }
    @media screen and (max-width: 877px){
        padding: 0px 15px 0px 15px;
    }
    @media screen and (max-width: 767px){
        grid-gap: 25px;
        grid-template-columns: 1fr;
        padding: 0px 10px 0px 15px;
    }

    @media screen and (width: 768px){
        grid-gap: 25px;
        padding: 0px 60px 0px 60px;
    }

`
export const Step = styled.div`
@media screen and (max-width: 767px){
    margin-bottom: 50px;
}
`
export const StepH1 = styled.h1`
    font-size: 22px;
    display: flex;
    @media screen and (max-width: 835px){
        font-size: 18px;
    }
    @media screen and (max-width: 767px){
        font-size: 22px;
        text-align: center !important;
    }
`
export const StepP = styled.p`
    font-size: 16px;
    color: #736E84;
    padding-top: 20px;
    line-height: 25px;
    @media screen and (max-width: 835px){
        font-size: 14px;
    }
    @media screen and (max-width: 767px){
        font-size: 16px;
        text-align: center;
        padding-left: 25px;
        padding-right: 25px;
    }
`