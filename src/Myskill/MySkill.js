
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from 'react';
import './MySkill.css';

const MySkill = () => {
    const steps = [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'REACT JS',
        'EXPRESS JS',
        'MONGO DB'
    ];
    return (
        <div className='container' id='hello'>
            <h1 className='text-center'>MY SKILLS</h1>
            <hr />

            <Stepper classNameactiveStep={6} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>



        </div>
    );
};

export default MySkill;