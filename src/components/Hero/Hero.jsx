import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
        {/* Left Side */}
        <div className="left-h">

            {/* Creating HEADER */}
            <Header/>

            {/* Creating THE BEST AD */}
            <div className="the-best-ad">
                <div></div>
                <span>the best fitness club in town</span>
            </div>

            
            <div className="hero-text">
                {/* Hero TEXT ("SHAPE YOUR IDEAL BODY")*/}
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>

                <div>
                    <span>Ideal body</span>
                </div> 
                {/* Sub TEXT (In here we will help you to shape and build your ideal body and live up your life to fullest) */}
                <div>
                    <span>
                        In here we will help you to shape and build your ideal body and live up your life to fullest                     
                    </span>
                </div>             
            </div>

            {/* Figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>EXPERT COACHES</span>
                </div>

                <div>
                    <span>+900</span>
                    <span>MEMBERS JOINED</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>FITNESS PROGRAMS</span>
                </div>
            </div>

            {/* Hero BUTTONS */}
            <div className="hero-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

        </div>
        {/* Right Side */}
        <div className="right-h">

            <button className='btn'>Join Now</button>

            <div className="heart-rate">
                <img src={Heart} alt="heart" />
                <span>heart rate</span>
                <span>116 bpm</span>
            </div>

            {/* Hero Images */}
            <img src={hero_image} alt="hero" className='hero-image' />
            <img src={hero_image_back} alt="hero-back" className='hero-image-back' />

            {/* Calories */}
            <div className="calories">
                
                <img src={calories} alt="calories" />
                <div>
                    <span>Calories burned</span>
                    <span>220 kcal</span>
                </div>
                
            </div>
            

        </div>

    </div>
  )
}

export default Hero