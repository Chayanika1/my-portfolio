import React from 'react';
import './MyWork.css';

const MyWork = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>MY WORK SUMMERY</h1>
            <hr />
            <div className='row '>
                <div className='col-lg-3 col-sm-12 text-center mx-auto' id="my1">
                <i class="fa fa-desktop " aria-hidden="true"></i>
                    <h2> 20+ Front End Project</h2>

                    
                </div>
                <div className='col-lg-3 col-sm-12 text-center mx-auto'id="my2">
                <i class="fa fa-users" aria-hidden="true"></i>
                    <h2>3+ Group Project</h2>

                </div>
                <div className='col-lg-3 col-sm-12 text-center mx-auto'id="my3">
                <i class="fa fa-laptop" aria-hidden="true"></i>
                    <h2>4+ Fullstack Projects </h2>

                </div>
            </div>
            
        </div>
    );
};

export default MyWork;
