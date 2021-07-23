import React, {useState} from 'react'
import {IconContext} from 'react-icons/lib'
import {FaCheck} from 'react-icons/fa'
import {FaTimes} from 'react-icons/fa'
import './style.css'
import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'
import Navbar from '../../components/BlackNavbar'
import Sidebar from '../../components/BlackSidebar'
import Footer from '../../components/Footer'
import {CardContainer2, FirstFourDescription2, FirstFourDollar2, FirstFourTag2, FirstFourTitle2 ,SecondCheck2,FirstPart, Card, CardBtn, CardContainer, CardFeatures,SecondPart, MobileDelete2,PricingHeading,Div2Special,Div3Special, DivSpecial, PricingLine,MobileDelete,Btn, FirstFour,Div,FirstFourTitle,FirstFourDescription,ThirdFour,Div3,SecondCheck,FirstFourDollar,FirstFourTag, Div2,SecondFour,SecondFourSTitle} from './PackagesElements'
export const Button = styled(LinkS)`
    background: black;
    text-align: center;
    padding: 10px 0 10px 0;
    color: #fff;
    width: 85%;
    margin-top: 35px;

    &:hover{
        background: darkgrey;
    }
    @media screen and (max-width: 968px){
        padding: 0.5rem 1.2rem;
    }
`

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <IconContext.Provider value={{color: "#fff", size: 64}}>
        <PricingHeading>Affordable Pricing Packages</PricingHeading>
        <PricingLine>To suit your induvidual wants</PricingLine>
        <MobileDelete>
          
            <FirstFour>
                <Div>
                
                </Div>
                <Div>   
                    <FirstFourTitle>Landing Page</FirstFourTitle>
                    <FirstFourDescription>One page website to kickstart your business</FirstFourDescription>
                    <FirstFourDollar><span className='biggerspan'><sup className='dolla'>$</sup>299</span></FirstFourDollar>
                    <FirstFourTag><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag>
                </Div>
                <div className='bluebanner'>Best Value</div>
                <DivSpecial>
                    <FirstFourTitle>Multi-Page Site</FirstFourTitle>
                    <FirstFourDescription>Unlimited pages website to promote your business</FirstFourDescription>
                    <FirstFourDollar><span className='biggerspan'><sup className='dolla'>$</sup>499</span></FirstFourDollar>
                    <FirstFourTag><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag>
                   
                </DivSpecial>
                <Div>
                    <FirstFourTitle>Ecommerce / B2C Website</FirstFourTitle>
                    <FirstFourDescription>Full fledged website to reach to your customer</FirstFourDescription>
                    <FirstFourDollar><span className='biggerspan'><sup className='dolla'>$</sup>3899</span></FirstFourDollar>
                    <FirstFourTag><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag>
                </Div>
            </FirstFour>
            
            {/* Second Table */}

            <SecondFour>
                <Div2>
                    <SecondFourSTitle>Source code</SecondFourSTitle>
                    <SecondFourSTitle>Graphic Design</SecondFourSTitle>
                    <SecondFourSTitle>Design Assitance</SecondFourSTitle>
                    <SecondFourSTitle>Web Security</SecondFourSTitle>
                    <SecondFourSTitle>SEO</SecondFourSTitle>
                    <SecondFourSTitle>Unlimited Pages</SecondFourSTitle>
                    <SecondFourSTitle>Payment Gateway</SecondFourSTitle>
                    <SecondFourSTitle>Signup/Login</SecondFourSTitle>
                    <SecondFourSTitle>Chat</SecondFourSTitle>
                    <SecondFourSTitle>Free Hosting</SecondFourSTitle>
                    <SecondFourSTitle>Admin Page (for product management)</SecondFourSTitle>
                    
                </Div2>
                <Div2>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>


                </Div2>
                <Div2Special>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                    </SecondCheck>
                </Div2Special>
                <Div2>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                    <SecondCheck>
                    <span className='checkmark'><FaCheck style={{height: '18', width: '20',color: '#000'}}/></span>
                    </SecondCheck>
                </Div2>
               
            </SecondFour>

            {/* THIRD FOUR */}
            <ThirdFour>
                <Div3></Div3>
                <Div3>   
                    <Btn href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
                </Div3>
                <div className='whitebox'></div>
                <Div3Special>
                <Btn colorblack={true} bggold={true} href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
                </Div3Special>
                <Div3>
                <Btn href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
                </Div3>
            </ThirdFour>
            
        </MobileDelete>

















        <MobileDelete2>
            <CardContainer>
                {/* MOBILE VIEW CARD 1 */}
            <Card>
                    <FirstPart>
                    <FirstFourTitle2>Landing Page</FirstFourTitle2>
                    <FirstFourDescription2>One page website to kickstart your business</FirstFourDescription2>
                    <FirstFourDollar2><span className='biggerspan2'><sup className='dolla2'>$</sup>299</span></FirstFourDollar2>
                    <FirstFourTag2><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag2>
                    </FirstPart>
                    <hr class="solid"></hr>
                     

                     <SecondPart></SecondPart>
                     <SecondPart></SecondPart>
      
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Source code</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Graphic Design</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Design Assitance</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Web Security</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>SEO</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Unlimited Pages</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Signup/Login</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Chat</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Free Hosting</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <hr class="solid"></hr>
                <CardBtn>  
                    <Btn href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
               </CardBtn>
            </Card>
            {/* MOBILE VERSION CARD 2 */}
            <Card>
                    <FirstPart>
                    <FirstFourTitle2>Multi-Page Site</FirstFourTitle2>
                    <FirstFourDescription2>Unlimited pages website to promote your business</FirstFourDescription2>
                    <FirstFourDollar2><span className='biggerspan2'><sup className='dolla2'>$</sup>499</span></FirstFourDollar2>
                    <FirstFourTag2><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag2>
                    </FirstPart>
                    <hr class="solid"></hr>
                     

                     <SecondPart></SecondPart>
                     <SecondPart></SecondPart>
      
                    <SecondPart>
                    <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Source code</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Graphic Design</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Design Assitance</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Web Security</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>SEO</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Unlimited Pages</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Signup/Login</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Chat</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Free Hosting</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                        <span ><FaTimes style={{height: '22', width: '23',color: 'lightgray'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <hr class="solid"></hr>
                <CardBtn>  
                    <Btn colorblack={true} bggold={true} href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
               </CardBtn>
            </Card>
            </CardContainer>
            <CardContainer2>
                           {/* MOBILE VIEW CARD 3 */}
            <Card>
                    <FirstPart>
                    <FirstFourTitle2>Ecommerce / B2C website</FirstFourTitle2>
                    <FirstFourDescription2>Full fleged website to reach to your customer</FirstFourDescription2>
                    <FirstFourDollar2><span className='biggerspan2'><sup className='dolla2'>$</sup>3899</span></FirstFourDollar2>
                    <FirstFourTag2><span>This is a one time fee</span><span className='span2'>No hidden fee</span></FirstFourTag2>
                    </FirstPart>
                    <hr class="solid"></hr>
                     

                     <SecondPart></SecondPart>
                     <SecondPart></SecondPart>
      
                    <SecondPart>
                    <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Source code</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Graphic Design</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Design Assitance</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Web Security</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>SEO</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Unlimited Pages</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Signup/Login</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Chat</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Free Hosting</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <SecondPart>
                        <SecondCheck2>
                            <span><FaCheck style={{height: '18', width: '20',color: '#ffa800'}}/></span>
                        <CardFeatures>Payment Gateway</CardFeatures>        </SecondCheck2>
                    </SecondPart>
                    <hr class="solid"></hr>
                <CardBtn>  
                    <Btn href="https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/">Get Offer</Btn>
               </CardBtn>
            </Card>
            </CardContainer2>
        </MobileDelete2>
      
        </IconContext.Provider>
        <Footer />
        </>
    )
}

export default App