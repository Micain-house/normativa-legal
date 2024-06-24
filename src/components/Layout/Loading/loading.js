import Spinner from 'react-bootstrap/Spinner';
import './loading.css'

const loading = () => {
  return (
    <Spinner animation="border" role="status" variant='dark'>
    </Spinner>
  );
}

export default loading;