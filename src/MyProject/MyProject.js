import React from 'react';
import project1 from '../../src/Images/gym-trainer-c928c.web.app_(Pixel 5).png'
import project2 from '../../src/Images/my-asignment.web.app_(Pixel 5).png';
import project3 from '../../src/Images/tools-portal-50f7c.web.app_(Pixel 5).png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './MyProject.css';

const MyProject = () => {
    return (
        <div className='container'>
            <h1 className='text-center mt-3'>MY PROJECTS</h1>
            <hr />
            <div class="row row-cols-1 row-cols-md-3 g-4">
  
  </div>
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card ">
        <div className='mine1'>
        <img src={project1} class="card-img-top" alt="..."/>

        </div>
      
      <div class="card-body">
        <h5 class="card-title">OVERVIEW</h5>
        <p class="card-text">This is a front-end development.There is login system,an admin panel,and user system.For more details visit below link</p><br/>
        <button className="btn btn-primary btn-sm px-4">
                  <a
                    href="https://gym-trainer-c928c.web.app"
                    target="blank"
                  >
                    Live link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4 mx-4">
                  <a
                    href="https://github.com/Chayanika1/independent-service-provider"
                    target="blank"
                  >
                    Client Link
                  </a>
                </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div className='mine2'>
      <img src={project2} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">OVERVIEW</h5>
        <p class="card-text"> This is full stack web site. There is login system , an admin plnel and user system. More details visit below link</p>
        <button className="btn btn-primary btn-sm  mx-4">
                  <a
                    href="https://my-asignment.web.app"
                    target="blank"
                  >
                    Live Link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4 mx-2">
                  <a
                    href="https://github.com/Chayanika1/ware-house-management-client-side"
                    target="blank"
                  >
                    Client Link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4 ">
                  <a
                    href="https://github.com/Chayanika1/ware-house-management-server--side"
                    target="blank"
                  >
                    Server Link
                  </a>
                </button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <div className='mine3'>
      <img src={project3} class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">OVERVIEW</h5>
        <p class="card-text"> This is full stack web site. There is login system , an admin plnel and user system. More details visit blow link</p>
        <button className="btn btn-primary btn-sm px-4 ">
                  <a
                    href="https://tools-portal-50f7c.web.app/"
                    target="blank"
                  >
                    Live Link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4 mx-2">
                  <a
                    href="https://github.com/Chayanika1/manufacturer-website"
                    target="blank"
                  >
                    Client Link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4 ">
                  <a
                    href="https://github.com/Chayanika1/manufacture-website-server"
                    target="blank"
                  >
                    Server Link
                  </a>
                </button>
      </div>
    </div>
  </div>
 
  
</div>
</div>
            
                
       
    );
};

export default MyProject;

