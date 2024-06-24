import './microPanel.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Micropanel = ({ onMouseEnter, onMouseLeave }) => {
  const resumeClick = () => {
    alert("HICISTE CLICK EN RESUMEN");
  };

  const questionClick = () => {
    alert("HICISTE CLICK EN PREGUNTA");
  };

  const especialistaClick = () => {
    alert("HICISTE CLICK EN ESPECIALISTA");
  };

  return (
    <ButtonGroup
      className='panel-container'
      aria-label="Basic example"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Button className='btn-panel' variant="secondary" onClick={resumeClick}>Explicación</Button>
      <Button className='btn-panel' variant="secondary" onClick={questionClick}>Pregunta</Button>
      <Button className='btn-panel-default' variant="secondary" onClick={especialistaClick}>Especialista</Button>
    </ButtonGroup>
  );
};

export default Micropanel;
