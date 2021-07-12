import React from 'react'
import {AppointmentContainer,AppointmentRight,AppointmentLeft,AppointmentH1,AppointmentH2,BookButton} from './AppointmentElements';
import './Appointment.css'
import ProgressiveImage from 'react-progressive-graceful-image'
const Appointment = () => {
    return (
        <>
        <div id="bookapp">
        <AppointmentContainer>
            <AppointmentLeft>
                <AppointmentH1>Made up your mind?</AppointmentH1>
                <AppointmentH2>Book an appointment to discuss your website idea with us</AppointmentH2>
                <BookButton href='https://outlook.office365.com/owa/calendar/Starlatech@GEMSELEARNING.onmicrosoft.com/bookings/'>Book</BookButton>
            </AppointmentLeft>
            <AppointmentRight>
            <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_700,h_500/v1625110105/appointment1_syygqo.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,q_1,c_scale,w_20,h_20/v1625110105/appointment1_syygqo.png'>
                {(src) => <img alt="Appointment" className="image1" src={src} />}
            </ProgressiveImage>
            </AppointmentRight>
        </AppointmentContainer>
        </div>
    </>
    )
}

export default Appointment