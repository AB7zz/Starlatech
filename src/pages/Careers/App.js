import React, {useState} from 'react'
import './style.css'
import { CareerContainer, CareerWrapper, Heading, FormWrapper, Form, SubmitBtn, Input } from './elements.js'
import Navbar from '../../components/BlackNavbar'
import Sidebar from '../../components/BlackSidebar'
import swal from 'sweetalert';
import 'firebase/storage'
import '@firebase/storage';
import {db} from './firebase.js'
import {storage} from './firebase.js'
import Particles from 'react-particles-js';

const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [file, setFilename] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        storage.ref().child(file.name).put(file).then(()=>{
            console.log("Uploaded CV");
        });
        db.collection('careers-user-info').add({
            name: name,
            email: email,
            phone: phone,
            position: position,
            file: file.name,
        })
        .then(()=>{
            swal('Your CV has succesfully been sent!');
        })
        .catch((error) => {
            alert(error.message);
        })
        setName('')
        setEmail('')
        setPhone('')
        setPosition('');
        setFilename('');
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <><div className="particles">
            <Particles
          params={{
            "particles": {
                "number": {
                    "value": 80
                },
                "size": {
                    "value": 3
                },
                "color": {
                    "value": "#000"
                },
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": {
                  "value": "#000000"
                },
                "opacity": 0.4,
                "width": 1
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
      <div className="particles2">
            <Particles
          params={{
            "particles": {
                "number": {
                    "value": 80
                },
                "size": {
                    "value": 3
                },
                "color": {
                    "value": "#000"
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
        <div id="careers">
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            {/* <Navbar /> */}
            <CareerContainer>
                <CareerWrapper>
                    <Heading>Apply now</Heading>
                    <FormWrapper>
                        <Form onSubmit={handleSubmit}>
                            <Input id="name" placeholder="Enter Name" type="text" name="name" 
                                value={name}
                                onChange={e => setName(e.target.value )}
                            />
                            <Input id="email" placeholder="Enter Email" type="email" name="email" 
                                value={email}
                                onChange={e => setEmail(e.target.value )}
                            />
                            <Input id="phone" placeholder="Enter Phone" type="text" name="phone" 
                                value={phone}
                                onChange={e => setPhone(e.target.value )}
                            />
                            <select 
                                value={position}
                                onChange={e => setPosition(e.target.value )}
                                name="position"
                            >
                                <option value="">--Select Position--</option>
                                <option value="UI and UX Web Designer">UI/UX Web Designer</option>
                                <option value="Web Developer">Web Developer</option>
                            </select>
                            <label className="filebutton" for="upload-position">Upload Resume</label>
                            <input onChange={e => setFilename(e.target.files[0])} type="file" name="cv" id="upload-position" />
                            <SubmitBtn type="submit">Submit</SubmitBtn>
                        </Form>
                    </FormWrapper>
                </CareerWrapper>
            </CareerContainer>
        </div>
        </>
    )
}

export default App
