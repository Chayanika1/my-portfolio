import React from 'react';
import About from './Pages/About/About';
import Info from './Pages/Info/Info';
import Navbar from './Pages/Navbar/Navbar';
import Particle from './Pages/Particle';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Particle />
        
        <Info></Info>
        <About></About>
            
        </div>
    );
};

export default App;