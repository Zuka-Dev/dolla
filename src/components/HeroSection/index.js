import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import{HeroContainer, HeroBg, VideoBg, HeroH1, HeroContent, HeroBtnWrapper, HeroP,ArrowForward,ArrowRight }from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHoverHandler =()=> setHover(!hover)
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and recieve $250 in credit towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHoverHandler} primary='true' dark='true'>
                        Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
