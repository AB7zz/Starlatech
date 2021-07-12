import React from 'react'
import {Language2, LanguageContainer,LanguageRight,LanguageLeft,LanguageH1,LanguageH2} from './elements';
import './style.css'
import ProgressiveImage from 'react-progressive-graceful-image'
const Language = () => {
    return (
        <>
        <div id="language" className="container23">
        <LanguageContainer>
            <LanguageLeft>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_100,h_100/v1625109381/react_i2qc4c.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_100,q_1/v1625109381/react_i2qc4c.png'>
                        {(src) => <img alt="ReactJS" className='dog1' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_95,h_95/v1625109483/angular_ov05nj.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109483/angular_ov05nj.png'>
                        {(src) => <img alt="Angular" className='dog2' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,h_130,w_130/v1625109509/php_o5tut8.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,h_20,w_20,q_1/v1625109509/php_o5tut8.png'>
                    {(src) => <img alt="PHP" className='dog3' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_150,h_150/v1625109573/mysql_tzdqyk.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109573/mysql_tzdqyk.png'>
                        {(src) => <img alt="MySQL" className='dog4' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_100,h_100/v1625109602/firebase_snhl5j.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109602/firebase_snhl5j.png'>
                        {(src) => <img alt="Firebase" className='dog5' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_120,h_120/v1625109641/django_ywtqck.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109641/django_ywtqck.png'>
                        {(src) => <img alt="DJango" className='dog6' src={src} />}
                    </ProgressiveImage>
                    </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_120,h_120/v1625109677/cloudinary_tjlwfa.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109677/cloudinary_tjlwfa.png'>
                        {(src) => <img alt="Cloudinary" className='dog7' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_130,h_130/v1625109706/html2_vyzzaz.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109706/html2_vyzzaz.png'>
                        {(src) => <img alt="HTML" className='dog8' src={src} />}
                    </ProgressiveImage>
                </Language2>
                <Language2>
                    <ProgressiveImage src='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_130,h_130/v1625109747/css_rb0ctb.png' placeholder='https://res.cloudinary.com/starla/image/upload/f_auto,c_scale,w_20,h_20,q_1/v1625109747/css_rb0ctb.png'>
                        {(src) => <img alt="CSS" className='dog9' src={src} />}
                    </ProgressiveImage>
                </Language2>
            </LanguageLeft>
            <LanguageRight>
                <LanguageH1>Technologies we use</LanguageH1>
                <LanguageH2>We use the hottest programming languages and frameworks</LanguageH2>
            </LanguageRight>
        </LanguageContainer>
        </div>
    </>
    )
}

export default Language