import React from 'react';
import './Info.css';
import mine from '../../Images/MINE-removebg-preview.png';

const Info = () => {
    return (
        <div className='container'>
            <div className='row' id="my">
                <div className='col-lg-6 col-sm-12'>
                    <img className='mine' src={mine} alt=""/>

                </div>
                <div className='col-lg-6 col-sm-12' id="desc">
                    <h1>CHAYANIKA CHAKRABORTY</h1>
                    <h3> I'm Front End Developer</h3>
                    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button type="button" class="btn btn-primary btn-lg">
                        <a href="" ></a>Download CV</button>
                </div>
            </div>
            
        </div>
    );
};

export default Info;