import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth ,db } from '../../Firestore/Firestore';
import './signup.css'

const initialState = { email: '', password: '', confirmPassword: '' };

const Signup = () => {
  const history = useHistory();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ target }) => {
    setInput({
      ...input,
      [target.name]: target.value,
    });
    
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password !== input.confirmPassword)
      return setError("Password don't match");

    try {
     const creatUser = await auth.createUserWithEmailAndPassword(input.email, input.password);
      setInput(initialState);
     
      await db.collection('users')
      .add({
         
          userId : creatUser.user.uid,
          email : input.email.toLowerCase(),
          data : [],
          dateCreated : Date.now()
      })

      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="sign__up">
    <div className='sign__up__title' >
      <h1>Sign Up Page</h1>

      </div>

<div className='sign__up__form' >  
      <form onSubmit={handleSubmit} className="form">

    <div className='sign__up__email'> 

        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={input.email}
          autoComplete="off"
          onChange={handleChange}
          name="email"
        />

      </div>


      <div className='sign__up__password'> 
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          onChange={handleChange}
          name="password"
        />

      

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="confirmPassword"
          value={input.confirmPassword}
          autoComplete="off"
          onChange={handleChange}
          name="confirmPassword"
        />
        </div>

        <div className='sign__up__btn'>

        <button type="submit">Submit</button>
        <p className="form__error">{error}</p>
        </div>

      </form>
      
      </div>

      <p className='sign__up_toLogin' >
        Already a user? <Link to="/login">Log In</Link>
      </p>

    </div>
  );
};

export default Signup;
