import styled from 'styled-components'
import {Link as LinkG} from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css'
export const Bg = styled.div`
    overflow-x: hidden;
    margin-top: -10px;
`
export const ShowMore = styled.p`
    margin-top: 10px;
    :hover{
        color: #3366FF;
    }
`
export const ServicesH1 = styled(LinkG)`
@media screen and (min-width: 769px){
    font-size: 2.5rem;
    margin-bottom: 30px;
    margin-top: 50px;
    // font-family: 'Encode Sans', sans-serif;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    z-index: 2;
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
        width: 0%;
    }

    &:hover:after { 
        width: 100%; 
        left: 0; 
    }
}
@media screen and (max-width: 768px){
    font-size: 2.5rem;
    margin-bottom: 30px;
    margin-top: 50px;
    // font-family: 'Encode Sans', sans-serif;
    color: #fff;
    text-decoration: none;
    display: inline-block;
    z-index: 2;
    position: relative;

    &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 0%;
        position: absolute;
        background: #FFA800;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 100%;
    }
}
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServiceContainer = styled.div`
    margin-top: 0px;
    display: flex;
    min-width: 100%;
    padding-bottom: 100px;
    flex-direction: column;
    background-color: #1A1A1A !important;
    justify-content: center;
    overflow-x: hidden;
    z-index: 2;
    align-items: center;

`   
export const ServiceCards = styled.div`

    margin: 50px auto;
    display: grid;
    z-index: 2;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 100px;
    padding: 0 50px;
    
    @media screen and (max-width: 1300px){
        grid-gap: 48px;
    }
    @media screen and (max-width: 1150px){
        grid-gap: 30px;
    }
    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        padding: 0 16px;
        grid-gap: 20px;
    }
    @media screen and (max-width: 400px){
        grid-template-columns: 1fr;
        padding: 0 16px;
    }
`


export const ServiceCard = styled.div`

    display: flex;
    flex-direction: column;
    z-index: 2;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    height: 310px;
    width: 335px;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    background: #fff;

    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 1300px){
        width: 325px;
        height: 300px;
    }

    @media screen and (max-width: 1130px){
        width: 305px;
    }
    @media screen and (max-width: 1050px){
        width: 290px;
        height: 290px
    }
    @media screen and (max-width: 610px){
        width: 260px;
        height: 280px;
    }
    @media screen and (max-width: 610px){
        width: 220px;
        height: 260px;
    }
    @media screen and (max-width: 490px){
        width: 210px;
        height: 240px;
    }
    @media screen and (max-width: 460px){
        width: 210px;
    }
    @media screen and (max-width: 445px){
        width: 190px;
        height: 230px;
    }
    @media screen and (max-width: 426px){
        width: 185px;
        height: 215px;
    }
    @media screen and (max-width: 416px){
        width: 180px;

    }
    @media screen and (max-width: 400px){
        width: 285px;
        height: 220px;
    }
    @media screen and (max-width: 305px){
        width: 100%;
    }




`;
export const BackServiceCard = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 2;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 30px;
    height: 300px;
    width: 325px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    background: #fff;

    @media screen and (max-width: 305px){
        width: 100%;
    }
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 1300px){
        width: 325px;
        height: 300px;
    }

    @media screen and (max-width: 1130px){
        width: 300px;
    }
    @media screen and (max-width: 1050px){
        width: 290px;
        height: 290px
    }
    @media screen and (max-width: 610px){
        width: 260px;
        height: 280px;
    }
    @media screen and (max-width: 610px){
        width: 220px;
        height: 260px;
    }
    @media screen and (max-width: 490px){
        width: 210px;
        height: 240px;
    }
    @media screen and (max-width: 460px){
        width: 200px;
    }
    @media screen and (max-width: 445px){
        width: 190px;
        height: 230px;
    }
    @media screen and (max-width: 426px){
        width: 185px;
        height: 215px;
    }
    @media screen and (max-width: 416px){
        width: 180px;
    }
    @media screen and (max-width: 400px){
        width: 285px;
        height: 225px;
    }
    @media screen and (max-width: 305px){
        width: 100%;
    }
    
`;


export const ServiceTitle = styled.h2`
    font-size: 1.7 rem;
    margin-top: 20px;
    z-index: 2;
    color: #000;


     @media screen and (max-width: 1100px){
       font-size: 1.3rem;
       margin-top:49px;
     }
     @media screen and (max-width: 610px){
        font-size: 1.1rem;
        margin-top: 37px;
    }
     @media screen and (max-width: 490px){
        margin-top: 27px;
    }
    @media screen and (max-width: 445px){
        font-size: 1rem;
        margin-top: 24px;
      }
    @media screen and (max-width: 425px){
        font-size: 0.9rem;
        margin-top: 20px;
      }
    @media screen and (max-width: 400px){
        font-size: 1.2rem;
        margin-top: 20px;
      }

`   
export const ServiceP = styled.p`
   font-size: 1 rem;
   color: black;
   z-index: 2;
//    font-family: 'Encode Sans', sans-serif;
     @media screen and (max-width: 768px){
       font-size: 0.7rem;
     }
`

export const ServiceDetails = styled.p`
    font-size: 1rem;
    color: #000;
    z-index: 2;

    text-align: center;
    // font-family: 'Encode Sans', sans-serif;
    `
export const BacksideList = styled.ul`
 list-style-type: none;
`
export const BacksideItem = styled.li`
// font-family: 'Encode Sans', sans-serif;
margin-top: 40px;
z-index: 2;
@media screen and (max-width: 768px){
    align-items: center;
    border-radius: 10px;
    min-height: 30px;
    margin-top: 30px;
    font-size: 0.7rem;
}
`
export const BacksideLearn = styled(LinkG)`
color: #3366FF;
font-size: 14px;
text-align: right;
position: absolute;
text-decoration: none;
bottom: 20px;
font-weight: bold;
right: 26px;
  @media screen and (max-width: 1060px){
    font-size: 11px;

}
@media screen and (max-width: 610px){
    font-size: 10px;

}
@media screen and (max-width: 490px){

}
  @media screen and (max-width: 445px){
    font-size: 9px;

}

  @media screen and (max-width: 400px){
    font-size: 12px;
}



`
export const BacksideTitle = styled.h2`
    font-size: 18px;
    color: #2D2D2E;
    margin-top:0px;
    font-weight: bold;
    text-align: left;
    @media screen and (max-width: 1060px){
        font-size: 17px;
        
      }
    @media screen and (max-width: 610px){
        font-size: 16px;
      }
    @media screen and (max-width: 490px){
        font-size: 14px;
      }
    @media screen and (max-width: 445px){
        font-size: 13px;
      }
    @media screen and (max-width: 400px){
        font-size: 16px;
      }
 
`  
export const BacksideDetails = styled.p`
font-size: 15px;
color: gray;
text-align: left;
margin-top: 20px;

@media screen and (max-width: 1060px){
    font-size: 14px;
    
  }
@media screen and (max-width: 610px){
    font-size: 12px;
    margin-top:8px;
  }
@media screen and (max-width: 490px){
    font-size: 12px;
    
  }
@media screen and (max-width: 460px){
    font-size: 11px;
    
  }
@media screen and (max-width: 426px){
    font-size: 10px;
    
  }
@media screen and (max-width: 420px){
    font-size: 10px;
    
  }
@media screen and (max-width: 400px){
    font-size: 13px;
    
  }

`