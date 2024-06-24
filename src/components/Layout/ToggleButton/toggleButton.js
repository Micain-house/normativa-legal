import React, { useState } from 'react';
import './toggleButton.css'; // Asegúrate de crear y enlazar el archivo CSS

const ToggleButton = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
      setIsOn(!isOn);
    };
  
    return (
    <div className='toggle-container'>
        <h1>Requerimiento normativo</h1>
      <div className="toggle-switch" onClick={handleToggle}>
        <div className={`switch ${isOn ? 'on' : 'off'}`}>
          <div className="switch-handle"></div>
        </div>
      </div>
    </div> 
    );
  };


export default ToggleButton;
