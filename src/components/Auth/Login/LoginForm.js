import React, { useState } from 'react';
import './loginForm.css'; 
import logo from '../../../assets/bg-login-register.webp';
import { loginUser } from '../../../services/loginUser';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    if (!email || !password) {
      setErrorMessage('Los campos no pueden estar vacíos');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }

    try {
      const result = await loginUser(email, password);
      console.log('User logged in successfully:', result.data);
      if (result.data === "Invalid value") {
        setErrorMessage('Por favor verifique su correo o contraseña');
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      } else {
        alert('Has iniciado sesión correctamente');
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='register'>
      <div className='container-register'>
        <div className='formSection'>
          <h1 className='title-register'>WELCOME</h1>
          <p className='subtitle-register'>Please complete the fields below to sign in.</p>
          <div className='form-inputs'>
            <div className='inputGroup'>
              <label htmlFor='email'>E-mail</label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='inputGroup'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleLoginUser} className='registerButton'>SIGN IN</button>
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <p>Don't have an account? <a href='/register'>Register</a></p>
          </div>
        </div>
        <div className='img-register'>
          <img src={logo} alt='Background' className='backgroundImage' />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
