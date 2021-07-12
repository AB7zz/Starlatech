import styled from 'styled-components'

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; //make it 1fr 2fr if you want the rigth side bigger, and 2fr 1fr if you want the left side bigger 
    justify-content: center;
    grid-gap: 190px;
    align-items: center;
    background: transparent;
    overflow-x: hidden;
    padding: 70px 180px 70px 180px;
    // height: 500px;
    position: relative;
    z-index: 0;
    @media only screen and (max-width: 900px) {
        grid-gap: 70px;
    }
    @media only screen and (max-width: 600px) {
        grid-gap: 40px;
        // height: 200px;
        // padding-bottom: 250px;
    
    }

    @media only screen and (max-width: 380px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 90px;
        // height: 600px;
    }
    @media only screen and (max-width: 359px) {
        grid-template-columns: 1fr;
        grid-gap: 0px;
        // height: 1100px;
        padding-left: 50px;
        padding-right: 50px;
    }

`
export const Stats = styled.div`


`
export const Stats2 = styled.div`
    display: none;
    @media only screen and (max-width: 380px) {
        display: unset;
    }

`
export const VisibilitySensor  = styled.div`

`
export const StatsTitle =styled.h2`
    text-align: center;
    font-size: 38px;
    font-weight: normal;
    color: #fff;
    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`
export const StatsPara = styled.p`
    color: gray;
    text-align: center;
    margin-top: 7px;
    @media screen and (max-width: 600px){
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
    }
`

export const StatsHeading = styled.h4`
margin-top: 20px;
text-
align:center;
font-size: 21px;
color: #fff;
@media only screen and (max-width: 600px) {
    font-size: 16px;
}
@media only screen and (max-width: 450px) {
    font-size: 12px;
}
@media only screen and (max-width: 380px) {
    font-size: 16px;
}
`
export const StatsDescription = styled.p`
text-align:center;
margin-top: 10px;
font-size: 13px;
color: #d3d3d3;
@media only screen and (max-width: 600px) {
    font-size: 12px;
}
@media only screen and (max-width: 450px) {
    font-size: 9px;
}
@media only screen and (max-width: 380px) {
    font-size: 12px;
}
`
export const Bg2 = styled.div`
    background: #1A1A1A;
    overflow-x: hidden;
`