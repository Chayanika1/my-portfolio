import React from 'react';
import './Info.css';
import mine from '../../Images/MINE-removebg-preview.png';

const Info = () => {
    return (
        <div className='container'>
            <div className='row' id="my">
                <div className='col-lg-6 col-sm-12'>
                    <img className='mine' src={mine} alt="" />

                </div>
                <div className='col-lg-6 col-sm-12' id="desc">
                    <h1>CHAYANIKA CHAKRABORTY</h1>
                    <h3> I'm Front End Developer</h3>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                    <a class="btn btn-primary mb-4" href="https://drive.google.com/file/d/1Enu50Eg-GIukwuVNZL-sJq3dVzHsdDmh/view?usp=sharing" role="button">Download CV</a>
                </div>
            </div>
        </div>
        
            
        
    );
};

export default Info;