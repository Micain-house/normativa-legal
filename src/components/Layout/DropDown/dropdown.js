import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './dropdown.css'

const dropdown = ()=> {
  return (
    <DropdownButton id="dropdown-basic-button" title="Perfil normativo" className='btn-dropdown'>
      <Dropdown.Item href="#/action-1">Perfil 1</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Perfil 2</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Perfil 3</Dropdown.Item>
    </DropdownButton>
  );
}

export default dropdown;