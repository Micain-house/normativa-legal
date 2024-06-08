import React from 'react';
import './LoginForm.css';
import logo from '../../../assets/bg-login-register.webp'; // Asegúrate de tener esta imagen en la carpeta correcta
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from '../AuthValidation';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    if (data == ""){
   alert("campos vacios")
    }else{
      alert("datos enviados")
    }
  };



  return (
    <div className='register'>
      <div className='container-register'>
        <div className='formSection'>
          <h1 className='title-register'>WELLCOME</h1>
          <p className='subtitle-register'>Please complete the fields below for creating an account.</p>
          <form className='form-inputs' onSubmit={handleSubmit(onSubmit)}>
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
            <button type='submit' className='registerButton'>LOGIN</button>
            <p>Do you have an account? <a href='/register'>REGISTER</a></p>
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
