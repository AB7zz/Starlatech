import React, {useState} from 'react'
import Particles from 'react-particles-js';
import Navbar from '../../components/TransparentNavbar'
import Sidebar from '../../components/BlackSidebar'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';
import './style.css'
import { ContactContainer, ContactHeaderWrapper, Inputboxes, ContactTitle, ContactMainWrapper, ContactLocationWrapper, ContactPara, Map, Border, ContactFormWrapper, InputBox, TextArea, Button } from './elements';




const Home = () => {
    function sendEmail(e) {
        swal('Your message has succesfully been sent!');
        e.preventDefault();
        emailjs.sendForm('service_s2yr31j', 'template_uydl5bx', e.target, 'user_MzVXLN7rOfB1swxEYSxO0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
      <>  
      <div className="particles">
            <Particles
          params={{
            "particles": {
                "number": {
                    "value": 45
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }}
      /></div>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <ContactContainer>
            <ContactHeaderWrapper>
                <ContactTitle>Contact us</ContactTitle>
            </ContactHeaderWrapper>
            <ContactMainWrapper>
                <ContactLocationWrapper>
                    <ContactPara>Don't hesitate to give us a call or send us a message through the form</ContactPara>
                    <ContactPara>+971551271295</ContactPara>
                    <ContactPara>starlatech@gmail.com</ContactPara>
                    <Map width="450" height="220" alt='starlatechlocation' src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                </ContactLocationWrapper>
                <ContactFormWrapper>
                    <Border></Border>
                    <Inputboxes onSubmit={sendEmail}>
                        <InputBox type="text" name="name" placeholder="Name" /><br></br>
                        <InputBox type="text" name="email" placeholder="Email" /><br></br>
                        <InputBox type="text" name="subject" placeholder="Subject" /><br></br>
                        <TextArea height= "69px" name="message" type="text" placeholder="Your Message" />
                        <Button type="submit">
                            Submit Message
                        </Button>
                    </Inputboxes>
                    
                </ContactFormWrapper>
            </ContactMainWrapper>
        </ContactContainer>
        </>
    )
}

export default Home
