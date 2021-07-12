import styled from 'styled-components';
export const PricingHeading = styled.h1`
    text-align: center;
    margin-top: 150px;

    @media screen and (max-width: 490px){
        font-size: 26px;
    }
    @media screen and (max-width: 330px){
        font-size: 20px;
    }
`

export const Table = styled.div`
`
export const PricingLine = styled.h3`
    color: gray;
    text-align: center;
    font-weight: lighter;
`
export const MobileDelete = styled.div`
    display: flex;
    margin-top:40px;
    height: 1550px;
    flex-direction: column;
    position: relative;
    padding: 0px 80px 0px 80px;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 1135px) {
        display: none;
    }
    
    
`
export const FirstFour = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 0px;
    display:flex;
    flex-direction:row;
    align-items: center;
    display:flex;
    background: #fff;
    z-index: 0;
`
export const ThirdFour = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 0px;
    display:flex;
    flex-direction:row;
    align-items: center;
    display:flex;
    background: #fff;
    z-index: 0;
`

export const Div = styled.div`
    border: 1px solid #e8e7eb;
    width:282px !important;
    height: 260px;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    padding: 40px 20px;

    
`
export const DivSpecial = styled.div`
box-shadow: 0 15px 30px 0 rgb(22 14 51 / 10%);
border: 0;
    width:282px !important;
    height: 260px;
    border: none;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    padding: 40px 20px;
    
`

export const Div3 = styled.div`
    border: 1px solid #e8e7eb;
    width:282px !important;
    height: 90px;
    box-sizing: border-box;
    text-align: center;
    padding: 15px;
    
`
export const Div3Special = styled.div`
box-shadow: 0 15px 30px 0 rgb(22 14 51 / 10%);
border: 0;
    width:282px !important;
    height: 90px;
    box-sizing: border-box;
    text-align: center;
    padding: 15px;
    
`

export const FirstFourTitle = styled.p`
    font-weight: 600;
    line-height: 30px;
    width: 240px;
    font-size: 16px;

`

export const FirstFourDescription = styled.p`
    line-height: 18px;
    color: #736E84;
    font-size: 14px;
`

export const FirstFourDollar = styled.p`
    line-height: 56px;
    font-weight: bold;
    font-size: 36px;

`
export const FirstFourTag = styled.p`
    font-size: 12px;
    line-height: 20px;
    color: #a19ead;
`
export const SecondFour = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    grid-gap: 0px;
    display:flex;
    flex-direction:row;
    background: #fff;
    z-index: 0;
`
export const Div2 = styled.div`
    border: 1px solid #e8e7eb;
    width:282px !important;
    height: 900px;
    display: flex;
    flex-direction: row;
    padding-left: 0;
    font-size: 14px;
    padding: 20px;
    display:inline-block;
    box-sizing: border-box;
    padding: 20px;
`
export const Div2Special = styled.div`
    border: none;
    width:282px !important;
    height: 900px;
    display: flex;
    flex-direction: row;
    padding-left: 0;
    box-shadow: 0 15px 30px 0 rgb(22 14 51 / 10%);
    border: 0;
    font-size: 14px;
    padding: 20px;
    display:inline-block;
    box-sizing: border-box;
    padding: 20px;
`

export const SecondFourTitle = styled.p`
    text-align: left;
    font-size: 12px;
    min-width:241px;
    min-height: 18px;
    margin-top: 30px;
    margin-bottom: 20px;

`

export const SecondFourSTitle = styled.div`
    margin-bottom: 20px;
    margin-top:30px;
    min-width:241px;
    min-height: 43px;
    text-align: left;
    display: flex;
    font-size: 14px;
`
export const SecondCheck = styled.div`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    line-height: 1.5;
        align-content: center;
    justify-content: center;
    position: relative;
    display: flex;
    min-height: 20px;
    min-width: 240px;
`

export const Btn = styled.a`
display: inline-block;
// font-weight: bold;
text-align: center;
white-space: nowrap;
vertical-align: middle;
user-select: none;
border: 1px solid #e8e7eb;
width: 100%;
color: ${({colorblack}) => (colorblack ? '#fff' : '#ffa800')};
background: ${({bggold}) => (bggold ? '#ffa800' : '#fff')};
border-radius: 4px;
border-color: #ffa800;
transition: all 0.15s ease-in-out;
font-size: 16px;
line-height: 20px;
padding: 19px 35px;
text-decoration: none;
cursor: pointer;
// &:hover{
//     background: transparent;
//     color: #5835C5;
//     border-color: #5835C5
// }


}
`;



























// SECOND

export const MobileDelete2 = styled.div`
    display: flex;
    margin-top:40px;
    // height: 5550px;
    flex-direction: column;
    position: relative;
    padding: 0px 80px 0px 80px;
    align-items: center;
    justify-content: center;
    @media only screen and (min-width: 1135px) {
        display: none;
    }
    
`
export const Card = styled.div`
    background: #fff;
    border: 1px solid #e8e7eb;
    border-radius: 4px;
    padding: 40px 20px;
    width: 330px;
    height 1000px;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    
    @media screen and (width: 540px){
        width: 230px;
    }
    @media screen and (max-width: 330px){
        padding-left: 40px;
        width: 90%;
    }
    


`
export const CardHeading = styled.h4``
export const CardFeatures = styled.h4`
    display:flex;
    margin-left: 10px;
    font-weight: lighter;
    text-align: left;
`
export const CardContainer = styled.div`
// margin-top:700px !important;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    grid-gap: 0px;
    flex-direction: row;
    background: #fff;
    z-index: 0;
    align-items: center;
    grid-gap: 100px;
    @media screen and (max-width: 770px){
        grid-gap: 50px;
    }

    @media screen and (max-width: 725px){
        // margin-top: 1500px !important;
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const CardContainer2 = styled.div`

    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-gap: 0px;
    flex-direction: row;
    background: #fff;
    z-index: 0;
    margin-top: 50px;
    align-items: center;
    grid-gap: 100px;


    @media screen and (max-width: 500px){
        padding: 0 20px;
    }
`

export const CardBtn = styled.div`
width:282px !important;
height: 90px;
box-sizing: border-box;
text-align: center;
padding: 15px;
`

export const FirstPart = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
    
`

export const SecondPart = styled.div`
    align-items: left;
    justify-content: left;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-sizing: border-box;
    padding-bottom: 20px;
`
export const SecondCheck2 = styled.div`
    font-size: 1rem;
    display: flex;
    line-height: 1.5;
    position: relative;
    display: flex;
    min-height: 20px;
    min-width: 240px;
`
export const FirstFourTitle2 = styled.h1`
color: #160E33;
    font-size: 20px;
    margin-top: 30px;
    line-height: 30px;
    font-weight: 600;


`

export const FirstFourDescription2 = styled.p`
    line-height: 18px;
    color: #736E84;
    padding: 5px 0;
    font-size: 14px;
`

export const FirstFourDollar2 = styled.p`
    font-weight: 500;
    font-size: 66px;
    line-height: 80px;
}

`
export const FirstFourTag2 = styled.p`
    font-size: 14px;
    line-height: 25px;
    color: #a19ead;
    margin-bottom: 60px;
`