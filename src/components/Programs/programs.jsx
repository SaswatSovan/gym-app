import React from 'react'
import './programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'



const programs = () => {
  return (
    <div className="programs" id='programs'>

        {/* headers */}
        <div className="program-headers">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* Program Categories */}
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {/* Adding img,heading,details from programsData.js */}
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    
                    {/* Join Now with arrow */}
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow}></img>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default programs