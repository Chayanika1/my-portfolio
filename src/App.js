import React from 'react';
import Info from './Pages/Info/Info';
import Navbar from './Pages/Navbar/Navbar';
import Particle from './Pages/Particle';

const App = () => {
    return (
        <div>
            <Navbar></Navbar>
        <Particle />
        
        <Info></Info>
            
        </div>
    );
};

export default App;