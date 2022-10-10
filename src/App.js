import React from 'react';
import Coming from './Coming/Coming';
import MyProject from './MyProject/MyProject';
import MySkill from './Myskill/MySkill';
import About from './Pages/About/About';
import AskQuestion from './Pages/AskQuestion/AskQuestion';
import Info from './Pages/Info/Info';
import MyWork from './Pages/MyWork/MyWork';
import Navbar from './Pages/Navbar/Navbar';
import Particle from './Pages/Particle';
import SocialLink from './SocialLink/SocialLink';

import { useState } from 'react'
import { createMuiTheme, CssBaseline, Switch, ThemeProvider } from '@mui/material';



const App = () => {




  return (
    <div>



      <Navbar></Navbar>
      <Particle />

      <Info></Info>
      <About></About>
      <MyWork></MyWork>
      <MySkill></MySkill>
      <MyProject></MyProject>
      <Coming></Coming>
      <SocialLink></SocialLink>
      <AskQuestion></AskQuestion>

    </div>
  );

};

export default App;