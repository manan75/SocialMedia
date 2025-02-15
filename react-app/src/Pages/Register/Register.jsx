
import React from 'react'
import './Register.scss'
import { Link } from 'react-router-dom';
 function Register(){
  return (
    <div className='Register'>
        <div className='card'>
            <div className='left'>
                <h1>Hello world</h1>
                <p>
                    loream ipsum i loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i
                </p>
                <span>Do you have an account?</span>
                <Link to="/login">
                <button> Login</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder='Username'>
                    </input>
                    <input type="email" placeholder='Email'></input>
                    <input type="password" placeholder='Password'></input>
                    <input type="text" placeholder='Name'></input>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Register;