import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin =() =>{
        navigate('/login')
    }

  if(user){
      navigate('/home');
  }

    const handleRegister = event =>{
        event.preventDefault();
        const name= event.target.name.value;
        const email= event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div className='register-form'>
           <h1 style={{textAlign: 'center'}}>Please Register</h1> 
           <form onSubmit={handleRegister}>
               <input type='text' name='text' id='' placeholder='Your Name'></input>
               <input type='email' name='email' id='' placeholder='Your Email' required></input>
               <input type='password' name='password' id='' placeholder='Password' required></input>
               <input type='submit' value='Register'></input>
           </form>
           <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;