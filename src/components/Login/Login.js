import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth  } from '../../Firestore/Firestore';
import './Login.css'
const initialState = { email: '', password: '' };

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState(initialState);
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

    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput(initialState);

     

      history.push('/');
    } catch (err) {
      setInput(initialState)
      setError(err.message);
    }
  };

  return (
    <div className="login">

    <div className='login__title' >
      <h1>Login Page</h1>
    </div>


      <div className='login__form' >

      <form onSubmit={handleSubmit} className='form' >

        <div className='login__email' >  
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={input.email}
          autoComplete="off"
          onChange={handleChange}
          name="email"
        />

      </div>

      <div className='login__password' >  

        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={input.password}
          autoComplete="off"
          onChange={handleChange}
          name="password"
        />
        
        </div>

        <div className='login__btn' >  
        <button type="submit">Loge in</button>
        <p className="form__error">{error}</p>
      </div>


      </form>
      </div>

      <div className='login__toSignup' > 
      <p>
        Not a user? <Link to="/signup"> Sign Up</Link>
      </p>
      
       </div>
    </div>
  );
};

export default Login;
