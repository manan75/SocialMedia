
import React from 'react'
import './Login.scss';
import { Link } from 'react-router-dom';
 function Login(){
  return (
    <div className='Login'>
        <div className='card'>
            <div className='left'>
                <h1>Hello world</h1>
                <p>
                    loream ipsum i loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i  loream ipsum i
                </p>
                <span>Don't have an account?</span>
                <Link to="/register">
                <button> Register</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder='Username'>
                    </input>
                    <input type="text" placeholder='Password'></input>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Login;