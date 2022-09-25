import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container'id="con">
            <h1 className='text-center'>ABOUT ME</h1>
            <hr/>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <p className='para '> Hello. I am Chayanika Chakraborty. My hometown is West Bengal. I am a Front End Developer. I completed my B.Tech in Electronics 
                        and Communication Engineering from Maulana Abul Kalam Azad University Of Technology
                    </p>
                </div>
                <div className='col-lg-6 col-sm-12' id="menu">
                    <ul className='mine'>
                        <li> WBSE from Tarasundari Balika VidysBhaban</li>
                        <li>WBHSE from Santragachi Kedarnath Institutions For Girls</li>
                        <li>B.Tech from MAKAUT</li>
                    </ul>

                </div>
                
            </div>
            
        </div>
    );
};

export default About;