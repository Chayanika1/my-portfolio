import React from 'react';
import './SocialLink.css';

const SocialLink = () => {
    return (
        <div className='container'id="social">
            <h1 className='text-center'>MY SOCIAL LINK</h1>
            <hr/>
            <div className='row text-center'>
                <div className='col-lg-4 col-sm-12'>
                    
                    <a class="btn btn-primary mb-3" href="https://www.facebook.com/Chayanika.me" role="button">FACEBOOK</a>
                    
                </div>
                <div className='col-lg-4 col-sm-12 mb-3'>
                <a class="btn btn-primary" href="https://github.com/Chayanika1" role="button">GITHUB</a>
                

                </div>
                <div className='col-lg-4 col-sm-12'>
                <a class="btn btn-primary" href="https://www.linkedin.com/in/chayanika-chakraborty-186478204" role="button">LINKEDIN</a>

                </div>
            </div>
            
        </div>
    );
};

export default SocialLink;
