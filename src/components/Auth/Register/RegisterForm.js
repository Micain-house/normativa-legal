import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../AuthValidation';
import { createUser } from '../../../services/createUser';
import { useNavigate } from 'react-router-dom';
import './registerForm.css';
import logo from '../../../assets/bg-login-register.webp'; 

const RegisterForm = () => {

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    const savedData = sessionStorage.getItem('formData');
    console.log('Datos cargados del sessionStorage:', savedData);
    if (savedData) {
      reset(JSON.parse(savedData));
    }
  }, [reset]);

  const onSubmit = async (data) => {
    try {
      const userData = await createUser(data.name, data.email, data.password);
      console.log('User created successfully:', userData);
      alert("Usuario registrado correctamente");
      setSuccessMessage('Usuario registrado correctamente');

      navigate('/')

      sessionStorage.removeItem('formData'); 
      reset(); 
    } catch (error) {
      console.error('Error creating user:', error);
      setErrorMessage(`Hubo un error: ${error.message}`);
      alert("Error al crear el usuario");
    }
  };

  const handleInputChange = () => {
    const formData = {
      name: getValues('name'),
      email: getValues('email'),
      password: getValues('password'),
      confirmPassword: getValues('confirmPassword'),
    };
    console.log('Datos almacenados en sessionStorage:', formData);
    sessionStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div className='register'>
      <div className='container-register'>
        <div className='formSection'>
          <h1 className='title-register'>WELCOME</h1>
          <p className='subtitle-register'>Please complete the fields below for creating an account.</p>
          <form className='form-inputs' onSubmit={handleSubmit(onSubmit)} onChange={handleInputChange}>
            <div className='inputGroup'>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' {...register('name')} />
              {errors.name && <p className='error'>{errors.name.message}</p>}
            </div>
            <div className='inputGroup'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' {...register('email')} />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>
            <div className='inputGroup'>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' {...register('password')} />
              {errors.password && <p className='error'>{errors.password.message}</p>}
            </div>
            <div className='inputGroup'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <input type='password' id='confirmPassword' {...register('confirmPassword')} />
              {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
            </div>
            <button type='submit' className='registerButton'>REGISTER</button>
            {successMessage && <p className='success'>{successMessage}</p>}
            {errorMessage && <p className='error'>{errorMessage}</p>}
            <p className='link-form'>Do you have an account? <a href='/login'>Login</a></p>
          </form>
        </div>
        <div className='img-register'>
          <img src={logo} alt='Background' className='backgroundImage' />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;