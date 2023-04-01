import React from 'react';
import '../../styles/Card.css'
import './styles/styles.css';
import {Link} from 'react-router-dom'

export default function AuthForm(props){
    const {submitForm, page, prompt, title, username, setUsername, password, setPassword} = props;


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form className='auth-form-wrapper' >
            <h1>{title}</h1>
            <input className='form-control' type='text' placeholder='Username' aria-label='Username Field' name='username' 
                onChange={handleUsernameChange} value={username} required/>
            <input className='form-control' type='password' placeholder='Password' aria-label='Password Field' name='password' 
                onChange={handlePasswordChange} value={password} required/>
            <input className='form-control cust-btn' type='submit' value='Submit' aria-label='Submit Button' onClick={submitForm} />
            <Link to={page}>
                <div>{prompt}</div>
            </Link>
        </form>
    )
}