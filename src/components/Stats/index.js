import React from 'react'
import { useState} from 'react';
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import VisibilitySensor from "react-visibility-sensor";
import '../HeroSection/style.css';
import 'react-circular-progressbar/dist/styles.css';
import {StatsContainer, Stats,Stats2,StatsTitle,StatsHeading,StatsDescription,Bg2, StatsPara} from './StatsElements'
import './style.css'
import '../HeroSection/style.css';

function Stat(){
    const [state ,setState] = useState({isActive : 'true'});
    const onChangeVisibility = isActive => {
        setState({ ...state, visible: isActive });
    }

    const [state2 ,setState2] = useState({isActive2 : 'true'});
    const onChangeVisibility2 = isActive2 => {
        setState2({ ...state2, visible: isActive2 });
    }

    const [state3 ,setState3] = useState({isActive3 : 'true'});
    const onChangeVisibility3 = isActive3 => {
        setState3({ ...state3, visible: isActive3 });
    }
    const [state4 ,setState4] = useState({isActive4 : 'true'});
    const onChangeVisibility4 = isActive4 => {
        setState4({ ...state4, visible: isActive4 });
    }
    return (
      <Bg2>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <StatsTitle><div className='basic-6'>Results that you will love</div></StatsTitle>
      <StatsPara>We are proud to present the average performance stats of our web applications</StatsPara>    
        <StatsContainer>   
 
            {/*THIRD*/}
            <Stats>
            <div className='statssize'>
            <VisibilitySensor    onChange={e => onChangeVisibility3(e)} active={!state3.visible}  >
            {({ isVisible }) => {
               const percentage = isVisible ? 98 : 0;  
              return (
              <CircularProgressbar value={percentage} text={`${percentage}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 2,
                pathColor: '#0CCE6B',
                textColor: '#0CCE6B',
                trailColor: '#E7FAF0',
              })} 
              />         
            );
            }}
          </VisibilitySensor>
          </div>
          <StatsHeading>Practices</StatsHeading>
          <StatsDescription>Based on coding, media and cache optimization</StatsDescription>
          </Stats>
          {/* THIRD ENDS */}
                      {/*FIRST*/}
                      <Stats>
            <div className='statssize'>
            <VisibilitySensor  onChange={e => onChangeVisibility(e)} active={!state.visible}  >
            {({ isVisible }) => {
               const percentage = isVisible ? 97 : 0;  
              return (
              <CircularProgressbar value={percentage} text={`${percentage}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 2,
                pathColor: '#0CCE6B',
                textColor: '#0CCE6B',
                trailColor: '#E7FAF0',
              })} 
              />         
            );
            }}
          </VisibilitySensor>
          </div>
          <StatsHeading>Performance</StatsHeading>
          <StatsDescription>Based on speed, bundle and layout optimization</StatsDescription>
          </Stats>
          {/* FIRST ENDS */}




            {/*SECOND*/}
            <Stats>
            <div className='statssize'>
            <VisibilitySensor    onChange={e => onChangeVisibility2(e)} active={!state2.visible}  >
            {({ isVisible }) => {
               const percentage = isVisible ? 90 : 0;  
              return (
              <CircularProgressbar value={percentage} text={`${percentage}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 2,
                pathColor: '#0CCE6B',
                textColor: '#0CCE6B',
                trailColor: '#E7FAF0',
              })} 
              />         
            );
            }}
          </VisibilitySensor>
          </div>
          <StatsHeading>Accessibility</StatsHeading>
          <StatsDescription>Based on usability with people with disabilities</StatsDescription>
          </Stats>
          {/* SECOND ENDS */}
          {/*FOURTH*/}
            <Stats2>
            <div className='statssize'>
            <VisibilitySensor    onChange={e => onChangeVisibility4(e)} active={!state4.visible}  >
            {({ isVisible }) => {
               const percentage = isVisible ? 93 : 0;  
              return (
              <CircularProgressbar value={percentage} text={`${percentage}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathTransitionDuration: 2,
                pathColor: '#0CCE6B',
                textColor: '#0CCE6B',
                trailColor: '#E7FAF0',
              })} 
              />         
            );
            }}
          </VisibilitySensor>
          </div>
          <StatsHeading>SEO</StatsHeading>
          <StatsDescription>Based upon how high a site ranks upon search</StatsDescription>
          </Stats2>
          {/* FOURTH ENDS */}

        </StatsContainer>
        </Bg2>
    )
}
export default Stat
