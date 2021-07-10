import React, { useState, Fragment } from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/reducers'
import { Redirect} from "react-router-dom";

const Login = (props) => {
    let {isLogginSuccess, login} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let errorsObj = {username:'', password:''};
    const [errors, setErrors] = useState(errorsObj);

    const handleSubmit = (e) => {
        e.preventDefault();
        let error = false;
        let errorObj = {...errorsObj};
        if(username === '') {
            errorObj.username = 'Username is required';
            error = true;
        }
        if(username !=='hruday@gmail.com') {
            errorObj.username = 'Invalid username';
            error = true;
        }
        if(password==='') {
            errorObj.password = 'Password is required';
            error = true;
        }
        if(password !== 'hruday123') {
            errorObj.password = 'Invalid password';
            error = true;
        }
        setErrors(errorObj);
        if(!error) {
            login(username,password);
        }
        
    }

    console.log(isLogginSuccess)

    return (
        <Fragment>
            <form onSubmit= {handleSubmit}>
                <div className='form-control'>
                <input type='email' 
                placeholder='Enter username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} />
                {errors.username && <div className='error'>{errors.username}</div>}
                </div>
                

                <div className='form-control'>
                <input type='password' 
                placeholder='Enter password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <div className='error'>{errors.password}</div>}
                </div>
                

                <button type='submit'>Login</button>
            </form>
            {isLogginSuccess && <Redirect push to="/dashboard"/> }
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        isLogginSuccess : state.isLogginSuccess
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username,password) => dispatch(login(username,password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
